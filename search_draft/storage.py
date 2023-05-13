import mysql.connector
import pandas as pd

class DBStorage():
    def __init__(self):
        self.con = mysql.connector.connect(
            host='localhost',
            user='root',
            password='root1234',
            database='ArrowSearchEngine'
        )
        self.setup_tables()

    def setup_tables(self):
        cur = self.con.cursor()
        results_table = r"""
            CREATE TABLE IF NOT EXISTS results (
                id INT AUTO_INCREMENT PRIMARY KEY,
                query TEXT,
                `rank` INT,
                link TEXT,
                title TEXT,
                snippet TEXT,
                html TEXT,
                created DATETIME,
                relevance INT,
                CONSTRAINT unique_query_link UNIQUE (query(255), link(255))
            );
            """
        cur.execute(results_table)
        self.con.commit()
        cur.close()
    
    def query_results(self, query):
        df = pd.read_sql(f"SELECT * FROM results WHERE query='{query}' ORDER BY `rank`", self.con)
        return df

    def insert_row(self, values):
        cur = self.con.cursor()
        try:
            cur.execute('INSERT INTO results (query, rank, link, title, snippet, html, created) VALUES(%s, %s, %s, %s, %s, %s, NOW())', values)
            self.con.commit()
        except mysql.connector.IntegrityError:
            pass
        cur.close()

    def update_relevance(self, query, link, relevance):
        cur = self.con.cursor()
        cur.execute('UPDATE results SET relevance=%s WHERE query=%s AND link=%s', [relevance, query, link])
        self.con.commit()
        cur.close()
