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


