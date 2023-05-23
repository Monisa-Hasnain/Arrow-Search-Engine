from flask import Flask, render_template, request, jsonify
from search import search
from settings import BING_API_KEY, MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB, SEARCH_RESULT_LIMIT
import mysql.connector

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        query = request.form.get("query")
        results = search(query)
        return jsonify(results)
    return render_template("index.html")

@app.route("/adjust", methods=["POST"])
def adjust_results():
    query = request.form.get("query")
    result_id = request.form.get("result_id")
    action = request.form.get("action")  # 'up', 'down', 'block'

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

if __name__ == "__main__":
    app.run(port=5001)
