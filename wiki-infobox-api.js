//Lets require/import the HTTP module
var http = require('http');
var dispatcher = require('httpdispatcher');
var infobox = require('wiki-infobox');
//var httprequest = require('request');
var Client = require('node-rest-client').Client;
// var ajaxrequest = require('ajax-request');
var client = new Client();
var title='';
var fs = require('fs');
var uuid = require('uuid');
var HashTable = require('hashtable');
var Q = require('q');

var TreeModel = require('tree-model');

dispatcher.onGet("/test", function(req, res) {
	var str = "Q4830453:business enterprise,Q43229:organization,Q874405:social group,Q16334295:group of humans,Q16334298:living thing group,Q517966:structure";
	var str_replace = "Q4830453:business enterprise,Q43229:organization,Q874405:social group";
	console.log(str_replace.replace("Q874405:social group",str.substring(str.indexOf("Q874405:social group"))));
	// var Node = require("tree-node");
	
	// var hashtable = new HashTable();
	// var node = new Node();
	// var rootNode = new Node();
	
	// rootNode.data("id","smrt");
	// hashtable.put("smrt",rootNode.id);
	
	// node.data("id","scania");
	// hashtable.put("scania",node.id);
	// rootNode.appendChild(node);
	
	// node = new Node();
	// node.data("id","merz");
	// hashtable.put("merz",node.id);
	// //append merz to scania
	// rootNode.getNode(hashtable.get("scania")).appendChild(node);
	
	// node = new Node();
	// node.data("id","man");
	// hashtable.put("man",node.id);
	// //append man to smrt
	// rootNode.getNode(hashtable.get("smrt")).appendChild(node);
	
	// node = new Node();
	// node.data("id","dennis");
	// hashtable.put("dennis",node.id);
	// //append dennis to man
	// rootNode.getNode(hashtable.get("man")).appendChild(node);
	
	// node = new Node();
	// node.data("id","citycab");
	// hashtable.put("citycab",node.id);
	// //append citycab to merz
	// rootNode.getNode(hashtable.get("merz")).appendChild(node);
	
	// node = new Node();
	// node.data("id","comfort");
	// hashtable.put("comfort",node.id);
	// //append comfort to merz
	// rootNode.getNode(hashtable.get("merz")).appendChild(node);
	
	// node = new Node();
	// node.data("id","transcab");
	// hashtable.put("transcab",node.id);
	// //append transcab to dennis
	// rootNode.getNode(hashtable.get("dennis")).appendChild(node);
	
	// node = new Node();
	// node.data("id","smartcab");
	// hashtable.put("smartcab",node.id);
	// //append smartcab to dennis
	// rootNode.getNode(hashtable.get("dennis")).appendChild(node);
	
	// node = new Node();
	// node.data("id","toyota");
	// hashtable.put("toyota",node.id);
	// //append toyota to citycab
	// rootNode.getNode(hashtable.get("citycab")).appendChild(node);
	
	// node = new Node();
	// node.data("id","hyndai");
	// hashtable.put("hyndai",node.id);
	// //append hyndai to citycab
	// rootNode.getNode(hashtable.get("citycab")).appendChild(node);
	
	// node = new Node();
	// node.data("id","kia");
	// hashtable.put("kia",node.id);
	// //append kia to hyndai
	// rootNode.getNode(hashtable.get("hyndai")).appendChild(node);
	
	// node = new Node();
	// node.data("id","korea");
	// hashtable.put("korea",node.id);
	// //append korea to kia
	// rootNode.getNode(hashtable.get("kia")).appendChild(node);
	
	// //get kia nodes and copy to toyota
	// node = rootNode.getNode(hashtable.get("kia"));
	// var newNodeChain = new Node();
	// newNodeChain.data("id",node.data);
	// //loop the sub chain to add to the newNodeChain
	// createNewNodes(true);
	// var trackNodeId;
	// function createNewNodes(boo){
	// 	if (boo == true){
	// 		node = node.nextNode();
	// 		if (node != null){
	// 			var newNode = new Node();
	// 			newNode.data("id",node.data);
	// 			newNodeChain.appendChild(newNode);
	// 			newNodeChain = newNodeChain.getNode(newNode.id);
	// 			trackNodeId = newNode.id;
	// 			createNewNodes(true);
	// 		}else{
	// 			createNewNodes(false);
	// 		}
	// 	}
	// }
	
	// rootNode.getNode(hashtable.get("toyota")).appendChild(newNodeChain);
	
	// var result = JSON.stringify(rootNode.getNode(hashtable.get("hyndai")));
	
	// result = JSON.parse(result);
	// console.log(result);
	
	// result = JSON.stringify(rootNode.getNode(trackNodeId));
	
	// result = JSON.parse(result);
	// console.log(result);
	
	// //get its immediate children
	// var children = result.childs;
	// //children = JSON.parse(children);
	
 //console.log(	children);
	
});


// dispatcher.onGet("/test", function(req, res) {
//     var tree = new TreeModel();
//     // var root = tree.parse({name: 'a', children: [{name: 'b'}, {name: 'c'}]});
// //	parentNode.addChildAtIndex(childNode, index);


// 	var hashtableBuses = new HashTable();
// 	var parent;
// 	var root = tree.parse({
// 	    id: 'SMRT'
// 	});
// 	hashtableBuses.put("smrt", root);
// 	// root = tree.parse({
// 	//     id: 'SBS'
// 	// });
// 	// hashtableBuses.put("sbs", root);
// 	// hashtableBuses.put("goegales", root);
// 	// root = tree.parse({
// 	//     id: 'goegales'
// 	// });
// 	// hashtableBuses.put("goegales", root);

// 	//add child scania to smrt
// 	var node = tree.parse({
// 	    id: 'scania'
// 	});
	
// 	parent = hashtableBuses.get("smrt");
// 	parent.addChild(node);
	
// 	node = tree.parse({
// 	    id: 'nissan'
// 	});
	
// 	var search = 'scania';
// 	parent = hashtableBuses.get("smrt").first(function (node) {
//     	return node.model.id === search;
// 	});
// 	parent.addChild(node);
	
// 	console.log(parent.getIndex());
	
// 	//---add another subroot to root
// 	var root = tree.parse({
// 	    id: 'nissan'
// 	});
	
// 	node = tree.parse({
// 	    id: 'toyota'
// 	});
	
// 	root.addChild(node);
	
// 	parent = parent.first(function (node) {
//     	return node.model.id === "scania";
// 	});

// 	//remove nissan from main tree
// 	parent.all( /* predicate */ ).forEach(function (node) {
// 		if (node.model.id == "nissan"){
// 			node.drop();
// 		}
// 	});
	
// 	var arrayNode = parent.getPath();
// 	for (var c = 0;c<arrayNode.length;c++){
// 		console.log("a: "+arrayNode[c].model.id);
// 	}
	
