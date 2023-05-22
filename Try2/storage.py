import mysql.connector
from mysql.connector import Error
import pandas as pd
import settings

import mysql.connector

class MySQLDBStorage:
    def __init__(self):
        self.connection = mysql.connector.connect(
            host="localhost",
            user="root",
            password="root1234",
            database="ArrowSearchEngine",
        )
        self.cursor = self.connection.cursor()

    def insert_row(self, row):
        sql = "INSERT INTO results (query, ranks, link, title, snippet, html, created) VALUES (%s, %s, %s, %s, %s, %s, %s)"
        
        # Check the length of the HTML content
        max_html_length = 255
        html_content = row["html"]
        if len(html_content) > max_html_length:
            # Truncate the HTML content to fit within the column limit
            html_content = html_content[:max_html_length]

        values = (
            row["query"],
            row["ranks"],
            row["link"],
            row["title"],
            row["snippet"],
            html_content,
            row["created"],
        )
        try:
            self.cursor.execute(sql, values)
            self.connection.commit()
        except mysql.connector.Error as error:
            print("Error inserting row:", error)



    def query_results(self, query):
        query = f"SELECT * FROM results WHERE query = '{query}'"
        return pd.read_sql(query, self.connection)


def create_results_table():
    try:
        connection = mysql.connector.connect(
            host=settings.MYSQL_HOST,
            user=settings.MYSQL_USER,
            password=settings.MYSQL_PASSWORD,
            database=settings.MYSQL_DATABASE
        )
        cursor = connection.cursor()
        cursor.execute(
            """
            CREATE TABLE IF NOT EXISTS results (
                id INT AUTO_INCREMENT PRIMARY KEY,
                query VARCHAR(255),
                ranks INT,
                link VARCHAR(255),
                title VARCHAR(255),
                snippet TEXT,
                html TEXT,
                created DATETIME
            )
            """
        )
        connection.commit()
        print("Results table created.")
    except Error as e:
        print(f"Error creating results table: {e}")

