/*
ROMAN NUMERAL CONVERTER
AUHTOR: JOHN CHANDRA (john@johnwesly.net)

THIS SCRIPT IS TO CONVERT ROMAN NUMBER INTO ARABIC NUMBER VICE VERCA.
*/

/* 
A LIST OF ROMAN NUMBER USED IN
CONVERTING ROMAN NUMBER INTO ARABIC NUMBER
*/
var roman = {
	'I' : 1,
	'V' : 5,
	'X' : 10,
	'L' : 50,
	'C' : 100,
	'D' : 500,
	'M' : 1000
};

/*
A LIST OF ARABIC NUMBER USED IN
CONVERTING ARABIC NUMBER INTO ROMAN NUMBER
*/
var digit = {
	1 : 'I',
	5 : 'V',
	10 : 'X',
	50 : 'L',
	100 : 'C',
	500 : 'D',
	1000 : 'M'
};

/*
A SPECIAL RULES APPLIED IN THE CONVERSION
*/
var specialDigit = {
	4 : 'IV',
	9 : 'IX',
	40 : 'XL',
	900 : 'CM'
};

var digitClass = [1000, 100, 10, 1];

/*
A FUNCTION FOR CONVERTING ROMAN TO ARABIC
*/
function roman2digit(n) {
	var ch = n.split(""), currVal = 0, result = 0, i;
	
	/* ITERATE THROUGH EACH CHARACTER */
	for (i = 0; i < ch.length; i + 1) {
		
		/* CHECK THE NEXT CHARACTER */
		if (i + 1 < ch.length) {
			
			/*
			CHECK IF THE NEXT CHARACTER IS GREATER.
			IF SO, THEN SUBTRACT WITH THE CURRENT CHARACTER'S VALUE.
			THIS IS FOR SPECIAL CASE LIKE 'IV', 'IX'.
			OTHERWISE, ADD THE CURRENT VALUE TO THE RESULT CALCULATION.
			*/
			if (roman[ch[i]] < roman[ch[i + 1]]) {
				result -= roman[ch[i]];
			} else {
				result += roman[ch[i]];
			}
		} else {
			result += roman[ch[i]];
		}
	}
	return result;
}

/*
A FUNCTION FOR CONVERTING ARABIC TO ROMAN
*/
function digit2roman(n) {
	var currVal = n, num, result = "", i, j;
	for (i = 0; i < digitClass.length; i + 1) {

		if (currVal > digitClass[i]) {
			/*
			CHECK IF SPECIAL NUMBER EXIST:
			4: IV, 9: IX, ETC
			IF SO, THEN RETURN THE VALUE
			*/
			if (specialDigit[currVal]) {
				result = result + specialDigit[currVal];
				return result;
			}
			
			/* CALCULATE THE VALUE OF ROMAN NUMBER */
			num = Math.floor(currVal / digitClass[i]);

			/* ADD THE ROMAN NUMBER AS MANY AS REQUIRED */
			for (j = 0; j < num; j + 1) {
				result = result + digit[digitClass[i]];
			}

			/* CALCULATE THE REMAINDER */
			currVal = currVal % digitClass[i];
			
		}
	}
	return result;
}

console.log(roman2digit('CM'));
console.log(digit2roman(9));