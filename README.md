# WIKIINFOHUB

This is an NodeJs and npm project that extract the Wikipedia Infobox section into an JSON format. It is wrap as a web service call for any GET request from browser or application. You can test this API at https://wikiinfohub.herokuapp.com/wikiinfobox?title=iPhone%206&language=en

Drop me an email millenniummidis_sg[at]yahoo.com if you need a copy of the source code.

######Find out the Part-of-Speech type for a word (case sensitive)
https://wikiinfohub.herokuapp.com/lexical?title=apple will give you noun and adjective
<br>
https://wikiinfohub.herokuapp.com/lexical?title=banana&lexicaltomatched=noun,adjective will return "true" as it matched one of the criteria in the lexicaltomatched parameter. If it does not match any of the lexicaltomatched values, it will return false
<br>
https://wikiinfohub.herokuapp.com/lexical?title=Beckham&lexicaltomatched=noun,adjective or<br>
https://wikiinfohub.herokuapp.com/lexical?title=Beckham will return "No POS can be found" message as it is not an official English dictionary word.

######With ontology option - return only true or false if the title contain in the given ontology
https://wikiinfohub.herokuapp.com/findontology?title=Samsung&ontology=organization,business%20enterprise,family%20business,public%20company,company

######With ontology option with ambiguity option - return only true or false if the title contain in the given ontology
Sometimes we encounter names that may refer to other entities example "Apple" could be a fruit or a technology company. By adding the option ambiguity=true, the API will further search into any ambiguity related to "Apple". If the option is not made avaliable, ambiguity option will be by default false. (**Searching ambiguity will take additional time)
https://wikiinfohub.herokuapp.com/findontology?title=Apple&ontology=organization,business%20enterprise,family%20business,public%20company,company&ambiguity=false<br>
https://wikiinfohub.herokuapp.com/findontology?title=Apple&ontology=organization,business%20enterprise,family%20business,public%20company,company&ambiguity=true

######Without the ontology option - return all the ontology chain found for the title
https://wikiinfohub.herokuapp.com/findontology?title=Samsung

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
6. Launch a browser and test the api. Usage: http://localhost:8080/wikiinfobox?title=[Wiki page title]&language=en
7. Example: http://localhost:8080/wikiinfobox?title=iPhone 6&language=en

#####References
- http://blog.modulus.io/build-your-first-http-server-in-nodejs
- https://www.npmjs.com/package/wiki-infobox
- https://nodejs.org/api/url.html
- https://quickleft.com/blog/creating-and-publishing-a-node-js-module/
