function fibonaci(n){
	var num = [];
	for(i = 1; i <= n; i++){
		if(i > 1){
			num[i] +=num[i-1];
		} else {
			num[1] = 1;
		}
	}
	return num[i];
}

console.log(fibonaci(5));