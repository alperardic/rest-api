FROM node:10
WORKDIR /rest-api
COPY package.json /rest-api
RUN npm install
COPY . /rest-api
CMD node casestudy.js
EXPOSE 8888
