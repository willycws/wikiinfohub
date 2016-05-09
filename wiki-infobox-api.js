//Lets require/import the HTTP module
var http = require('http');
var dispatcher = require('httpdispatcher');
var infobox = require('wiki-infobox');
var title='';

//Lets define a port we want to listen to
const PORT=8080; 

//For all your static (js/css/images/etc.) set the directory name (relative path).
dispatcher.setStatic('resources');

function handleRequest(request, response){
    try {
        //log the request on console
        //console.log(request.url);
	//Disptach
        dispatcher.dispatch(request, response);       
    } catch(err) {
        console.log(err);
    }
}

//GET request for /wikiinfobox
dispatcher.onGet("/wikiinfobox", function(req, res) {
	var uri = req.url;
	var queryList;
   	var title;
	var language;

	//Example: title=iPhone 6&language=en
    	uri = uri.split("?")[1];
	queryList = uri.split("&");

	title = queryList[0].split("=")[1];
	title = replaceAll(title,"%20", " ").replace("/","");

	language = queryList[1].split("=")[1];
	console.log(title + ":" + language)
	infobox(title, language, function(err, data){    
		if (err) {
    			res.write("[Error: No infobox found!]");  
			res.end();  	
		    	return;
  		}else{
			res.setHeader('Content-Type', 'application/json');
    			res.write(JSON.stringify(data));  
			res.end();  	
			return;
		}
 		
  		//console.log(data);
	});	
});


function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
