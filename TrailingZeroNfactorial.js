function trailingZero(n) {
	'use strict';
	var count = 0, i;
	for (i = 5; n / i > 0; i *= 5) {
		count += Math.floor(n / i);
	}
	return count;
}

console.log(trailingZero(2));