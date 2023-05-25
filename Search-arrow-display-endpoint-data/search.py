# search.py
import requests
import mysql.connector
from settings import BING_API_KEY, MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB, SEARCH_RESULT_LIMIT
import json
import re

def search(query):
    print(query)
    # Check if search results already exist in the database
    conn = mysql.connector.connect(host=MYSQL_HOST, user=MYSQL_USER, password=MYSQL_PASSWORD, database=MYSQL_DB)
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM search_results WHERE query like %s LIMIT %s", (query,SEARCH_RESULT_LIMIT))
    results = cursor.fetchall()

    if results:
        # Search results exist in the database, return them
        search_results = []
        for result in results:
            search_result = {
                'id': result[0],
                'query': result[1],
                'title': result[2],
                'url': result[3],
                'snippet': result[4],
                'source': result[5],
                'image_urls': result[6],
                'video_urls': result[7],
                'priority': result[8],
                'blocked': result[9]
            }
            search_results.append(search_result)

        cursor.close()
        conn.close()

        return search_results

    # Search results not found in the database, make a Bing API request
    url = 'https://api.bing.microsoft.com/v7.0/search'
    headers = {'Ocp-Apim-Subscription-Key': BING_API_KEY}
    params = {'q': query, 'count':SEARCH_RESULT_LIMIT ,"textDecorations": True, "textFormat": "HTML"}
    response = requests.get(url, headers=headers, params=params)

    try:
        response.raise_for_status()
        data = response.json()

        # Extract relevant information from the API response and store in the database
        search_results = []
        if 'webPages' in data and 'value' in data['webPages']:
            for result in data['webPages']['value']:
                title = result.get('name', '')
                url = result.get('url', '')
                snippet = result.get('snippet', '')
                source = result.get('displayUrl', '')
                priority = 0  # Initial priority value
                blocked = False  # Initial blocked status

                image_urls = []
                if 'images' in data:
                    images = data['images']['value']
                    image_urls = [image.get('contentUrl', '') for image in images]

                video_urls = []
                if 'videos' in data:
                    videos = data['videos']['value']
                    video_urls = [video.get('contentUrl', '') for video in videos]

                snippet = re.sub('<.*?>', '', snippet)
                title = re.sub('<.*?>', '', title)


                print(snippet, title, "someting####################################################")
                image_urls_json = json.dumps(image_urls)
                video_urls_json = json.dumps(video_urls)

                print("#########################")
                # Insert the search result and additional information into the database
                cursor.execute("""
                    INSERT INTO search_results (query, title, url, snippet, source, priority, blocked, image_urls, video_urls)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
                """, (query, title, url, snippet, source, priority, blocked, image_urls_json, video_urls_json))
                conn.commit()

                # Create a dictionary representation of the search result
                search_result = {
                    'query': query,
                    'title': title,
                    'url': url,
                    'snippet': snippet,
                    'source': source,
                    'priority': priority,
                    'blocked': blocked,
                    'image_urls': image_urls,
                    'video_urls': video_urls
                }
                search_results.append(search_result)

        cursor.close()
        conn.close()
        # print(search_results)
        return search_results


    except requests.exceptions.HTTPError as e:
        print(f"HTTP Error: {e}")
    except requests.exceptions.RequestException as e:
        print(f"Request Exception: {e}")

    # Return an empty list if there was an error
    return []