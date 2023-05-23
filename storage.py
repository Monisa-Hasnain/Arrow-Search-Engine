import mysql.connector
from settings import MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DB

def connect():
    """Establishes a connection to the MySQL database."""
    conn = mysql.connector.connect(host=MYSQL_HOST,user=MYSQL_USER,password=MYSQL_PASSWORD,database=MYSQL_DB)
    return conn

def insert_search_results(query, results):
    """Inserts search results into the database."""
    conn = connect()
    cursor = conn.cursor()

    values = [(query, result['title'], result['url'], result['description']) for result in results]
    query = "INSERT INTO search_results (query, title, url, description) VALUES (%s, %s, %s, %s)"
    cursor.executemany(query, values)
    conn.commit()

    cursor.close()
    conn.close()

def fetch_search_results(query):
    """Fetches search results from the database for similar or partial matches."""
    conn = connect()
    cursor = conn.cursor()

    # Use the LIKE operator to search for similar or partial matches
    query = "SELECT * FROM search_results WHERE query LIKE %s"
    cursor.execute(query, ('%' + query + '%',))
    results = cursor.fetchall()

    cursor.close()
    conn.close()

    return results