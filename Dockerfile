# Use the official Node.js 20 image as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json, yarn.lock and other necessary files
# You can adjust the list of copied files according to your project's structure
COPY package.json yarn.lock ./

# Install app dependencies using Yarn
RUN yarn install --frozen-lockfile

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Your app binds to port 7700-7799 so you'll use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 7700-7799

# Define the command to run your app using CMD which defines your runtime
CMD ["yarn", "start"]