// 	parent.addChild(root);
	
// 	//remove toyota from the child from main tree
// 	var droppedNode;
// 	parent.all( /* predicate */ ).forEach(function (node) {
// 		if (node.model.id == "toyota"){
// 			droppedNode = node.drop();
// 		}
// 	});
// 	console.log(droppedNode.model.id + " is dropped.");
	
// 	// arrayNode = parent.getPath();
// 	// for (var c = 0;c<arrayNode.length;c++){
// 	// 	console.log("b: "+arrayNode[c].model.id);
// 	// }
	
// 	// arrayNode = root.getPath();
// 	// for (var c = 0;c<arrayNode.length;c++){
// 	// 	console.log("c: "+arrayNode[c].model.id);
// 	// }
	
// 	// //remove toyota from the child from main tree
// 	// parent.all( /* predicate */ ).forEach(function (node) {
// 	// 	if (node.model.id == "toyota"){
// 	// 		console.log(node.model.id + " is dropped.");
// 	// 		node.drop();
// 	// 	}
// 	// });
	
// 	root = tree.parse({
// 	    id: 'citrogen'
// 	});
	
// 	node = tree.parse({
// 	    id: 'sbst'
// 	});
	
// 	root.addChild(node);
	
// 	parent = parent.first(function (node) {
//     	return node.model.id === "nissan";
// 	});
	
// 	parent.addChild(root);
	
// 	var index = -1;
// 	var indexOfNissan;
// 	parent = hashtableBuses.get("smrt");
	
// 	parent.all().forEach(function (node) {
// 		index++;
// 	  if (node.model.id == "nissan"){
// 			indexOfNissan = index;
// 		}
// 	});
// 	console.log("index of nissan is: "+indexOfNissan);
	
// 	parent = hashtableBuses.get("smrt").first(function (node) {
//     	return node.model.id === search;
// 	});
	
// 	//find node to delete
// 	node = parent.first(function (node) {
//     	return node.model.id === "citrogen";
// 	});
	
// 	node.drop();
	
// 	// node = tree.parse({
// 	//     id: 'toyota'
// 	// });
// 	// search = 'scania';
// 	// parent = hashtableBuses.get("smrt").first(function (node) {
//  //   	return node.model.id === search;
// 	// });
// 	// parent.addChild(node);
	
// 	// node = tree.parse({
// 	//     id: 'merz'
// 	// });
// 	// search = 'toyota';
// 	// parent = hashtableBuses.get("smrt").first(function (node) {
//  //   	return node.model.id === search;
// 	// });
// 	// parent.addChild(node);
	
// 	// node = tree.parse({
// 	//     id: 'hynudai'
// 	// });
// 	// search = 'merz';
// 	// parent = hashtableBuses.get("smrt").first(function (node) {
//  //   	return node.model.id === search;
// 	// });
// 	// parent.addChild(node);
	
// 	// node = tree.parse({
// 	//     id: 'man'
// 	// });
	
// 	// search = 'hynudai';
// 	// parent = hashtableBuses.get("smrt").first(function (node) {
//  //   	return node.model.id === search;
// 	// });
// 	// parent.addChild(node);
	
// 	// node = tree.parse({
// 	//     id: 'gogo'
// 	// });
	
// 	// search = 'man';
// 	// parent = hashtableBuses.get("smrt").first(function (node) {
//  //   	return node.model.id === search;
// 	// });
// 	// parent.addChild(node);
// 	// var parentbackup = parent;
// 	// parent.drop();
	
// 	// search = 'smrt';
// 	// parent = root.first(function (node) {
//  //   	return node.model.id === search;
// 	// });
// 	// parent.addChild(parentbackup);
// 	// hashtableBuses.put("smrt");
	
	
	
	
// 	// hashtableBuses.put("smrt", parent);
// 	// hashtableBuses.put("scania", node);
	
// 	// //add child merz to scania and then add to smrt
// 	// node = tree.parse({
// 	//     id: 'merz'
// 	// });
// 	// parent = hashtableBuses.get("smrt");
// 	// parent.addChild(node);
// 	//parent.addChildAtIndex(node, 1);
// 	// hashtableBuses.put("scania", parent);
// 	// hashtableBuses.put("merz", node);
	
// 	// node = parent;
// 	// parent = hashtableBuses.get("smrt");
// 	// parent.addChildAtIndex(node, 0);
// 	// // parent.addChild(node);
// 	// hashtableBuses.put("smrt", parent);
	
// 	// //add child merz to scania and then add to smrt
// 	// node = tree.parse({
// 	//     id: 'toyota'
// 	// });
// 	// parent = hashtableBuses.get("merz");
// 	// parent.addChild(node);
// 	// hashtableBuses.put("merz", parent);
// 	// hashtableBuses.put("toyota", node);

// 	// node = parent;
// 	// parent = hashtableBuses.get("scania");
// 	// parent.addChild(node);
// 	// hashtableBuses.put("scania", parent);
	
// 	// node = parent;
// 	// parent = hashtableBuses.get("smrt");
// 	// parent.addChild(node);
// 	// hashtableBuses.put("smrt", parent);
	
// 	// node = tree.parse({
// 	//     id: 'nissan'
// 	// });
// 	// parent = hashtableBuses.get("toyota");
// 	// parent.addChild(node);
// 	// hashtableBuses.put("toyota", parent);
// 	// hashtableBuses.put("nissan", node);

// 	// node = parent;
// 	// parent = hashtableBuses.get("merz");
// 	// parent.addChild(node);
// 	// hashtableBuses.put("merz", parent);

// 	// node = parent;
// 	// parent = hashtableBuses.get("scania");
// 	// parent.addChild(node);
// 	// hashtableBuses.put("scania", parent);
	
// 	// node = parent;
// 	// parent = hashtableBuses.get("smrt");
// 	// parent.addChild(node);
// 	// hashtableBuses.put("smrt", parent);

// 	// hashtableBuses.get("smrt").walk({strategy: 'pre'},function (node) {
// 	// 	console.log(node.model.id);
// 	// }); 

// 	// Using our async walk function...
// 	asyncWalk(hashtableBuses.get("smrt")).then(function (leafPromisesResult) {
// 	  leafPromisesResult.forEach(function (leafPromiseResult) {
// 	    console.log("ordered results: " + leafPromiseResult);
// 	  });
// 	});
	
// 	function longTask(node) {
// 	  // Some long running task
// 	  //console.log("Running long task on node " + node.model.id);
	
// 	  // Fake result
// 	  return node.model.id;
// 	}
	
// 	function asyncWalk(node) {
// 	  var leafPromises = [];
// 	  var promisesTemp = {};
	
