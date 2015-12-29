/*
NUMBER TO WORDS CONVERTER
AUTHOR: JOHN CHANDRA (john@johnwesly.net)

THE RULE OF CONVERTING NUMBER TO WORDS IN ENGLISH IS SIMPLE. AS THE NUMBER CAN BE SPLITTED INTO A GROUP OF THREE DIGITS WHICH IS A HUNDRED LEVEL, THEN ALL OTHER UNIT FROM THOUSAND TO MILLION ETC. CAN FOLLOW THE SAME PATTERN. HERE ARE SOME EXAMPLES:
100			: ONE HUNDRED
100,000		: ONE HUNDRED THOUSAND
100,100		: ONE HUNDRED THOUSAND ONE HUNDRED
100,000,000	: ONE HUNDRED MILLION
100,100,000	: ONE HUNDRED MILLION ONE HUNDRED THOUSAND
100,100,100	: ONE HUNDRED MILLION ONE HUNDRED THOUSAND ONE HUNDRED
SEE THE PATTERN THERE? THAT'S IT! WE THEN NEED TO TRANSLATE THE DEGREE BASED ON EVERY THREE DIGIT BLOCK ACCORDINGLY.
*/

var single = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight', 'nine'];

var single2 = ['ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];

var tens = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

var unit = ['', 'thousand ', 'million ', 'billion '];

/* ONLY FOR TWO DIGITS */
function twodigits(num) {
	var nums = num.split("");
	var result= '';
	if(nums[0] == '1') {
		result = single2[Number(nums[1])];
	} else {
		result = tens[ Number(nums[0]) ] + '-' + single[ Number(nums[1]) ];
	}
	return result;
}

/* ONLY FOR THREE DIGITS (HUNDRED) */
function threedigits(num) {
	var nums = num.split("");
	var result = '';

	/*
	IF THE LEADING DIGIT OF THIS BLOCK IS NOT ZERO, 
	THEN ADD THE WORD 'HUNDRED' BEFORE PROCEEDING TO THE NEXT DIGIT
	*/		
	if(Number(num[0]) > 0) {
		result = single[Number(nums[0])] + 'hundred ';
	}

	if(Number(nums[1] > 0)) {
		result += twodigits(nums[1] + nums[2]);
	} else {
		result += single[ Number(nums[2])];
	}

	return result;
}

/* THE MAIN FUNCTION */
function num2words(num) {
	var numblocks = [];
	var str = num.toString();
	var result = '';

	/* 
	BREAK THE NUMBER INTO THREE DIGIT GROUP STARTING FROM THE END OF THE STRING 
	*/
	for(i = str.length; i-3 >= 0; i-=3) {
		numblocks.push(str.substring(i-3,i));	
	}

	/* 
	IF THE LAST BLOCK WHICH WILL BE THE MOST FRONT BLOCK IS LESS THAN THREE DIGIT 
	LENGHT THEN TAKE ALL THE LEFTOVER NUMBER
	*/
	if(i > 0) {
		numblocks.push(str.substring(0,i));
	}

	/*
	ITERATE THROUGH EACH BLOCK NUMBER AND TRANSLATE EACH HUNDRED BLOCK ACCORDINGLY.
	ADD THE DEGREE (E.G. THOUSAND, MILLION, ETC) AT THE END OF EVERY BLOCK TRANSLATION
	*/
	for(j = numblocks.length-1; j >= 0 ; j--) {
		if(Number(numblocks[j]>0)) {

			/*
			CALL THE FUNCTION ACCORDING TO THE LENGTH OF DIGIT ON EACH BLOCK
			*/
			if(numblocks[j].length == 3) {
				result += threedigits(numblocks[j]) + unit[j];
			} else {
				if(numblocks[j].length == 2) {
					result += twodigits(numblocks[j]) + unit[j];
				} else {
					result += single[numblocks[j]] + unit[j];
				}
			}				
		}
	}
	return result;
}

console.log(17536 + ": " + num2words(17536));
console.log(135036 + ": " + num2words(135036));
console.log(1053001 + ": " + num2words(1053001));