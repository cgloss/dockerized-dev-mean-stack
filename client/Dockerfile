# Create image based on the official Node 10 image from dockerhub
FROM node:10.10.0

# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Install nodemon for hot reload
RUN npm install -g nodemon
RUN npm config set registry https://registry.npmjs.org

# Copy dependency definitions
COPY package.json /app/package.json

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /app

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]