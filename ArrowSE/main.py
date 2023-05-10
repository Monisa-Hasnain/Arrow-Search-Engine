import mysql.connector
'''
under progress :
'''

def isAutenticated():
    '''Pass these values to connect to db host,user,password,database'''
    mydb = mysql.connector.connect('localhost','root','root1234','ArrowSearchEngine')

    if mydb.is_connected():
        print("Connection to MySQL database is active")
    else:
        print(" -----trying to reconnect to MySQL database----- ")
        mydb.ping(reconnect=True)
        if mydb.is_connected():
            print("Connection to MySQL database is active")
        else:
            print("Connection to MySQL database is inactive")
        
    return mydb

if __name__ == '__main__':

    conn = isAutenticated()
    conn.close()