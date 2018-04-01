//let 只在所在的代码块有效
{
	let a=10;
	var b=10;

}

var a=[];

for (let i=0;i<10;i++){
	a[i]=function(){
		console.log(i);
	};
}

a[6]();//6

var o=(obj)=>{

	Object.freeze(obj);
	Object.keys(obj).forEach((key,value)=>{
		if(typeof obj[key]==="object"){
			Object.o(obj[key]);
		}
	});

};

///////////////////////////////////////////////
var a= v => v;
var a=(x,y)=> x+y;
var a=()=>arguments;
[1,2,3].map(x=>x*x);
var result=values.sort((a,b)=>a-b);
const numbers=(...nums)=>nums;
const headAndTail=(head,...tail)=>[head,tail];
let insert= (value) => ({into:(array)=>({after:(afterValue)=>{array.splice(array.indexOf(afterValue)+1,0,value);return array;}})})

