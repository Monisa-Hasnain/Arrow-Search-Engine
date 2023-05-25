# Use the official Node.js base image with Windows
FROM node:14-alpine3.16 as frontend

# Set the working directory in the container
WORKDIR /app

# Copy the frontend files to the container
COPY package.json package-lock.json /app/
COPY src /app/src
COPY public /app/public

# Install frontend dependencies
RUN npm install --silent

# Build the frontend
RUN npm run build

# Use the official Python image as the base
FROM python:latest

# Set the working directory in the container
WORKDIR /app

COPY main.py search.py settings.py requirements.txt /app/

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application files to the container
COPY . /app/


# Install MySQL client
RUN apt-get update && apt-get install -y default-libmysqlclient-dev

# Copy the built frontend files from the frontend stage to the backend container
COPY --from=frontend /app/build /app/static

# Expose the port used by the backend
EXPOSE 5001

# Start Gunicorn server
CMD ["gunicorn", "main:app", "--bind", "0.0.0.0:5001"]

