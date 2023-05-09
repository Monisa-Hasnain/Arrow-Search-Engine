from azure-cognitiveservices-search-websearch import WebSearchAPI
from msrest.authentication import CognitiveServicesCredentials

# Set up the Bing API client
SUBSCRIPTION_KEY = 'your_subscription_key_here'
client = WebSearchAPI(CognitiveServicesCredentials(SUBSCRIPTION_KEY))

# Get the search query from the user
query = input('Enter your search query: ')

# Send the query to the Bing API and get the results
results = client.web.search(query=query).value

# Display the results
for result in results:
    print(result.name)
    print(result.url)
    print(result.snippet)
    print(' ')
