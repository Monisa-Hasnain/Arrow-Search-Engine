from flask import Flask
from flask_mysqldb import MySQL
import mysql.connector, PageRank

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/1')
def hello_wor():
    return 'Hello!'

@app.route('/2')
def hello_worl():
    return 'World!'

@app.route('/3')
def hello():
    return 'Hello World!'

@app.route('/4')
def hello_ldoo():
    return 'Hello-World - 4'

@app.route('/5')
def hello_ld():
    return 'Hello-World - 5'

@app.route('/6')
def hello_wor6():
    return 'Hello! - 6'

@app.route('/7')
def hello_worl7():
    return 'World! - 7'

@app.route('/8')
def hello8():
    return 'Hello World! - 8'

@app.route('/9')
def hello_ld9():
    return 'Hello-World - 9'

@app.route('/10')
def hello_ld10():
    return 'Hello-World - 10'

@app.route('/11')
def hello11():
    return 'Hello World! - 11'

@app.route('/12')
def hello_ld12():
    return 'Hello-World -  12'

@app.route('/13')
def hello_ld13():
    print("in 13")
    return 'Hello-World - 13'

# Define route to update page rank
@app.route('/<path:url>')
def update_page_rank(url):
    print("*********************update_page_rank***********************")
    db = mysql.connector.connect(host="localhost",user="root",password="root1234",database="ArrowSearchEngine")
    cursor = db.cursor()

    # url = "http://127.0.0.1:5000/1"
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

def main():
    app.run(debug=True)

if __name__ == '__main__':
    main()