// 	  node.walk(function (node) {
// 	    var nodePromise;
// 	    if (node.isRoot()) {
// 	      nodePromise = Q.fcall(function () {
// 	        return [longTask(node)];
// 	      });
// 	    } else {
// 	      nodePromise = promisesTemp[node.parent.model.id].then(function (prevResult) {
// 	        return prevResult.concat(longTask(node));
// 	      });
// 	    }
	
// 	    if (!node.hasChildren()) {
// 	      leafPromises.push(nodePromise);
// 	    } else {
// 	      promisesTemp[node.model.id] = nodePromise;
// 	    }
// 	  });
	
// 	  return Q.all(leafPromises);
// 	}

// 	// var root = tree.parse({
// 	//     id: 'Q1',
// 	//     children: [
// 	//         {
// 	//             id: 'Q11',
// 	//             children: [{id: 'Q111'}]
// 	//         },
// 	//         {
// 	//             id: 'Q12',
// 	//             children: [{id: 'Q121'}, {id: 'Q122'}]
// 	//         },
// 	//         {
// 	//             id: 'Q13'
// 	//         }
// 	//     ]
// 	// });
	
// 	// var hashtable = new HashTable();
// 	// hashtable.put("root", root);
// 	// var node123 = tree.parse({id: 'Q123', children: [{id: 'Q1231'}]});
// 	// hashtable.put("node123", node123);
	
	
// 	// // Add it to the parent
// 	// var parent = hashtable.get("root");
// 	// node123 = hashtable.get("node123");
// 	// parent.addChild(node123);
// 	// //root.addChildAtIndex(node123, 2);
	
	

// 	console.log("It is printed already");
	
	
	

// });

// var results = {
// 	    ontologyResult: new Array(),
// 	    P31Result: new Array(),
// 	    addOntology: function (ontology)  {
// 	      this.ontologyResult.push(ontology);
// 	    },
// 	    addP31Entity: function (p31_entity)  {
// 	      this.P31Result.push(p31_entity);
// 	    }
// };

// var resultsOntology = {
// 	    ontologyResult: new Array(),
// 	    P31Result: new Array(),
// 	    // addOntology: function (ontology)  {
// 	    //   this.ontologyResult.push(ontology);
// 	    // },
// 	    // addP31Entity: function (p31_entity)  {
// 	    //   this.P31Result.push(p31_entity);
// 	    // },
// 	    searchEntity: function (filePathEntity,filePathOntology)  {
// 	    	//read in the contain in the file
// 	    	fs.readFile(filePathEntity, 'utf8', function(err, contents) {
// 		    	var content = contents.toString().split('\n');
// 		    	//process each entity id and see if additional sub class P279 entity id can be retrieved.
		    	
// 		    	function processEntityId(i){
// 		    		if (i < content.length-1){
// 		    			var entityIdKey = content[i];
// 		    			client.get("https://www.wikidata.org/w/api.php?action=wbgetentities&ids="+entityIdKey+"&props=labels|descriptions|claims&languages=en&languagefallback=&sitefilter=azwiki&format=json", function (data, response) {
	    				
// 		    				var label = data.entities;
// 							var p279_section = label[entityIdKey].claims;
// 							label = label[entityIdKey].labels;
// 							label = label.en.value;
// 							//writes this entity label to the ontology file
// 							function writeLabelToFile(x){
// 								if (x < 1){
// 									fs.appendFile(filePathOntology, label + "\n", (err) => {
// 			  							if (err){ throw err;}
// 			  							else {writeLabelToFile(x+1);}
// 									});
// 								}
// 							}
// 			    			writeLabelToFile(0);
			    			
// 							//write the p279 section entity id to the entityID file
// 							p279_section = p279_section['P279'];
// 							//loop the p279 section to retrieve all the entity id
// 							for(var j = 0; j < p279_section.length; j++) {
// 								var obj = p279_section[j];
// 								obj = obj.mainsnak.datavalue.value;
// 								var entityID = JSON.stringify(obj['numeric-id']);
// 								if (entityID.indexOf("Q") < 0){
// 									entityID = "Q" + entityID;
// 								}
// 								function writeEntityIDToFile(x){
// 									if (x < 1){
// 										fs.appendFile(filePathEntity+"_tmp", entityID + "\n", (err) => {
// 				  							if (err){ throw err;}
// 				  							else {writeLabelToFile(x+1);}
// 										});
// 									}
// 								}
// 								writeEntityIDToFile(0);
// 							}
// 							processEntityId(i+1);	
// 			    		});
			    		
// 		    		}else{
// 		    // 			//remove the entity file to be replaced by the new one
// 		    // 			function deleteFile(x){
// 		    // 				if (x < 1){
// 		    // 					fs.exists(filePathEntity, function(exists) {
// 						// 			if(exists) {
// 						// 			    fs.unlink(filePathEntity);
// 						// 			}
// 						// 			deleteFile(x+1);
// 						// 		});
// 		    // 				}
// 		    // 			}
// 						// deleteFile(0);
						
// 						//rename the filePathEntity+"_tmp" file to the filePathEntity filename
// 						function renameFile(x){
// 		    				if (x < 1){
// 		    					fs.rename(filePathEntity+"_tmp", filePathEntity, function (err) {
// 									if (err) {throw err;}
// 									else {
// 										renameFile(x+1);
// 										console.log('renamed complete');
// 									}
									  
// 								});
// 		    				}
// 		    			}
// 						renameFile(0);
// 		    		}
// 		    	}
// 		    	processEntityId(0);
		    	
// 		    // 	for (var i=0;i<content.length-1;i++){
// 		    // 		//for each entity id get the labels and its P279:subclass of id 
// 		    // 		client.get("https://www.wikidata.org/w/api.php?action=wbgetentities&ids="+content[i]+"&props=labels|descriptions|claims&languages=en&languagefallback=&sitefilter=azwiki&format=json", function (data, response) {
	    				
// 	    	// 			var label = data.entities;
// 						// var p279_section = label[entityIdKey];
// 						// console.log(entityIdKey);
// 						// console.log(label);
// 						// p279_section = p279_section.claims;
// 						// label = label[content[i]].labels;
// 						// label = label.en.value;
// 						// //writes this entity label to the ontology file
// 		    // 			fs.appendFile(filePathOntology, label + "\n", (err) => {
//   				// 			if (err) throw err;
// 						// });	
						
// 						// //write the p279 section entity id to the entityID file
// 						// p279_section = p279_section['P279'];
// 						// 	//loop the p279 section to retrieve all the entity id
// 						// 	for(var i = 0; i < p279_section.length; i++) {
// 						// 		var obj = p279_section[i];
// 						// 		obj = obj.mainsnak.datavalue.value;
// 						// 		var entityID = JSON.stringify(obj['numeric-id']);
// 						// 		if (entityID.indexOf("Q") < 0){
// 						// 			entityID = "Q" + entityID;
// 						// 		}
// 						// 		fs.appendFile(filePathEntity+"_tmp", entityID + "\n", (err) => {
// 				  //					if (err) throw err;
// 						// 		});
// 						// 	}
// 		    // 		});
// 		    // 	}
// 			});
			
