// Задание 1

let counter = 0;
while (counter <= 100) {
    if (isSimple(counter)) {
        console.log(counter);
    }
    counter++;
}

function isSimple(number) {
    if (number === 0) {
        return false;
    } 
    if (typeof number !== 'number') {
        return false;
    }

    for(let divider = 2; divider < number; divider++) {
        if (number % divider === 0) {
            return false;
        }
    } 
    return true;
    }

// Задания 2 и 3

const internetShopGoods = ['молоко', 'хлеб', 'рыба', 'мясо', 'творог', 'сметана'];
const internetShopPrices = [10, 20, 30, 40, 34, 26];

function countBasketPrice(arrayOfItems, arrayOfPrices) {
    let totalPrice = 0;
    const counterOfItems = arrayOfItems.length;
    let counterOfPrices = 0;
    while (counterOfPrices < counterOfItems) {
        totalPrice = totalPrice + arrayOfPrices[counterOfPrices];
        counterOfPrices = counterOfPrices + 1;
    }
    alert('Стоимость корзины равна ' + totalPrice);
    return;
}
countBasketPrice(internetShopGoods, internetShopPrices);
