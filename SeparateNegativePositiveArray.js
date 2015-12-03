var myArr=[4,-3,7,56,-8,1,9,-96,42,-5]
function separate(arr){
	i = -1;
	for(j=0;j<arr.length;j++){
		if (j>i && arr[j]<0) {
			i++;
			temp=arr[i];
			arr[i]=arr[j];
			arr[j]=temp;
		}
	}
	return arr;
}

console.log(myArr);

sepArr = separate(myArr);

console.log(sepArr);