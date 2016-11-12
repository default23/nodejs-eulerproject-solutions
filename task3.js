/*
 *
 * Простые делители числа 13195 - это 5, 7, 13 и 29.
 *
 * Каков самый большой делитель числа 600851475143, являющийся простым числом?
 */


var src = 600851475143;
var maxNumber = 1;

var tmp = src;
var found = false;

var i = 2;
while (!found) {

	if (tmp%i == 0) {
		tmp = tmp / i;
		maxNumber = i > maxNumber ? i : maxNumber;
	} else if (i >= tmp) {
		found = true;
	}		

	i++;
}

console.log('Temp ' + tmp);
console.log('numeber ' + maxNumber);
