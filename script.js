// Задание 1

function toObject(a) {
  if (a / 100 > 9) {
    console.log('Введено некорректное число');
    const result = {}
  } else {
    const result = new Object();
    result.units = a % 10;
    result.tens = (a % 100) / 10;
    result.hundreds = a / 100;
  }
return(result);
}

number = prompt('Введите трехзачное число');
toObject(number);





