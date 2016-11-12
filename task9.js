/*
 * Сумма простых чисел меньше 10 - это 2 + 3 + 5 + 7 = 17.
 *
 * Найдите сумму всех простых чисел меньше двух миллионов.
 */

var maxSimple = 2000000;
var currSimple = 2;
var result = 0;

while (currSimple < maxSimple) {

	var isSimple = true;

	for (var i = 2; i < 100; i++) {

		if (i >= currSimple) break;

		if (currSimple%i == 0) {
			
			isSimple = false;
			break;
		}
	}

	if (isSimple) result += currSimple;

	currSimple++;
}
console.log("Max summ of simple numbers, less than " + maxSimple + " is : " + result);
