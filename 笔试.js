function group(n){

  return Math.floor(n/4);

}

function lucky(a,b){

	var a;
	var count=0;

	for(var i=a;a<=b;i++){
        var c=i;
		var e=c.toString().split("");
		var d=Array.from(new Set(e));
        for(let j=0;j<e.length;j++){
            if(e[j]==d[j]){count++;}
        }

	}
 return count; 
}