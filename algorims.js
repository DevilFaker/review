function recurFib(n){//斐波那契数列
	if(n<2){return n;}
	return recurFib(n-2)+recurFib(n-1);
}

function dynFib(n){//动态规划解
	var arr=[];
	arr[0]=0;
	arr[1]=1;
	arr[2]=1;
	for(let i=3;i<=n;i++){
		arr[i]=arr[i-2]+arr[i-1];
	}
	return arr[n];
}

function iterFib(n){
	var first=0;
	var second=1;
	var result=1;
	for(let i=2;i<=n;i++){

		result=first+second;
		first=second;
		second=result;

	}
	return result;
}

function lcs(word1,word2){//基本算法

	var arr1=word1.split("");
	var arr2=word2.split("");
	var len=arr1.length;
	var len2=arr2.length;
	var max=0;
	var str=0;

	var secondIndex;


	for(let i=0;i<len;i++){

		var index=i

		for(let j=0;j<len2;j++){

			secondIndex=j;
			var tempMax=0;

			while(arr1[index++]===arr[secondIndex++]){

				tempMax++;
				if(tempMax>max){
					max=tempMax;
				}

			}


		}
	}

	return max;
}

function lcs(word1, word2) {
	var max = 0;
	var index = 0;
	var len=word1.length;
	var blen=word2.length;
	var lcsArr=new Array(word1.length);
	for(let i=0;i<len;i++){
		lcsArr[i]=new Array(word2.length);
		for(let j=0;j<blen;j++){
			lcsArr[i][j]=0;
		}
	}

	
}