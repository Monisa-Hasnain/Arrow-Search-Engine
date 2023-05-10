import mysql.connector

def fetch_documents_from_mysql():
    # Establish a connection to your MySQL database
    connection = mysql.connector.connect(
        host="localhost",
        user="root",
        password="root1234",
        database="ArrowSearchEngine"
    )

    # Create a cursor object to execute SQL queries
    cursor = connection.cursor()

    # Execute a SELECT query to fetch the desired data from your table
    query = "SELECT * FROM page"
    cursor.execute(query)

    # Fetch all the rows returned by the query
    rows = cursor.fetchall()

    # Close the cursor and database connection
    cursor.close()
    connection.close()

    # Construct the list of documents from the fetched rows
    documents = []
    for row in rows:
        document = {
            "URL": row[1],
            "title": row[2],
            "publishing_date": row[3],
            "author": row[4],
            "descriptions": row[5],
            "content": row[6],
            "keywords": row[7],
            "header_tags": row[8],
            "image": row[9],
            "video": row[10],
            "metadata": row[11],
            "statusNo": row[12],
            "PageRank": row[13],
            "status_flag": row[14],
            "inbound": row[15],
            "outbound": row[16]
        }
        documents.append(document)
    print(documents[0])
    return documents


fetch_documents_from_mysql()