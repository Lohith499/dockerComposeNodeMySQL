#FROM to run nodejs    
FROM node:latest

#Create a directory to store the app code inside the image
RUN mkdir -p /usr/src/app

#Set the working directory to /usr/src/app

WORKDIR /usr/src/app

#Copy the current directory contents into the container at /usr/src/app

COPY package.json /usr/src/app

#Install any needed packages specified in package.json

RUN npm install

COPY . .
#Make port 3000 available to the world outside this container

RUN chmod +x wait-for-it.sh

EXPOSE 3000

CMD sh -c './wait-for-it.sh mysqlDB:3306 -- node index.js'
