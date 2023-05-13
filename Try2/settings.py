# MySQL settings
MYSQL_HOST = 'localhost'
MYSQL_USER = 'root'
MYSQL_PASSWORD = 'root1234'
MYSQL_DATABASE = 'ArrowSearchEngine'

# Google API settings
SEARCH_KEY = "AIzaSyCQpJKFLCmXJxu483S0LqS0wQ-3E9J1MJ4"
SEARCH_ID = "85c95d936b0354434"
COUNTRY = "us"
SEARCH_URL = "https://www.googleapis.com/customsearch/v1?key={key}&cx={cx}&q={query}&start={start}&num=10&gl=" + COUNTRY
RESULT_COUNT = 20


'''
# Bing API Configuration
BING_API_ENDPOINT = 'https://api.bing.com/path/to/endpoint'
BING_API_KEY = 'your_bing_api_key'
BING_API_PARAMETERS = {
    'param1': 'value1',
    'param2': 'value2',
    # ...
}
'''