// 			// //remove the entity file to be replaced by the new one
// 			// fs.exists(filePathEntity, function(exists) {
// 			//   if(exists) {
// 			//     fs.unlink(filePathEntity);
// 			//   } 
// 			// });
			
// 			// //rename the filePathEntity+"_tmp" file to the filePathEntity filename
// 			// fs.rename(filePathEntity+"_tmp", filePathEntity, function (err) {
// 			//   if (err) throw err;
// 			//   console.log('renamed complete');
// 			// });
// 	    }
// };

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


// dispatcher.onGet("/test", function(req, res) {
// 	// var results = {
// 	//     ontologyResult: new Array(),
// 	//     // setUserName is a method on the clientData object​
// 	//     addOntology: function (ontology)  {
// 	//         // this refers to the fullName property in this object​
// 	//       this.ontologyResult.push(ontology);
// 	//     }
// 	// };
	
// 	getUserInput ("Barack", results.addOntology, results);
// 	getUserInput ("David", results.addOntology, results);
// 	getUserInput ("David", results.addOntology, results);
// 	var arrayres= results.ontologyResult;
// 	for (var x=0;x<arrayres.length;x++){
// 		console.log (arrayres[x]); // Barack Obama
// 	}
	
// });

// function getUserInput(ontology, callback, callbackObj)  {
//     // Do other stuff to validate name here​
    
//     // The use of the Apply function below will set the this object to be callbackObj​
//     callback.apply (callbackObj, [ontology]);
// }

// dispatcher.onGet("/test", function(req, res) {
// 	//test if there is no more entity scenario
// 	client.get("https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q35120&props=labels|descriptions|claims&languages=en&languagefallback=&sitefilter=azwiki&format=json", function (data, response) {
	
// 		var label = data.entities;
// 		var p279_section = label['Q35120'].claims;
// 		label = label['Q35120'].labels;
// 		label = label.en.value;
// 		console.log(label);
		
// 		//write the p279 section entity id to the entityID file
// 		p279_section = p279_section['P279'];
// 		//loop the p279 section to retrieve all the entity id
// 		for(var j = 0; j < p279_section.length; j++) {
// 			var obj = p279_section[j];
// 			try {
//   				obj = obj.mainsnak.datavalue.value;
//   				var entityID = JSON.stringify(obj['numeric-id']);
// 				if (entityID.indexOf("Q") < 0){
// 					entityID = "Q" + entityID;
// 				}
// 				console.log(entityID);
// 			}
// 			catch (e) {
// 			  console.log("no more numeric-id");
// 			}
// 		}	
// 	});
// });

// dispatcher.onGet("/test", function(req, res) {
// 	//test if there is no more entity scenario
// 	client.get("https://www.wikidata.org/w/api.php?action=wbgetentities&ids=Q35120&props=labels|descriptions|claims&languages=en&languagefallback=&sitefilter=azwiki&format=json", function (data, response) {
	
// 		var label = data.entities;
// 		var p279_section = label['Q35120'].claims;
// 		label = label['Q35120'].labels;
// 		label = label.en.value;
// 		console.log(label);
		
// 		//write the p279 section entity id to the entityID file
// 		p279_section = p279_section['P279'];
// 		//loop the p279 section to retrieve all the entity id
// 		for(var j = 0; j < p279_section.length; j++) {
// 			var obj = p279_section[j];
// 			try {
//   				obj = obj.mainsnak.datavalue.value;
//   				var entityID = JSON.stringify(obj['numeric-id']);
// 				if (entityID.indexOf("Q") < 0){
// 					entityID = "Q" + entityID;
// 				}
// 				console.log(entityID);
// 			}
// 			catch (e) {
// 			  console.log("no more numeric-id");
// 			}
// 		}	
// 	});
// });

// dispatcher.onGet("/test", function(req, res) {
// 	var arr = ['Qweqwe','Q4324','Q77767','Qhfghg','Q3232',''];
	
// 	findOntologyNew(true); //call to proceed to find label and subclass
// 	function findOntologyNew(boo){
// 		if (boo == true){
// 			console.log("it is activated");
// 			findOntologyNew(false);
// 		}
// 	}
	
// 	// fs.readFile(__dirname+'/entityID_d100c840-17f3-11e6-9bad-ab1363fc37cf.txt_tmp', 'utf8', function(err, contents) {
// 	// 	var content = contents.toString().split('\n');
// 	// 	content = cleanArray(content);
		
// 	// 	for (var i=0;i<content.length;i++){
// 	// 		console.log("reading in:" + content[i]);
// 	// 	}
// 	// });	
// });

function cleanArray(actual) {
  var newArray = new Array();
  for (var i = 0; i < actual.length; i++) {
    if (actual[i]) {
      newArray.push(actual[i]);
    }
  }
  return newArray;
}

