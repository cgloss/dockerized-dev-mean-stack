# Create image based on the official Node 10 image from dockerhub
FROM node:10.10.0

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Install nodemon for hot reload
RUN npm install -g nodemon

# Copy dependency definitions
COPY package.json /usr/src/app/package.json

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]