function f(x){ //尾调用优化
	return g(x);
}

function f(){
	let m=1;
	let n=2;
	return g(m+n);
} f();

==>

function f(){
	return g(3);
} f();

==>
g(3);

funciton factoria(n){
	if(n===1)return 1;
	return n*factoria(n-1);
}

==>
funciton factoria(n,total){
	if(n===1)return total;
	return factoria(n-1,n*total);
}

or

funciton factoria(n,total=1){//ES6
		if(n===1)return total;
	return factoria(n-1,n*total);
}