//findontology?title=Samsung&ontology=organization
dispatcher.onGet("/findontology", function(req, res) {
	var uri = req.url;
	var queryList;
	var ontologyToMatched;
	var fileEntityID=__dirname+"/entityID_"+uuid.v1()+".txt";
 	// var fileOntologyResult=fileEntityID.replace("entityID_","ontologyResult_");
 	var fileToBeProcessedEntityID=fileEntityID.replace(fileEntityID+"_tobeprocessed");
	
	//Example: title=Samsung&ontology=organization
    uri = uri.split("?")[1];
	queryList = uri.split("&");

	title = queryList[0].split("=")[1];
	title = replaceAll(title,"%20", " ").replace("/","");

	ontologyToMatched = queryList[1].split("=")[1];
	if (ontologyToMatched != null){
		ontologyToMatched = replaceAll(ontologyToMatched,"%20", " ").toLowerCase();
		ontologyToMatched = ontologyToMatched.split(",");
	}
	
	//delete the file if it exists
	fs.exists(fileEntityID, function(exists) {
	  if(exists) {
	    fs.unlink(fileEntityID);
	  } 
	});
	
	client.get("https://www.wikidata.org/w/api.php?action=wbgetentities&sites=enwiki&titles=" + title + "&languages=cs|de|es|fr|it|pl|pt|ru&props=labels&format=json", function (data, response) {
		// extract the entity key from the data result from the API call 
		var entityKey;
		for(var key in data.entities)
		{
    		entityKey = key;
    		break;
		}
		
		//call to extract the "instance of :P31" section using the Wikidata entity key
		client.get("https://www.wikidata.org/w/api.php?action=wbgetentities&ids="+ entityKey +"&props=claims&languages=en&languagefallback=&sitefilter=azwiki&format=json", function (dataInner, response) {
			//call the searchOntology function
			
			
			//variables required by searchOntology
			var entityID_list = new Array();
			var hashtable = new HashTable();//declare a hashtable to store all those processed entityid
			var hashtableStoreEntityWithUncompletedOntology = new HashTable();//store the root entity with uncompleted ontology tree path
			var hashtableTreeNodes = new HashTable();//store the ontlogy relationship from the parent to kids entity
			var tree = new TreeModel();//create the tree model
			var node; //it is use to create a node in the tree
			var parentNode; //it is use to retrieve the parent node of a tree
			var P31_EntityID = new Array();//store the ontlogy relationship from the parent to kids entity
			var hashtableEndEntityNodes = new HashTable();//store all the ending entity nodes/nodes without anymore children
			var hashtableConsolidateUncompletedReferenceChildNode = new HashTable();//store all the entity id that is used by uncompleted nodes chains
			
			searchOntology(0);
			function searchOntology(a){
				//0 - read the P31:instance of section numeric-id keys
				if (a == 0)
				{
					// console.log("enter a==0");
					var p31_section = dataInner.entities;
					p31_section = p31_section[entityKey].claims;
					p31_section = p31_section['P31'];
					
					if (p31_section != null){
						for(var i = 0; i < p31_section.length; i++) {
							var obj = p31_section[i];
							obj = obj.mainsnak.datavalue.value;
							var entityID = JSON.stringify(obj['numeric-id']);
							if (entityID.indexOf("Q") < 0){
								entityID = "Q" + entityID;
							}
							entityID_list.push(entityID+","+entityID);
							P31_EntityID.push(entityID);
							hashtable.put(entityID,entityID);//add to track processed numeric id
							//create a the P31 entity as root node
							node = tree.parse({id: entityID});
							hashtableTreeNodes.put(entityID,node);
							
						}
						searchOntology(2);//call the next section
					}else{
						//no ontology found for this title
						res.setHeader('Content-Type', 'application/json');
						res.write(JSON.stringify(false));  
						res.end();  
					}
					
				}//end if i == 0
				//read in the processed entity id file and add to the hashtable
				else if (a == 1)
				{
					// console.log("enter a==1");
					//check if file exists
					var newEntityIDList = new Array();
					fs.exists(fileToBeProcessedEntityID, function(exists) {
					  	if(exists) {
						    //rename the filePathEntity+"_tmp" file to the filePathEntity filename
						    readFile(0);
							function readFile(x){
			    				if (x == 0){
			    					fs.readFile(fileToBeProcessedEntityID, 'utf8', function(err, contentsEntity) {
					    				var contentProcessedEntity = contentsEntity.toString().split('\n');
					    				contentProcessedEntity = cleanArray(contentProcessedEntity);//remove empty string
					    				for (var i=0;i<contentProcessedEntity.length;i++){
					    					hashtable.put(contentProcessedEntity[i],contentProcessedEntity[i]);
					    					newEntityIDList.push(contentProcessedEntity[i]);
					    				}
					    				entityID_list = newEntityIDList;
					    				searchOntology(2);
									});
			    				}
			    			}
						}else{ //if the file does not exists proceed to nex section
							searchOntology(3);//call the next section
						}
					});	

				}//end if i == 1
				//call to update the hashtable to track the processed numeric id
				else if (a == 2)
				{
					// console.log("enter a==2");
					removeFile(0);
					//removed processed file if any
					function removeFile(x){
						if (x == 0){
							fs.exists(fileToBeProcessedEntityID, function(exists) {
							  	if(exists) {
								    fs.unlink(fileToBeProcessedEntityID);
								    removeFile(1); //exit this function
								}else{ //if the file does not exists proceed to nex section
									removeFile(1); //exit this function
								}
							});	
						}
						
					}
					
					processEntityId(0);
					function processEntityId(x){
						if (x < entityID_list.length){
							var entityIdKey = entityID_list[x].split(",")[0];
							var rootEntityId = entityID_list[x].split(",")[1];
			    			client.get("https://www.wikidata.org/w/api.php?action=wbgetentities&ids="+entityIdKey+"&props=labels|descriptions|claims&languages=en&languagefallback=&sitefilter=azwiki&format=json", function (data, response) {
		    			
			    				var label = data.entities;
								var p279_section = label[entityIdKey].claims;
								label = label[entityIdKey].labels;
								label = label.en.value;
								label = label.toLowerCase();
								//update the hashtable with the labels
								hashtable.put(entityIdKey,label);
								
								//writes this entity label to the ontology file
								// writeLabelToFile(0)
								// function writeLabelToFile(x){
								// 	if (x ==0){
								// 		fs.appendFile(fileOntologyResult, label + "\n", (err) => {
				  		// 					if (err){ throw err;}
				  		// 					else {writeLabelToFile(1);}
								// 		});
								// 	}
								// }
				    // 			;
								
								p279_section = p279_section['P279'];
								try{
									//loop the p279 section to retrieve all the entity id
									for(var j = 0; j < p279_section.length; j++) {
										var obj = p279_section[j];
										try {
							  				obj = obj.mainsnak.datavalue.value;
											var entityID = JSON.stringify(obj['numeric-id']);
										
											if (entityID.indexOf("Q") < 0){
												entityID = "Q" + entityID;
											}
											
											//check whether the entityID is already processed
											if (hashtable.get(entityID) == null){
												writeEntityIDToFile(0);
												function writeEntityIDToFile(x){
													if (x == 0){
														fs.appendFile(fileToBeProcessedEntityID , entityID+","+rootEntityId + "\n", (err) => {
								  							if (err){ throw err;}
								  							// else {
								  							// 	writeLabelToFile(1);
								  							// }
														});
													}
												}
											}else{
												hashtableConsolidateUncompletedReferenceChildNode.put(entityID,entityID);
												
												//add the last entity entry for entity
												var hashtableLastParentEntityID;
												var hashtableLastChildEntityID;
												if (hashtableStoreEntityWithUncompletedOntology.get(rootEntityId) == null){
													hashtableLastChildEntityID = new HashTable();
													hashtableLastChildEntityID.put(entityID,entityID);
													hashtableLastParentEntityID = new HashTable();
													hashtableLastParentEntityID.put(entityIdKey,hashtableLastChildEntityID);
													hashtableStoreEntityWithUncompletedOntology.put(rootEntityId,hashtableLastParentEntityID);
												}else{
													hashtableLastParentEntityID = hashtableStoreEntityWithUncompletedOntology.get(rootEntityId);
												
													if (hashtableLastParentEntityID.get(entityIdKey) == null){
														hashtableLastChildEntityID = new HashTable();
														hashtableLastChildEntityID.put(entityID,entityID);
														hashtableLastParentEntityID.put(entityIdKey,hashtableLastChildEntityID);
														hashtableStoreEntityWithUncompletedOntology.put(rootEntityId,hashtableLastParentEntityID);
													}else{
														//if parent is avaliable
														hashtableLastChildEntityID = hashtableLastParentEntityID.get(entityIdKey);
														hashtableLastChildEntityID.put(entityID,entityID);
														hashtableLastParentEntityID.put(entityIdKey,hashtableLastChildEntityID);
														hashtableStoreEntityWithUncompletedOntology.put(rootEntityId,hashtableLastParentEntityID);
													}
												}
												// console.log("root entity: "+rootEntityId+", parent entity: "+entityIdKey+", entityID: "+entityID + " is already processed.");	
											}
									
											node = tree.parse({id: entityID});//create the child node
											parent = hashtableTreeNodes.get(rootEntityId).first(function (node) {
										    	return node.model.id === entityIdKey;
											});
											parent.addChild(node);//add child to parent
									
										}
										catch (e) {
											console.log(e);
											console.log("1. error recorded for: "+entityIdKey+":"+label);
											hashtableEndEntityNodes.put(entityIdKey,entityIdKey);
											//no more entity id can be found
											//do nothing
										}
									}	
								}//end try
								catch (e)
								{
									console.log("2. error recorded for: "+entityIdKey+":"+label);
									hashtableEndEntityNodes.put(entityIdKey,entityIdKey);
									//do nothing as this entity id do not have any subclass of P279 section to be extracted
								}//end catch
								processEntityId(x+1);
			    			});	
						}else{
							searchOntology(1);//call the next section	
						}
					}
				}//end if i == 2
				
				else if (a == 3)
				{
					//store the result in an array
			  		var result_return = new Array();
		
			  		readTree(0);
		  			function readTree(x){
	    				if (x < P31_EntityID.length){
	    					// console.log("Reading in " + P31_EntityID[x]);
	    					var nodewalk = hashtableTreeNodes.get(P31_EntityID[x]);  
	    					
							// Using our async walk function...
							asyncWalk(nodewalk).then(function (leafPromisesResult) {
							  leafPromisesResult.forEach(function (leafPromiseResult) {
							  	var string_result = "" + leafPromiseResult;
							  	//console.log(string_result);
							  	//string_result = string_result.split(",");
							  	result_return.push(string_result);
							  	
							    // console.log("ordered results: " + leafPromiseResult);
							  });
							  readTree(x+1); //exit this function
							  
							});
							
							function longTask(node) {
							  // Some long running task
							  //console.log("Running long task on node " + node.model.id);
							
							  // Fake result
							  return node.model.id+":"+hashtable.get(node.model.id);
							}
							
							function asyncWalk(node) {
							  var leafPromises = [];
							  var promisesTemp = {};
							
							  node.walk(function (node) {
							    var nodePromise;
							    if (node.isRoot()) {
							      nodePromise = Q.fcall(function () {
							        return [longTask(node)];
							      });
							    } else {
							      nodePromise = promisesTemp[node.parent.model.id].then(function (prevResult) {
							        return prevResult.concat(longTask(node));
							      });
							    }
							
							    if (!node.hasChildren()) {
							      leafPromises.push(nodePromise);
							    } else {
							      promisesTemp[node.model.id] = nodePromise;
							    }
							  });
							
							  return Q.all(leafPromises);
							}
	    				}else{
	    					var newResult = new Array();
	    					//loop thru all the string result and see if there is incompleted string
	    					var resultChain;
	    					var splited;
	    					var last_entity_string;
	    					var last_entity;
	    					var ontologyRequestedFound = false;		
	    							
	    					checkForUnCompletedOntologyChain(0);
	    					function checkForUnCompletedOntologyChain(x){
	    						if (x < result_return.length){	
	    							resultChain = result_return[x];
	    							splited = resultChain.split(",");
	    							last_entity_string = splited[splited.length-1];
	    							last_entity = last_entity_string.split(":");
	    							last_entity = last_entity[0];
	    							if (hashtableEndEntityNodes.get(last_entity) == null){
	    								scanForSubstring(0,last_entity_string, resultChain);
	    								function scanForSubstring(d,last_entity_string, resultChain){
	    									if (d<result_return.length){
	    										if (x!=d){
	    											//check if last_entity exists in any of the other string
	    											//console.log("looking for "+last_entity_string +" in " + result_return[d] );
		    										if(result_return[d].indexOf(last_entity_string) > -1){
		    											var indexString = result_return[d].substring(result_return[d].indexOf(last_entity_string));
		    											//if the extracted string is the same then we move to the next index
		    											if (indexString== last_entity_string){
		    												scanForSubstring(d+1, last_entity_string,resultChain);
		    											}
		    											//append to the resultChain
		    											resultChain = resultChain.replace(last_entity_string,indexString);
		    											
		    											splited = resultChain.split(",");
						    							var last_entity_string = splited[splited.length-1];
						    							var last_entity = last_entity_string.split(":");
						    							last_entity = last_entity[0];
						    							if (hashtableEndEntityNodes.get(last_entity) == null){
						    								scanForSubstring(0, last_entity_string,resultChain);
						    							}else{
						    								scanForSubstring(result_return.length, "", resultChain);	//exit the function
						    							}
		    										}
	    										}
	    										scanForSubstring(d+1, last_entity_string, resultChain);
	    									}else{
	    										//console.log(resultChain);
	    										//check whether there is an ontology to match the result chain
	    										if (ontologyToMatched != null){
	    											ontologyRequestedFound = ontologyToFind(0,ontologyToMatched,resultChain);
	    											 //if (resultChain.indexOf(ontologyToMatched) > -1){
	    											 //	ontologyRequestedFound = true;
	    											 //	checkForUnCompletedOntologyChain(99999);//exit the search as an ontology to match has been found
	    											 //}
	    										}
	    										newResult.push(resultChain);
	    										checkForUnCompletedOntologyChain(x+1);
	    									}
	    								}
	    									
    								}else{
    									//console.log(resultChain);
    									//check whether there is an ontology to match the result chain
										if (ontologyToMatched != null){
											ontologyRequestedFound = ontologyToFind(0,ontologyToMatched,resultChain);
											 //if (resultChain.indexOf(ontologyToMatched) > -1){
											 //	ontologyRequestedFound = true;
											 //	checkForUnCompletedOntologyChain(99999);//exit the search as an ontology to match has been found
											 //}
										}
    									//add the chain to the newResult array
    									newResult.push(resultChain);
    									checkForUnCompletedOntologyChain(x+1);
    								}	
    								
	    							
	    						}else{
	    							console.log("Returned result in response.");
	    							if (ontologyRequestedFound == true){
	    								res.setHeader('Content-Type', 'application/json');
    									res.write(JSON.stringify(true));  
										res.end();  
	    							}else{
	    								res.setHeader('Content-Type', 'application/json');
	    								if (ontologyToMatched != null){
	    									res.write(JSON.stringify(false));  
	    								}else{
	    									res.write(JSON.stringify(newResult)); 
	    								}
										res.end();  
	    							}
			    					return;
	    						}
	    					}
	    				}
		  			}

	    // 			removeFile(0);
					// //removed processed file if any
					// function removeFile(x){
					// 	if (x == 0){
					// 		fs.exists(fileOntologyResult, function(exists) {
					// 		  	if(exists) {
					// 			    fs.unlink(fileOntologyResult);
					// 			    removeFile(1); //exit this function
					// 			}else{ //if the file does not exists proceed to next section
					// 				removeFile(1); //exit this function
					// 			}
					// 		});	
					// 	}
					// }
	    			searchOntology(4);//exit the whole searchOntology function 
					
					
					// //read in the ontology results and formulate a response 
					// fs.exists(fileOntologyResult, function(exists) {
					//   	if(exists) {
					  		
					// 	}else{ //if the file does not exists proceed to nex section
					// 		searchOntology(4);//exit the whole searchOntology function 
					// 	}
					// });
				}//end if i == 3
			}
	
			return;

		});
		
		
	});
	
});	

