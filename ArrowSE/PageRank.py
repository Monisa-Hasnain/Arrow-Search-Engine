'''import numpy as np
import mysql.connector

def calculate_pagerank(conn):
    
    cur = conn.cursor()

    # get all pages
    cur.execute("SELECT id, URL FROM page")
    pages = cur.fetchall()

    # create adjacency matrix
    n = len(pages)
    adj_matrix = np.zeros((n, n))
    url_index_map = {}
    for i, (page_id, url) in enumerate(pages):
        url_index_map[url] = i

    cur.execute("SELECT id, content FROM page")
    content_data = cur.fetchall()

    for id, content in content_data:
        words = content.split()
        for word in words:
            if word in url_index_map:
                adj_matrix[url_index_map[word], url_index_map[id]] = 1

    # normalize matrix columns
    col_sums = adj_matrix.sum(axis=0)
    col_sums[col_sums == 0] = n  # handle nodes with no out-links
    adj_matrix /= col_sums

    # initialize PageRank vector
    pagerank = np.ones(n) / n

    # iterate until convergence
    alpha = 0.85
    eps = 1e-6
    while True:
        prev_pagerank = pagerank
        pagerank = alpha * adj_matrix @ pagerank + (1 - alpha) / n
        if np.linalg.norm(pagerank - prev_pagerank) < eps:
            break

    # update database with PageRank scores
    for i, (page_id, url) in enumerate(pages):
        cur.execute("UPDATE page SET PageRank = %s WHERE id = %s", (pagerank[i], page_id))

    conn.commit()
    cur.close()'''

import mysql.connector


db = mysql.connector.connect(host="localhost",user="root",password="root1234",database="ArrowSearchEngine")

cursor = db.cursor()
url = "http://127.0.0.1:5000/13"
select_query = "SELECT PageRank FROM page WHERE URL = %s"
cursor.execute(select_query, (url,))
result = cursor.fetchone()

if result is not None:
    current_page_rank = result[0]
    new_page_rank = current_page_rank + 1
    update_query = "UPDATE page SET PageRank = %s WHERE URL = %s"
    cursor.execute(update_query, (new_page_rank, url))
    db.commit()
    print("PageRank for", url, "updated to", new_page_rank)
else:
    insert_query = "INSERT INTO page (URL, PageRank) VALUES (%s, 1)"
    cursor.execute(insert_query, (url,))
    db.commit()
    print(url, "added to database with a PageRank of 1")
db.close()
