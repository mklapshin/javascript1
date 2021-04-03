// Задание 1

// var a = 1, b = 1, c, d;
// c = ++a; alert(c); // 2 // Префиксный инкремент - переменная а увеличивается на единицу и выводится конечное значение
// d = b++; alert(d); // 1 // Постфиксный инкремент - переменная b увеличивается на единицу, но выводится предыдущее значение
// c = (2+ ++a); alert(c); // 5 // Префиксный инкремент - переменная а увеличивается на 1 и к этому результату прибавляется число 2
// d = (2+ b++); alert(d); // 4 // Постфиксный инкремент - переменная b увеличивается на 1, но выводится предыдущий результат этой переменной + 2
// alert(a); // 3 // Выводится текущее значение переменной а, полученное 2 шага назад
// alert(b); // 3 // Выводится текущее значение переменной b, полученное 2 шага назад

// Задание 2
// x будет равен 5

// Задание 3

countNumber();

function countNumber() {
    const b1 = prompt('Ввеите первое целое число');
    const b2 = prompt('Ввеите второе целое число');
    if (b1 >= 0 & b2 >= 0) {
        c = b1 - b2;
    } else if (b1 < 0 & b2 < 0) {
        c = b1 * b2;
    } else {
        c = b1 + b2;
    }
    alert(c);
    return;
}

// Задание 5

function summNumbers(term1, term2) {
    result = term1 + term2;
    alert(result);
    return;
}

function differenceNumbers(minuend, subtrahend) {
    result = minuend - subtrahend;
    alert(result);
    return;
}

function multNumbers(factor1, factor2) {
    result = factor1 * factor2;
    alert(result);
    return;
}

function divisionNumbers(dividend, divider) {
    result = dividend / divider;
    alert(result);
    return;
}

// Задание 6

const arg1 = parseInt(prompt('Введите значение arg1'));
const arg2 = parseInt(prompt('Введите значение arg2'));
let operation = prompt('Введите значение operation');

mathOperation(arg1, arg2, operation);

function mathOperation(value1, value2, chooseOperation) {
    switch (chooseOperation) {
        case '1':
            summNumbers(value1, value2);
            break;
        case '2':
            differenceNumbers(value1, value2);
            break;
        case '3':
            multNumbers(value1, value2);
            break;
        case '4':
            divisionNumbers(value1, value2);
            break;
    }

    return;
}