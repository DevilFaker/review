"use strict"

define(function(){

	var add=function(x,y){
		return x+y;
	}

	return { add:add; }
});

require.config({

	shim:{

		'underscore':{
			exports:'_'
		},

		'backbone':{
			deps:["underscore","jquery"],
			exports:"Backbone"
		},

		'jquery.scroll':{
			deps:'jquery',
			exports:"jQuery.fn.scroll"
		}
	}


});

define(['text','image'],function(text,image){

	console.log(text);

	document.body.appendChild(image);	
})
