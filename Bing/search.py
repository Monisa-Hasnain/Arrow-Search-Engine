# search.py
import requests
import mysql.connector
from settings import BING_API_KEY, MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB, SEARCH_RESULT_LIMIT

def search(query):
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
                'query': result[0],
                'title': result[1],
                'url': result[2],
                'snippet': result[3],
                'source': result[4],
                'priority': result[5],
                'blocked': result[6]
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
        print(data,"\n")

        # Extract relevant information from the API response and store in the database
        search_results = []
        if 'webPages' in data and 'value' in data['webPages']:
            for result in data['webPages']['value'][:SEARCH_RESULT_LIMIT]:
                title = result.get('name', '')
                url = result.get('url', '')
                snippet = result.get('snippet', '')
                source = result.get('displayUrl', '')
                priority = 0  # Initial priority value
                blocked = False  # Initial blocked status
                print(query, title, url, snippet, source, priority, blocked,"\n")
                # Insert the search result into the database
                cursor.execute("""
                    INSERT INTO search_results (query, title, url, snippet,source, priority, blocked)
                    VALUES (%s, %s, %s, %s, %s, %s, %s)
                """, (query, title, url, snippet, source, priority, blocked))
                conn.commit()

                # Create a dictionary representation of the search result
                search_result = {
                    'query': query,
                    'title': title,
                    'url': url,
                    'snippet':snippet,
                    'source': source,
                    'priority': priority,
                    'blocked': blocked
                }
                search_results.append(search_result)

        cursor.close()
        conn.close()

        return search_results

    except requests.exceptions.HTTPError as e:
        print(f"HTTP Error: {e}")
    except requests.exceptions.RequestException as e:
        print(f"Request Exception: {e}")

    # Return an empty list if there was an error
    return []
