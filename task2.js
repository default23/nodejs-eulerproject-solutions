/*
Каждый следующий элемент ряда Фибоначчи получается при сложении двух предыдущих. Начиная с 1 и 2, первые 10 элементов будут:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

Найдите сумму всех четных элементов ряда Фибоначчи, которые не превышают четыре миллиона.
*/


var fibonachyArr = [1, 2];
var result = 0;

var i = 1;

while (fibonachyArr[fibonachyArr.length - 1] <= 4000000) {

	var newNumber = fibonachyArr[fibonachyArr.length - 1] + fibonachyArr[fibonachyArr.length - 2] ;
	fibonachyArr.push(newNumber);

	result +=newNumber%2 == 0 ? newNumber : 0;
}

console.log(result);
