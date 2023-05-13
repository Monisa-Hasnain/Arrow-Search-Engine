# MySQL settings
MYSQL_HOST = 'localhost'
MYSQL_USER = 'root'
MYSQL_PASSWORD = 'root1234'
MYSQL_DATABASE = 'ArrowSearchEngine'

# Search API settings
SEARCH_KEY = "AIzaSyCQpJKFLCmXJxu483S0LqS0wQ-3E9J1MJ4"
SEARCH_ID = "85c95d936b0354434"
COUNTRY = "us"
SEARCH_URL = "https://www.googleapis.com/customsearch/v1?key={key}&cx={cx}&q={query}&start={start}&num=10&gl=" + COUNTRY
RESULT_COUNT = 20