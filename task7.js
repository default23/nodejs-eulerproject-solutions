/*
Выписав первые шесть простых чисел, получим 2, 3, 5, 7, 11 и 13. Очевидно, что 6-ое простое число - 13.
Какое число является 10001-ым простым числом?
*/

var destIndex = 10001;
var currentIndex = 1;
var notFinded = true;

var i = 2;
while (notFinded) {

	var isSimple = true;
	for (var j = 2; j < i; j++) {
	
		if (i%j == 0) {
			isSimple = false;
			break;		
		}
	}

	if (isSimple) {
		currentIndex++;
	}

	if (currentIndex - destIndex == 1) {
		notFinded = false;
		break;
	} else {
		i++;
	}
}
console.log(destIndex + " index of simple number is: " + i);
