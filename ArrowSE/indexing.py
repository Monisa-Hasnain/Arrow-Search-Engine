import mysql.connector

def create_ring_fence_index():
    db = mysql.connector.connect(
    host="localhost",user="root",password="root1234",database="ArrowSearchEngine")
    cursor = db.cursor()
    try:
        # Create the RING_FENCE index
        '''
        I have used index on title,author,descriptions,content,keywords,header_tags,image,video,metadata,inbound,outbound
        This meathod is not recommanded 

        But for now i have indexed on them till we get what requireds and not!
        '''
        create_index_query = """
        CREATE FULLTEXT INDEX idx_page_searchable ON page (
    title,
    author,
    descriptions,
    content,
    keywords,
    header_tags,
    image,
    video,
    metadata,
    inbound,
    outbound);
        """
        cursor.execute(create_index_query)
        print("RING_FENCE index created successfully.")
    except mysql.connector.Error as error:
        print(f"Error creating RING_FENCE index: {error}")
    db.commit()
    db.close()

def drop_ring_fence_index():
    db = mysql.connector.connect(
    host="localhost",user="root",password="root1234",database="ArrowSearchEngine")
    cursor = db.cursor()
    try:
        # Drop the RING_FENCE index
        drop_index_query = "DROP INDEX idx_page_searchable ON page;"
        cursor.execute(drop_index_query)
        print("RING_FENCE index dropped successfully.")
    except mysql.connector.Error as error:
        print(f"Error dropping RING_FENCE index: {error}")
    db.commit()
    db.close()

def check_ring_fence_index():
    db = mysql.connector.connect(
    host="localhost",user="root",password="root1234",database="ArrowSearchEngine")
    cursor = db.cursor()
    try:
        # Check if the RING_FENCE index exists
        show_index_query = "SHOW INDEX FROM page WHERE Key_name = 'idx_page_searchable';"
        cursor.execute(show_index_query)
        result = cursor.fetchall()
        print(result)
        if result:
            print("RING_FENCE index exists on the 'page' table.")
        else:
            print("RING_FENCE index does not exist on the 'page' table.")
    except mysql.connector.Error as error:
        print(f"Error checking RING_FENCE index: {error}")

# Uncomment the function calls based on your desired operation
# create_ring_fence_index()
# drop_ring_fence_index()
# check_ring_fence_index()

# Commit the changes and close the database connection
        db.commit()
        db.close()


check_ring_fence_index()