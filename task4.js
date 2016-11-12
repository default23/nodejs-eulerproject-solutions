/*
* Число-палиндром с обеих сторон (справа налево и слева направо) читается одинаково. Самое большое число-палиндром, полученное умножением двух двузначных чисел – 9009 = 91 × 99.
 *
 * Найдите самый большой палиндром, полученный умножением двух трёхзначных чисел.
 */

var max = 0;

for (var i = 100; i < 1000; i++) {

	for (var j = 100; j < 1000; j++) {

		var number = i * j;
		var dst = number.toString();
		
		var insversed = [];

		for (var num in dst) {
			insversed.splice(0, 0, dst[num]);
		}
		insversed = insversed.join('');

		if (insversed === dst) max = parseInt(insversed);
	}
}

console.log(max);
