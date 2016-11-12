/*
 * 2520 - самое маленькое число, которое делится без остатка на все числа от 1 до 10.
 * Какое самое маленькое число делится нацело на все числа от 1 до 20?
 */

var notFinded = true;
var number = 1;

while (notFinded) {

	for (var i = 1; i <= 20; i++) {

		if (number % i == 0) {
			if (i == 20) notFinded = false;
		} else {
			number++;
			break;
		}		
	}
}

console.log(number);
