from elasticsearch import Elasticsearch
from elasticsearch.helpers import parallel_bulk
import fecthingDocs

def index_documents_bulk(documents, index_name, batch_size=1000):
    es = Elasticsearch()
    actions = []

    for i, doc in enumerate(documents):
        action = {
            "_index": index_name,
            "_source": doc
        }
        actions.append(action)

        if i > 0 and i % batch_size == 0:
            # Perform bulk indexing for the current batch
            response = parallel_bulk(es, actions)
            
            # Process response or handle errors if needed
            
            # Clear the actions list for the next batch
            actions = []

    if actions:
        # Perform bulk indexing for the remaining documents
        response = parallel_bulk(es, actions)
        
        # Process response or handle errors if needed

    return response

documents = fecthingDocs.fetch_documents_from_mysql()
index_name = "my_index"
batch_size = 1000  # Adjust the batch size as needed

index_documents_bulk(documents, index_name, batch_size)