// function findOntologyNew(fileEntityID,fileOntology, callback, callbackObj)  {
//     // Do other stuff to validate name here​
    
//     // The use of the Apply function below will set the this object to be callbackObj​
//     callback.apply (callbackObj, [fileEntityID,fileOntology]);
// }

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

//GET request for /findontology
//findontology?title=Samsung&ontology=organization
// dispatcher.onGet("/findontology", function(req, res) {
// 	var uri = req.url;
// 	var queryList;
//   	var title;
// 	var ontologyToMatched;
// 	var stillGotMoreEntities = true;
// 	var entityKey;
	
// 	var fileEntityID=__dirname+"/entityID_"+uuid.v1()+".txt";
// 	var fileOntologyResult=fileEntityID.replace("entityID_","ontologyResult_");
// 	//delete the file if it exists
// 	fs.exists(fileEntityID, function(exists) {
// 	  if(exists) {
// 	    fs.unlink(fileEntityID);
// 	  } 
// 	});
	
	
// 	//Example: title=Samsung&ontology=organization
//     uri = uri.split("?")[1];
// 	queryList = uri.split("&");

// 	title = queryList[0].split("=")[1];
// 	title = replaceAll(title,"%20", " ").replace("/","");

// 	ontologyToMatched = queryList[1].split("=")[1];

