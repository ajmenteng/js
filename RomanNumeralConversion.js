//Collection of Roman number
var roman={
	'I':1,
	'V':5,
	'X':10,
	'L':50,
	'C':100,
	'D':500,
	'M':1000
}

var digit={
	1:'I',
	5:'V',
	10:'X',
	50:'L',
	100:'C',
	500:'D',
	1000:'M'
}

var specialDigit={
	4:'IV',
	9:'IX',
	40:'XL',
	900:'CM'
}

var digitClass=[1000,100,10,1];

//A function to convert Roman number to digit
function roman2digit(n){
	var ch=n.split("");
	var currVal=0, result=0;
	for(i=0;i<ch.length;i++){
		//Check the next char
		if(i+1<ch.length){
			//Compare the current value of a roman number with the next one
			//If the next one is greater, then subtract the current value
			if(roman[ch[i]]<roman[ch[i+1]]){
				result-=roman[ch[i]];
			}
			//otherwise, add it up
			else{
				result+=roman[ch[i]];
			}			
		}
		else{
			result+=roman[ch[i]];
		}
	}
	return result;
}

function digit2roman(n){
	var currVal=n, num, result="";	
	for(i=0;i<digitClass.length;i++){

		if(currVal>digitClass[i]){

			//Check if special number exist: 4:IV, 9:IX, etc
			//If exists then return the value		
			if(specialDigit[currVal]){
				result=result+specialDigit[currVal];
				return result;
			}

			//Calculate the number of Roman number
			num=Math.floor(currVal/digitClass[i]);

			//Add the roman number as many as required
			for(j=0;j<num;j++){
				result=result+digit[digitClass[i]];
			}

			//Calculate the remainder
			currVal=currVal%digitClass[i];
			
		}
	}
	return result;
}

console.log(roman2digit('CM'));
console.log(digit2roman(9));