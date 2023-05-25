from flask import Flask, render_template, request, jsonify
from search import search
from settings import BING_API_KEY, MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB, SEARCH_RESULT_LIMIT
import mysql.connector
import re
from flask_cors import CORS



app = Flask(__name__)

def sanitize_input(input_string):
    # Remove special characters using regular expressions
    sanitized_string = re.sub(r'[!@#$%^&*(),.?":{}|<>]', ' ', input_string)
    
    return sanitized_string

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        query = request.form.get("query")
        if query != None:   
            query = sanitize_input(query)
            results = search(query)
            # print(jsonify(results))
        else:
            return None
        return jsonify(results)
    return render_template("index.html")

@app.route("/news", methods=["POST"])
def news():
    print(request.form.get("query"))
    query = request.form.get("query")
    query = sanitize_input(query)
    results = searchNews(query)
    return jsonify(results)



def searchNews(query):
    
    # Check if search results already exist in the database
    conn = mysql.connector.connect(host=MYSQL_HOST, user=MYSQL_USER, password=MYSQL_PASSWORD, database=MYSQL_DB)
    cursor = conn.cursor()

    # Execute the second query to retrieve the desired search results
    cursor.execute("SELECT * FROM search_results WHERE (snippet LIKE '%news%' AND title LIKE '%news%') AND (snippet LIKE %s AND title LIKE %s) LIMIT %s", (f'%{query}%', f'%{query}%', SEARCH_RESULT_LIMIT))
    results = cursor.fetchall()
    if results:
        # Process and return the search results
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
        return search_results
    else :
        search_results = []
        return search_results

    cursor.close()
    conn.close()

@app.route("/adjust", methods=["POST"])
def adjust_results():
    data = request.json  # Access the JSON data sent in the request body
    result_id = data.get("result_id")
    action = data.get("action")

    # Update the priority or blocked status based on the action and result_id
    conn = mysql.connector.connect(host=MYSQL_HOST,user=MYSQL_USER,password=MYSQL_PASSWORD,database=MYSQL_DB)
    cursor = conn.cursor()

    if action == "up":
        cursor.execute("UPDATE search_results SET priority = priority + 1 WHERE id = %s", (result_id,))
    elif action == "down":
        cursor.execute("UPDATE search_results SET priority = priority - 1 WHERE id = %s", (result_id,))
    elif action == "block":
        cursor.execute("UPDATE search_results SET blocked = TRUE WHERE id = %s", (result_id,))

    conn.commit()
    cursor.close()
    conn.close()

    return jsonify({'success': True})

@app.after_request
def add_cors_headers(response):
    origin = request.headers.get('Origin')
    if not origin:
        response.headers['Access-Control-Allow-Origin'] = '*'
    else:
        response.headers['Access-Control-Allow-Origin'] = origin
    response.headers['Access-Control-Allow-Methods'] = 'GET, POST'
    response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
    return response


# @app.after_request
# def add_cors_headers(response):
#     origin = request.headers.get('Origin')
#     if not origin:
#         response.headers['Access-Control-Allow-Origin'] = '*'
#     else:
#         response.headers['Access-Control-Allow-Origin'] = origin
#     response.headers['Access-Control-Allow-Methods'] = 'GET, POST'
#     response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
#     return response

if __name__ == "__main__":
    app.run(port=5001)
