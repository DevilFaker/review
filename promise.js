var promise=new Promise(function(resolve,reject){

	//some codes here

	if(/*异步操作成功*/){
		resolve(vavlue);
	}
	else{
		reject(error);
	}
})


/////////////////////////////////////////////////用then指定回调函数

promise.then(function(value){},function(err){});

/////////////////////////////////////////////////简单例子
function timeout(ms){
	return new Promise((resolve,reject)=>{setTimeout(resolve,ms,"done");});
}

timeout(500).then(value=>{console.log(value);});

or
let promise=new Promise((resolve,reject)=>{console.log('Promise');resolve();});

promise.then(()=>console.log("Resolved."));

console.log("Hi");

///////////////////////////////////////////////////加载图片
function loadImageAsync(url){
	return new Promise((resolve,reject)=>{
		var image=new Image();
		image.onload(()=>resolve(image));
		image.onerror(()=>reject(new Error('Error has showed~~')+url));
		image.src=url;
	});
}

/////////////////////////////////////////////////////封装Ajax

var ajax=function(url){


return new Promise((resolve,reject)=>{	
	var request=new XMLHttpRequest();
	request.open("post",url);
	request.responseType="arraybuffer";
	request.onreadystatechange=function(){
		if(request.readystate===4){
			if(request.status===200){
				resolve(request.responseText);
			}
			else{
				reject(new Error("Error has showed~")+error);
			}
		}
	};

}
	
	request.send();

}

ajax(url).then(responseText=>{console.log(responseText)},error=>{console.log("出错了",error)});

///////////////////////////////////////////////////////////////////then 方法
ajax(url).then(function(post){
	return ajax(post.commentURL);
}).then(function funcA(comments){
	console.log("Resolved",comments)
},function funB(err){
	console.log("Rejected",err);
});

ajax(url).then(post=>ajax(post.commentURL)).then(
	comments=>console.log("Resolved",comments),
	err=>console.log("Rejected",err);
	);

////////////////////////////////////////////////////////////////////catch 方法
p.then(val=>console.log(val))
 .catch(err=>console.log(err));

 ==

p.then(val=>console.log(val))
 .then((null,err)=>console.log(err)); 

///////////////////////////////////////////////////
var promise=new Promise((resolve,reject)=>{
	throw new Error("test");
});

promise.catch((null,error)=>console.log(error));

==
var promise=new Promise((resolve,reject)=>{
	try {
		throw new Error("test")
	}catch(e){
		reject(e);
	}
});

promise.catch((null,error)=>console.log(error));

==
var promise=new Promise((resolve,reject)=>reject(new Error("test")));
promise.catch((null,error)=>console.log(error));

///////////////////////////////////////////////////
promise.then(value=>console.log(value))
	   .catch(error=>console.log(error))

var promise=[2,3,4,5,6].map(id=>ajax("/"+id+));

Promise.all(promise).then(post=>).catch(error=>);

Promise.race(promise);

///////////////////////////////////////////////////resolve, done , finally
Promise.resolve("foo")=new Promise("foo"=>resolve("foo"));

Promise.prototype.done=function(onFufiled,onRejected){
	this.then(onFufiled,onRejected)
		.catch(function(reason){
			setTimeout(()=>throw reason,0);
		});
}

server.listen(0)
	  .then(()=>)
	  .finally(server.stop);

Promise.prototype.finally=function(callback){
	let p=this.constructor;
	return p.then(
		value=>p.resolve(callback()).then(value=>console.log(value));
		reason=>p.resolve(callback()).then(value=>throw reason);
		);
}

//////////////////////////////////////////////////////////////////////加载图片

const preloadImage=function(path){
	return new Promise(function(resolve,reject){
		var image=new image();
		image.onload=resolve;
		image.onerror=reject;
		image.src=path;
	});
}


///////////////////////////异步

function* gen(number){
	var y=yield x+2;
	return y;
}

var g=gen(2);
g.next();
g.next();

=========>

function* gen(number){//错误处理代码
	try{
		var y=yield x+2;
	}catch(e){
		console.log(e);
	}
	return y;
}

var g=gen(2);
g.next();   //输出
g.next(2); //两个特性：输入

//实例

var fetch=require("node-fetch");
function* gen(){
	var url='https://api.github.com/users/github';
	var result=yield fetch(url);
	console.log(result.bio);
}

var g=gen();
var reusult=g.next();

result.value.then(data=>return data.json();).then(data=>g.next(data));

/////////////////////////////////////////////////////////////////////////Thunk
fs.readFile(filename,callback);
var readFileThunk=Thunk(fileName);
readFileThunk(callback);

var Thunk=function(fileName){

	return funciton(callback){
		return fs.readFile(filename,callback);
	}
}

//Thunk转换函数
var Thunk=function(fn){//ES5
	return function(){
		var args=[].slice.call(arguments)//Array.prototype.slice.apply(arguments)
		return function(callback){
			args.push(callback);
			return fn.apply(this,args);
		}
	}
}

var Thunk=fn=>{()=>{var args=[].slice.apply(arguments);(callback)=>{args.push(callback);return fn.apply(this.args);}}}

var Thunk=function(fn){//ES6
	return funciton(...args){
		return function(callback){
			return fn.call(this,...args,callback);
		}
	}
}

var readFileThunk=Thunk(fs.readFile)//实例1
readFileThunk(fileA)(callback);

function f(a,cb){
	cb(a);
}

let fThunk=Thunk(f);
let log=console.log.bind(console);
fThunk(1)(log);

var thunkify=require("thunkify");//使用方式
var fs=require("fs");
var read=thunkify(fs.readFile);
read('package.json')(fn);

function thunkify(fn){//thunkify 多了个检查机制
	return function(...args){
		return function(callback){
			return fn.call(this,...args,callback);
			try{ 
				fn.apply(this,...args)
			}	catch(err){
				throw err;
			}

		}
	}
}

//////////////////////////////////////////////////////Generator 应用实例
function* gen(){//Generator 自动执行
	//code
}

var g=gen();
var result=g.next();
while(!result.done){
	console.log(result.value);
	result=g.next();
}


var fs=require('js');//Thunk 封装异步操作
var thunkify=require('thunkify');
var read=thunkify(fs.readFile);

var gen=function*(){
	var r1=yield readFile(url);
	console.log(r1.toString());
	var r2=yield readFile(url);
	console.log(r2.toString());
}

var g=gen();//手动执行
var r1=g.next();
r1.value(function(err,data){
	if(err){
		throw err;
	}
	var r2=g.next(data);
	r2.value(function(err,data){
		if(err){throw err;}
		g.next(data);
	});
});


function run(fn){//自动执行Generator
	var  g=fn();

	function next(arr,data){
		result=g.next(data);
		if(result.done)return;
		result.value(next);
	}

	next();
}

function* g(){
	var f1=yield readFile("fileA");
	var f2=yield readFile("fileB");
	var f3=yield readFile("fileC");
}

run(g);


////////////////////////////////////////////co模块
var co=require('co');//co应用
co(g).then(funciton(){
	console.log("Generator 函数执行成功")；
})；

var fs=require('fs');

var readFile=function(fileName){//基于Promise对象的自动执行
	return new Promise(funciton(resolve,reject){
		fs.readFile(fileName,function(error,data){
				if(error){ reject(error)}
				resolve(data);	
		});	
	});
};

var gen=funciton* (){
	var f1 = yield readFile(url);
	var f2 = yield readFile(url);
	console.log(f1.toString());
	console.log(f2.toString());
}

var g=gen();
g.next().value.then(function(data){
	g.next(data).value.then(function(data){
		g.next(data);
	});
});

function run(gen){//自动执行Promise
	var g=gen();

	function next(data){
	var result=g.next(data);
	if(result.done)return result.value;
	result.value.then(function(data){
		next(data);
	});
}
	
	next();
}

function co(gen){
	var ctx=this;

	return new Promise(function(resolve,reject){
		if(typeof gen ==='funciton'){gen=gen.call(ctx);}
		if(typeof gen.next!=='funciton'||!gen){resolve(gen);}

		onFufiled();
		function onFufiled(res){
			var ret=gen.next(res);
		}	catch(e){
			return reject(e);
		}

		next(ret);
	 }

	 	funciton next(ret){
	 		if(ret.done)return resolve(ret.value);
	 		var value=toPromise.call(ctx,ret.value);
	 		if(value&&isPromise(value)) 
	 	}////////////////打扰了 写不下去了

	});
}


