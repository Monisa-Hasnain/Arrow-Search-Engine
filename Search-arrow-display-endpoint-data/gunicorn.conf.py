# gunicorn.conf.py

# Number of worker processes
workers = 4

# Bind address and port
bind = '0.0.0.0:5001'

# Application module or package
app = 'main:app'  # Replace 'app' with the name of your Flask application object

# Logging configuration
accesslog = '-'  # Log to stdout
errorlog = '-'   # Log to stdout

timeout = 1000
