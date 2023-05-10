import mysql.connector
import csv
from datetime import datetime

def insert_data_from_csv(filename):
    '''will not work as of now '''
    db = mysql.connector.connect(host="localhost",user="root",password="root1234",database="ArrowSearchEngine")
    cursor = db.cursor()

    with open(filename, newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            publishing_date,PageRank,status_flag=datetime.now(),0.5,'unblocked'

            insert_query = "INSERT INTO page (URL, title, publishing_date, author, descriptions, content, keywords, header_tags, image, video, metadata, statusNo, PageRank, status_flag, inbound, outbound) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
            values = (row['URL'], row['title'], publishing_date, row['author'], row['descriptions'], row['content'], row['keywords'], row['header_tags'], row['image'], row['video'], row['metadata'], row['statusNo'], PageRank, status_flag, row['inbound'], row['outbound'])

            cursor.execute(insert_query, values)
    db.commit()
    db.close()

insert_data_from_csv('/Users/harikrishnareddy/Desktop/SEtable.csv')