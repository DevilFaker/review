console.log('module.id: ', module.id);
console.log('module.exports: ', module.exports);
console.log('module.parent: ', module.parent);
console.log('module.filename: ', module.filename);
console.log('module.loaded: ', module.loaded);
console.log('module.children: ', module.children);
console.log('module.paths: ', module.paths);

//////////////////////////////////////////////
Module.prototype.require=function(path){
	return Module._load(path,this);
}

var Module._load=function(request,parent,isMain){
	var filename=Module._resolveFilename(request,parent);
	var cacheModule=Module._cache[filename];
	if(cacaheMoule){
		return cacaheMoule.exports;
	}

	if(NativeModule.exists(filename)){
		return NativeModule.require(filename);
	} 

	var module=new Module(filename,parent);
	Module._cache[filename]=module;

	try{
		module.load(filename);
		hadException=false;
	} finally{
		if(hadException){
			delete Module._cache[filename];
		}
	}

	return module.exports;
}

////////////////////////////////////////////////////
Module._resolveFilename=function(request,parent){
	if(NativeModule.exists(request)){
		return request;
	}

	var filename=Module._resolveLookupPaths(request,parent);
	var id=filename[0];
	var path=filename[1];

	var realPath=Module._findPath(request,path)
	if(!realPath){
		var err=new Error("Cannot find module'"+request+"'");
		err.code="MODULE_NOT_FOUND";
		throw err;
	}
	return filename;
}

Module._findPath=function(request,path){
	var exts=Object.keys(Module._extensions);
	if(request.charAt(0)==='/'){
		path=[''];
	}

	var trailingSlash=(request.slice(-1)==='/');
	var cacheKey=JSON.stringify({request:request,paths:paths});
	if(Module._pathCache[cacheKey]){
		return Module._pathCache[cacheKey];
	}

	//打扰了


}

//////////////////////////////////////////////////////////////////////////
require.resolve=function(request){
	return Module._resolveFilename(request,self)
};

require.resolve("a.js");

////////////////////////////////////////////////////
function list(){
	return [].slice.call(arguments);
	or 
	return Array.prototype.slice.call(arguments);
}

or


var slice=Function.prototype.call.bind(Array.prototype.slice);

function list(){

	return slice(arguments);
}