co(function*(){ //co处理并发的异步操作 数组
	var res=yield[Promise.resolve(1),Promise.resolve(2)];
	console.log(res);
}).catch(onerror);

co(function*(){ //对象
	var res=yield{1:Promise.resolve(1),2:Promise.resolve(2)};
	console.log(res);
}).catch(onerror);

///////////////////////////////////////////////////////////////async函数
var gen=function*(){
	var f1=yield readFile(url);
	var f2=yield readFile(url);
}

===>

var gen=async funciton(){
	var f1=await readFile(url);
	var f2=await readFile(url);
}

var result=asyncReadFile();

async function f(){//返回一个Promise对象
	return 'hello world';
}

f().then(v=>console.log(v));

async function f(){//错误会被catch接收
	throw 'hello world';
}

f().then(v=>console.log(v,1),e=>console.log(e,2))

async function f(){//awaut 会转化为resolve 的promise对象
	return await 123;
}

f().then(v=>console.log(v))

async function f(){
	return Promise.reject('warning');
}

f().then(v=>console.log(v))
   .catch(e=>console.log(e));

async function f(){ //前面的reject会中断整个函数
	await Promise.reject('warning');
	await Promise.resolve('hello world');
} 


async function f(){//用try-catch 处理
	try {
		await Promise.reject('warning')
	}catch(e){

	}

	return await Promise.resolve('hello world');
}

