function ajax(method,url,data){

var request=new XMLHttpRequest();
var request.onreadystatechange=function(){

	return new Promise(function(resolve,reject){

		if(request.readystate===4){
			if(request.status===200){
				resolve(request.responseText);
			}
			else{
				reject(request.status);
			}
		}
	});

	request.open(method,url);

	request.send(data);
}

}

var p=ajax("post","./xxx.html",{"id":1,"type":ArrayBuffer});
p.then(funciton(responseText){ xxx.innerHTML=responseText;}).catch(function(status){ xxx.innerHTML="ERROR:"+status });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////promise

var p1=new Promise(funciton(resolve,reject){

	setTimeout(resole,500,'p1');
});

var p2=new Promise(funciton(resolve,reject){

	setTimeout(resole,600,'p2');
});

Promise.all([p1,p2]).then(function(result){
	console.log(result);
});

Promise.race([p1,p2]).then(function(result){
	console.log(result);
});

///////////////////////////////////////////////XMLHttpRequest timeout

request.timeout=1000;
request.ontimeout=function(event){
	alert("has over-time")
}
////////////////////////////////// FormDate 对象

var fromDate=new FromData();
fromDate.append("username","lee");
fromDate.append("id",1234);
request.open("post",url);
request.send(fromDate);

or

var form=document.getElementById("form");
var fromData=new FromData(form);
fromData.append("secret","12312313");
request.open("post",url);
request.send(fromData);

////////////////////////////////// 接受文件

var file=document.getElementById("file");
var formData=new FormData()
for(var i=0;i<file.length;i++){
	formData.append("file[]",file[i]);
}

///////////////////////////////// 接受二进制数据

xhr.open(method,url);
xhr.responseType="blob"; //只接受二进制
or 
xhr.responseType="arraybuffer";


var blob =new Blob([xhr.response],{type:"image/png"});

or

var arraybuffer=xhr.response;
if(arraybuffer){
	var bytebuffer=new Uint8Array(arraybuffer);
	for(var i=0;i<arraybuffer.length;i++){
		//do something
	}
}

////////////////////////////////////////////////


