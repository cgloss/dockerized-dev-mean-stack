# Create image based on the official Node 10 image from dockerhub
FROM node:10.10.0

# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Install utilities, nodemon for hot reload
RUN npm install -g nodemon typescript ts-node

# Copy dependency definitions
COPY package.json /app/package.json

# Install dependecies
RUN npm install \
 && npm ls \
 && npm cache clean --force \
 && mv /app/node_modules /node_modules

# Get all the code needed to run the app
COPY . /app

# Expose the port the app runs in
ENV PORT 3000
EXPOSE 3000

# Serve the app
CMD ["node", "server.js"]