f().then(v=>console.log(v));



async function f(){

	await Promise.reject('warning')
		 .catch(e=>console.log(e));
	await Promise.resolve("hello world");	 
}

f().then(v=>console.log(v));

async function f(){
	try{
		var val1=await firstStep();
		var val2=await secondStep(val1);
		var val3=await thirdStep(val2);
		console.log(val3)
	}catch(e){
		console.error(err);
	}
}

async function f(){
	try {
		return new Promise(function(resolve,reject){
			throw new Erro("出错了");
		});
	}catch(e){

	}

	return await("hello world");
}

//async 注意事项
async function dbFun(db){//错误 不想并发执行
	let docs=[{},{},{}];

	docs.forEach(async function(doc){
		await db.post(doc);
	});
}

async function dbFun(db){
	let docs=[{},{},{}];

    for(let doc in docs){
    	await db.post(doc);
    }
}

async function dbFun(db){//想并发执行
	let docs=[{},{},{}];

	let promise=docs.map((v)=>{
		db.post(v);
	})

	let result=await Promise.all(promise);
	console.log(result);
}

function chainAnimationsPromise(elem,animations){//Async,Promise,Generator的比较
	var ret=null;
	var p=Promise.resolve();

	for(var anim in animations){
		p=p.then(function(val){
			ret=val;
			return anim(elem);
		});
	}

	return p.catch(function(e){

	}).then(functon(){
		return ret;
	});
}

function chainAnimationsPromise(elem,animations){
	return spawn(function*(){
		var ret=null;
		try{
			for(var anim in animations){
				ret=yield anim(elem);
			}
		} catch(e){

		}
		return ret;
	})
}

async function chainAnimationsPromise(elem,animation){
	var ret=null;
	try{
		for(var anim of animations){
			ret=await anim(elem);
		}
		catch(e){

		}
	}
	return ret;
}