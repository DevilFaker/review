
/*
	主域相同，子域不同
*/
document.domain="a.com";//a.html
var ifr=document.createElement("iframe");
ifr.src='http://script.a.com/b.html';
document.body.appendChild(ifr);
ifr.onload=funtion(){
	var doc=ifr.contentDocument||ifr.contentWindow.document;
	//控制代码
}

document.domain='a.com';//http://script.a.com/b.html
//缺点：1.当一个被攻击时，另一个也会引起安全漏洞
//		2.引入多个iframe时，document.domain必须相同
/////////////////////////////////////////////////////////////
/*
 动态创建script
*/
function addScriptTag(url){
	var script=document.createElement('script');
	script.url='url';
	script.setAttribute("type","text/script");
	document.body.appendChild(script);
}

window.onload=function(){
	addScriptTag(url?callback=foo);
}

function foo(data){
	return data.id;
}

js.onload=js.onreadystatechange=function(){
	if(!this.readystate||this.readyState=="compelte"||this.readystate=="loaded"){
		js.onload=js.onreadystatechange=null;
	}
}

/////////////////////////////////////////////
/*
	jQuery Ajax
*/
function a(text,data){
	var url="example.html";
	var data={"text":text,"data":data};
	var success=function(response){

	}
	$.post(url,data,success,'json');
}


//////////////////////////////////////////
/*
	PostMessage
*/

window.onload=function(){
	otherWindow.postMessage(data,target);
}

window.addEventListener('message',function(event){
	if(event.origin=="example.html"){
		alert(event.data);
		alert(event,source);
	}
});

/////////////////////////////////////////
/*
	CORS
*/
Access-Control-Allow-Origin:*;
XHR.withCredentials=true;
