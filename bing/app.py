from flask import Flask, request, jsonify
from azure.core.credentials import AzureKeyCredential
from azure.search.websearch import WebSearchClient

# Set up the Bing API client
SUBSCRIPTION_KEY = 'your_subscription_key_here'
credential = AzureKeyCredential(SUBSCRIPTION_KEY)
client = WebSearchClient(endpoint="https://your_search_service_name_here.cognitiveservices.azure.com/", credential=credential)

# Create the Flask app
app = Flask(__name__)

# Define the search endpoint
@app.route('/search')
def search():
    # Get the search query from the URL parameters
    query = request.args.get('query')

    # Send the query to the Bing API and get the results
    response = client.search(query=query)
    results = response.results

    # Convert the results to a JSON object and return it
    result_list = []
    for result in results:
        result_dict = {
            'name': result.name,
            'url': result.url,
            'snippet': result.snippet
        }
        result_list.append(result_dict)
    return jsonify(result_list)

# Run the Flask app
if __name__ == '__main__':
    app.run()


# @app.route('/search')
# def search():
#     query = request.args.get('query')  # Get the search query from the request parameters
#     api_key = 'BING_API_KEY'  # Replace with your Bing API key

#     # parameters for the API request
#     params = {
#         'q': query,
#         'count': 10,  # Number of search results to retrieve
#         'responseFilter': 'webpages',  # Filter the response to include only webpages
#         'safeSearch': 'Off',  # Set the safe search option (e.g., 'Off', 'Moderate', 'Strict')
#     }

#     # Make the API request
#     headers = {'Ocp-Apim-Subscription-Key': api_key}
#     response = requests.get('https://api.cognitive.microsoft.com/bing/v7.0/search', params=params, headers=headers)
#     results = response.json()

#     return jsonify(results)