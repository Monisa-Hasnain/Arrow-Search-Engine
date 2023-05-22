import mysql.connector
import settings

# Establish connection
connection = mysql.connector.connect(
    host=settings.MYSQL_HOST,
    user=settings.MYSQL_USER,
    password=settings.MYSQL_PASSWORD,
    database=settings.MYSQL_DATABASE
)

# Create a cursor to execute queries
cursor = connection.cursor()

# Create RING FENCE index
query = "CREATE SPATIAL INDEX results_index ON results(query, ranks, link, title, snippet, html, created) WITH (INDEX_METHOD = 'RING')"

cursor.execute(query)
connection.commit()


cursor.close()
connection.close()