// 	// direct way 
// 	client.get("https://www.wikidata.org/w/api.php?action=wbgetentities&sites=enwiki&titles=" + title + "&languages=cs|de|es|fr|it|pl|pt|ru&props=labels&format=json", function (data, response) {
// 		// extract the entity key from the data result from the API call 
// 		var entityKey;
// 		for(var key in data.entities)
// 		{
//     		entityKey = key;
//     		break;
// 		}

// 		//call to extract the "instance of :P31" section using the Wikidata entity key
// 		client.get("https://www.wikidata.org/w/api.php?action=wbgetentities&ids="+ entityKey +"&props=claims&languages=en&languagefallback=&sitefilter=azwiki&format=json", function (dataInner, response) {
// 			var p31_section = dataInner.entities;
// 			p31_section = p31_section[entityKey].claims;
// 			p31_section = p31_section['P31'];
			
// 			//loop the P31 section to retrieve all the entity id
// 			var entityID_P31 = new Array();
// 			for(var i = 0; i < p31_section.length; i++) {
// 				var obj = p31_section[i];
// 				obj = obj.mainsnak.datavalue.value;
// 				var entityID = JSON.stringify(obj['numeric-id']);
// 				if (entityID.indexOf("Q") < 0){
// 					entityID = "Q" + entityID;
// 				}
// 				fs.appendFile(fileEntityID, entityID + "\n", (err) => {
//   					if (err) throw err;
// 				});
// 				//entityID_P31.push(entityID);
// 			}
			
// 			//find label and subclass of
// 			var count = 0;
// 			while (isDirectoryExists(fileEntityID) == true){
// 				findOntologyNew(fileEntityID,fileEntityID);
// 				console.log("still processing..." + count);
// 				count++;
// 			} 
// 			console.log("File is deleted");
// 			return;

// 		});

// 		return;
// 	});
// 	//console.log(results);
	
// 	//console.log(title + ":" + ontologyToMatched)
// 	//return;
// });

// function isDirectoryExists(directory) { 
// 	try {
// 		fs.statSync(directory);
// 		return true;
// 	} catch(e) {
// 		return false;
// 	}
// }

// function findOntologyNew(filePath, callback) {
// 	fs.readFile(filePath, 'utf8', function(err, contents) {
//     	var content = contents.toString().split('\n');
    	
//     	for (var i=0;i<content.length;i++){
//     		console.log("Reading: " + content[i]);
//     	}
// 	});
	
// 	callback(filePath);
	
// // 	var entitiesIDList = new Array();
// // 	var contents = fs.readFileSync(filePath).toString();
// // console.log(contents);
// 	// fs.readFile(filePath, function(err, buf) {
//  // 		entitiesIDList.push(buf.toString());
// 	// });
	
// 	// var array = fs.readFileSync(filePath).toString().split('\n');

// 	// // var lines = fs.readFileSync(filePath, 'utf8').split('\n');
// 	// var entitiesIDList = new Array();
// 	// for (var i=0;i<array.length;i++){
//  //   	var line = array[i];
//  //   	console.log(line);
//  //   	//entitiesIDList.push(line);
// 	// }
// 	// for (var i=0;i<entitiesIDList.length;i++){
//  //   	console.log(entitiesIDList[i]);
// 	// }
// 	// console.log("Read completed");
// }

// function findOntology(entityIDList) {
// 	var results = new Array();
	
// 	function tranverseOntology(x){
// 	   if( x < entityIDList.length ) {
// 	       client.get("https://www.wikidata.org/w/api.php?action=wbgetentities&ids="+entityIDList[x]+"&props=labels|descriptions|claims&languages=en&languagefallback=&sitefilter=azwiki&format=json", function (data, response) {
// 				var label = data.entities;
// 				var p279_section = label[entityIDList[x]].claims;
// 				label = label[entityIDList[x]].labels;
// 				label = label.en.value;
// 				results.push(label);
// 				console.log("pushing result: " + label);
				
// 				var entityID_p279 = new Array();
// 				var elementsFound = true;
// 				var newEntityID_p279 = new Array();
// 				var stillBlock = false;
				
// 				while (elementsFound == true){
					
// 					//for the first time looping of p279
// 					if (stillBlock==false){
// 						console.log("stillBlock " + stillBlock);
// 						if (newEntityID_p279.length <= 0){
// 							//check if this current entity contains "subclass of:P279"
// 							p279_section = p279_section['P279'];
						
