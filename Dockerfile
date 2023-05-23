# Base image for React frontend
FROM node:14 as frontend

WORKDIR /app/frontend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install frontend dependencies
RUN npm install

# Copy frontend source code
COPY ./src ./src
COPY ./public ./public

# Build the frontend
RUN npm run build

# Base image for Python backend
FROM python:3.10-alpine3.16 as backend

WORKDIR /app/backend

# Copy backend source code and requirements.txt
COPY main.py search.py settings.py storage.py requirements.txt ./

# Install backend dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Combined image with React frontend and Python backend
FROM python:3.10-slim

WORKDIR /app

# Copy built frontend files from the 'frontend' stage
COPY --from=frontend /app/frontend/build ./frontend

# Copy backend source code and dependencies from the 'backend' stage
COPY --from=backend /app/backend ./
COPY --from=backend /root/.cache /root/.cache

# Expose the required ports
EXPOSE 5000

# Start the backend server
CMD [ "python", "main.py" ]
