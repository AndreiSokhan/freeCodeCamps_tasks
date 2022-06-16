//101. Создание случайных дробей с помощью JavaScript
function randomFraction() {

	// Only change code below this line

	return Math.random();

	// Only change code above this line
}

//102. Генерация случайных целых чисел с помощью JavaScript
function randomWholeNum() {

	// Only change code below this line

	return Math.floor(Math.random() * 10);
}

//103. Генерировать случайные целые числа в диапазоне
function randomRange(myMin, myMax) {
	// Only change code below this line
	return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
	// Only change code above this line
}

// 104. Используйте функцию parseInt
function convertToInteger(str) {
	return parseInt(str)
}

convertToInteger("56");

//105. Используйте функцию parseInt с основанием
function convertToInteger(str) {
	return parseInt(str, 2);
}

convertToInteger("10011");

// 106. Используйте условный (тернарный) оператор
function checkEqual(a, b) {
	return a==b ? "Equal" : "Not Equal"
}

checkEqual(1, 2);

//107. Используйте несколько условных (тернарных) операторов
function checkSign(num) {
	return (num===0) ? "zero"
		 : (num>0) ? "positive"
			  : "negative";
}

checkSign(10);

// 108. Используйте рекурсию для создания обратного отсчета