// 							//loop the p279 section to retrieve all the entity id
// 							for(var i = 0; i < p279_section.length; i++) {
// 								var obj = p279_section[i];
// 								obj = obj.mainsnak.datavalue.value;
// 								var entityID = JSON.stringify(obj['numeric-id']);
// 								if (entityID.indexOf("Q") < 0){
// 									entityID = "Q" + entityID;
// 								}
// 								entityID_p279.push(entityID);
// 							}
// 						}else{
// 							entityID_p279 = newEntityID_p279;
// 						}
// 					}
					
					
// 					//loop through each p279 elements to extract the label
// 					if (entityID_p279.length > 0){
// 						stillBlock = true;
// 						console.log("stillBlock " + stillBlock);
// 						newEntityID_p279 = new Array();
// 						function tranverseOntologySubclass(y){
// 	   						if( y < entityID_p279.length ) {
// 	   							console.log("enter here: "+entityID_p279[y]);
// 	   							rp('https://www.wikidata.org/w/api.php?action=wbgetentities&ids='+entityID_p279[y]+'&props=labels|descriptions|claims&languages=en&languagefallback=&sitefilter=azwiki&format=json').then(function (htmlString) {
//         								console.log(htmlString);
// 	        							var labelInner = htmlString.entities;
// 										console.log("enter here: "+labelInner);
// 										var p279_section_inner = labelInner[entityID_p279[y]].claims;
// 										labelInner = labelInner[entityID_p279[y]].labels;
// 										labelInner = labelInner.en.value;
// 										results.push(labelInner);
// 										console.log("pushing result: " + labelInner);
										
// 										//check if this current entity contains "subclass of:P279"
// 										p279_section_inner = p279_section_inner['P279'];
									
// 										//loop the p279 section to retrieve all the entity id
// 										for(var i = 0; i < p279_section_inner.length; i++) {
// 											var obj = p279_section_inner[i];
// 											obj = obj.mainsnak.datavalue.value;
// 											var entityID = JSON.stringify(obj['numeric-id']);
// 											if (entityID.indexOf("Q") < 0){
// 												entityID = "Q" + entityID;
// 											}
// 											newEntityID_p279.push(entityID);
// 										}
//     								})
//     								.catch(function (err) {
//         								return null;
//     								}
//     							);
	   							
	   							
// 	   					// 		clientInner.get("https://www.wikidata.org/w/api.php?action=wbgetentities&ids="+entityID_p279[y]+"&props=labels|descriptions|claims&languages=en&languagefallback=&sitefilter=azwiki&format=json", function (dataInner, responseInner) {
// 									// var labelInner = dataInner.entities;
// 									// console.log("enter here: "+labelInner);
// 									// var p279_section_inner = labelInner[entityID_p279[y]].claims;
// 									// labelInner = labelInner[entityID_p279[y]].labels;
// 									// labelInner = labelInner.en.value;
// 									// results.push(labelInner);
// 									// console.log("pushing result: " + labelInner);
									
// 									// //check if this current entity contains "subclass of:P279"
// 									// p279_section_inner = p279_section_inner['P279'];
								
// 									// //loop the p279 section to retrieve all the entity id
// 									// for(var i = 0; i < p279_section_inner.length; i++) {
// 									// 	var obj = p279_section_inner[i];
// 									// 	obj = obj.mainsnak.datavalue.value;
// 									// 	var entityID = JSON.stringify(obj['numeric-id']);
// 									// 	if (entityID.indexOf("Q") < 0){
// 									// 		entityID = "Q" + entityID;
// 									// 	}
// 									// 	newEntityID_p279.push(entityID);
// 									// }
// 	   					// 		});
// 	   						}else{
// 	   							stillBlock = false;
// 	   							console.log("stillBlock " + stillBlock);
// 	   							return newEntityID_p279;
// 	   						}
// 	   						//increment the recursive count
// 							tranverseOntologySubclass(y+1);
// 						};
// 						tranverseOntologySubclass(0);
// 					}else{
// 						elementsFound = false;
// 					}
					
// 					for (var r=0;newEntityID_p279.length;r++){
// 						console.log("new entity: "+newEntityID_p279[r]);
// 					}
// 				}
				
				
// 				//increment the recursive count
// 				tranverseOntology(x+1);
// 			});
// 	   	}else{
// 	   		for (var i=0;i<results.length;i++){
// 				console.log(results[i]);
// 			}
// 	  // 		for (var i=0;i<results.length;i++){
// 			// 	console.log(results[i]);
// 			// }
// 	   	}
// 	};
	
// 	tranverseOntology(0);
// }



/**
 * Process an array of data synchronously.
 *
 * @param data An array of data.
 * @param processData A function that processes an item of data.
 *                    Signature: function(item, i, callback), where {@code item} is the i'th item,
 *                               {@code i} is the loop index value and {@code calback} is the
 *                               parameterless function to call on completion of processing an item.
 */
// function doSynchronousLoop(data, processData, done) {
//     if (data.length > 0) {
//         var loop = function(data, i, processData, done) {
//             processData(data[i], i, function() {
//                 if (++i < data.length) {
//                     setTimeout(function(){
//                                             loop(data, i, processData, done);
//                                         }, 0);
//                 } else {
//                     done();
//                 }
//             });
//         };
//         loop(data, 0, processData, done);
//     } else {
//         done();
//     }
// }

// function recursiveLookupForOntologyMatch(entityID, ontologyToMatched) {
// 	//append a Q in front it does not exists
// 	if (entityID.indexOf("Q") < 0){
// 		entityID = "Q" + entityID;
// 	}
	
//   	client.get("https://www.wikidata.org/w/api.php?action=wbgetentities&ids="+entityID+"&props=labels|claims&languages=en&languagefallback=&sitefilter=azwiki&format=json", function (data, response) {
// 		var obj = data.entities;
// 		obj = obj[entityID].labels.en.value;
		
// 		if (obj.toLowerCase() == ontologyToMatched.toLowerCase()){
			
// 		}
// 		p31_section = p31_section[entityKey].claims;
// 		p31_section = p31_section['P31'];
		
// 		var keys = array(); //store all the "instance of" keys
// 		//loop the P31 section to retrieve all the entity id
// 		for(var i = 0; i < p31_section.length; i++) {
// 			var obj = p31_section[i];
// 			obj = obj.mainsnak.datavalue.value;
// 			keys.push(obj['numeric-id']);
// 		}
			
// 	});
// }


function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//find the ontology to match on the result
function ontologyToFind(x,ontologyToMatched,stringToFind){
	// console.log("x is "+ x+"-"+stringToFind);
	if (x < ontologyToMatched.length){
		if (stringToFind.indexOf(ontologyToMatched[x]) > -1){
			return true;
		 	//ontologyToFind(99999,"","");//exit the search as an ontology to match has been found
		}else{
			ontologyToFind(x+1,ontologyToMatched,stringToFind);
		}
	}else{
		return false;
	}
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
