# WIKIINFOHUB

This is an NodeJs and npm project that extract the Wikipedia Infobox section into an JSON format. It is wrap as a web service call for any GET request from browser or application.

#####Setup Nodejs and npm
1. sudo apt-get install nodejs
2. sudo apt-get install npm
3. cd ~/Documents   --this is the location where the libraries for the npm is installed
4. Install libraries required for extracting Wikipedia Infohub
5. npm install wiki-infobox
6. npm install httpdispatcher

#####Script to run the WikiInfoHub as a client web service
1. cd ~/Documents/node_modules/httpdispatcher
2. modify the httpdispatcher.js with the following line
    a. nano httpdispatcher.js
    b. Modify line 71 change the boolean value from true to false (the query property will not be parsed or decoded.)-->var url_parts = require('url').parse(req.url, false);
    c. save the file
3. cd ~/Documents/node_modules
4. Download the wiki-infobox-api.js from this repository
5. Run the file as a client side server web service using the terminal: node wiki-infobox-api.js
6. Launch a browser and test the api. Usage: http://localhost:8080/wikiinfobox?title=<Wiki page title>&language=en
7. Example: http://localhost:8080/wikiinfobox?title=iPhone 6&language=en

#####Links
- http://blog.modulus.io/build-your-first-http-server-in-nodejs
- https://www.npmjs.com/package/wiki-infobox
- https://nodejs.org/api/url.html
- https://quickleft.com/blog/creating-and-publishing-a-node-js-module/
