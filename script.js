const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

class BucketItem {}

class BucketList {}

class GoodsItem {
  constructor(title, price, id, button) {
    this.title = title;
    this.price = price;
    this.id = id;
    this.button = button;
  }
  render() {
    return `<div class="goods-item" itemId=${this.id}><h3>${this.title}</h3><p>${this.price}</p><button class="buyButton">Купить</button></div>`;
  }
}



const searchButton = document.querySelector('.buyButton-button')
console.log(searchButton);


class GoodsList {
  constructor() {
    this.goods = [];
  }

  async fetchGoods() {
    const responce = await fetch(`${API_URL}/catalogData.json`);
    if (responce.ok) {
      const catalogItems = await responce.json();
      this.goods = catalogItems;
    } else {
      alert("Ошибка при соединении с сервером");
    }
  }



  render() {
    let listHtml = "";
    this.goods.forEach((good) => {
      const goodItem = new GoodsItem(
        good.product_name,
        good.price,
        good.id_product,
        good.button,
      );
      listHtml += goodItem.render();
    });
    document.querySelector(".goods-list").innerHTML = listHtml;
  }
}



const init = async () => {
  const list = new GoodsList();
  await list.fetchGoods();
  list.render();
};

window.onload = init;

// const init = () => {
//   setTimeout(() => {
//     console.log('Hi')
//   }, 5000)
// setInterval(() => {
//   console.log("Назойливый popup");
// }, 2000);
// };

// window.onload = init;