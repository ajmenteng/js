/*
MODIFIED BINARY SEARCH
AUTHOR: JOHN CHANDRA (john@johnwesly.net)

THIS IS A MODIFIED VERSION OF BINARY SEARCH ALGORITHM AND
CAN BE USED TO FIND AN ITEM IN A SORTED ARRAY THAT HAS BEEN
ROTATED MANY TIMES.
*/

/*
A SORTED ARRAY THAT HAS BEEN ROTATED MANY TIMES
*/
var a = [15, 16, 19, 20, 25, 1, 3, 4, 5, 7, 10, 14];

/*
A FUNCTION FOR BINARY SEARCH
*/
function binarySearch(a, key){

	/*
	VARIABLES INITIALIZATION
	*/
	var left = 0;
	var right = a.length-1;
	var mid = Math.floor(right/2);

	/*
	LOOP THROUGH THE ARRAY UNTIL THE DIFFERENCE BETWEEN RIGHT AND LEFT IS ONE.
	*/
	while(right - left > 1) {

		/*
		IF THE ITEM ON THE LEFT SIDE IS EQUAL WITH THE KEY, THEN RETURN THE LEFT INDEX.
		*/
		if(a[left] == key){
			return left;
		}

		/*
		IF THE ITEM ON THE RIGHT SIDE IS EQUAL WITH THE KEY, THEN RETURN THE RIGHT INDEX.
		*/
		if(a[right] == key){
			return right;
		}			

		/*
		IF THE ABSOLUTE DIFFERENCE OF THE KEY AND THE ITEM ON THE LEFT IS
		LOWER THAN THE ABSOLUTE DIFFERENCE OF THE KEY AND THE ITEM ON THE RIGHT
		THEN SET THE RIGHT INDEX TO THE MIDDLE.
		OTHERWISE SET THE LEFT INDEX TO THE MIDDLE.
		*/
		if(Math.abs(a[left] - key) < Math.abs(a[right] - key)){
			right = mid;
		} else {
			left = mid;				
		}

		/*
		RECALCULATE THE MIDDLE INDEX VALUE.
		*/
		mid = Math.floor((right + left)/2);
	}

	/*
	CHECK IF THE ITEM IN THE MIDDLE IS EQUAL WITH THE KEY
	*/
	if(a[mid] == key){
		return mid;
	} else{
		return -1;
	}
}

console.log(binarySearch(a, 14));