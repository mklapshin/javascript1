const API_URL = "http://localhost:3000";

Vue.component("goods-list", {
  props: ["goods"],
  template: `
    <div class="goods-list">
      <goods-item v-for="goodEntity in goods" :goodProp="goodEntity"></goods-item>
    </div>
  `,
});

Vue.component("goods-item", {
  props: ["goodProp"],
  methods: {
   async addToCart() {
      const response = await fetch(`${API_URL}/addToCart`, {
        method: 'POST', 
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(this.goodProp) 
      });
    },
  },
template: `
    <div class="goods-item" @click=addToCart>
      <h3>{{goodProp.product_name}}</h3>
      <p>{{goodProp.price}}</p>
    </div>
  `,
 });

const app = new Vue({
  el: "#app",
  data: {
    goods: [],
    filteredGoods: [],
    busketGoods: [],
    searchLine: "",
  },

  methods: {
    async getProducts() {
      const responce = await fetch(`${API_URL}/catalogData`);
      if (responce.ok) {
        const catalogItems = await responce.json();
        this.goods = catalogItems;
        this.filteredGoods = catalogItems;
      } else {
        alert("Ошибка при соединении с сервером");
      }
    },
  },

  async mounted() {
    await this.getProducts();
  },
});


/* Vue.component("search", {
  template: `
    <div>
    <input type="text" class="goods-search" />
    <button class="search-button" type="button">Искать</button>
    <button class="cart-button" type="button">Корзина</button>
    </div>
    `,
});

Vue.component("goods-list", {
  props: ["goods"],
  template: `
    <div class="goods-list">
      <goods-item v-for="goodEntity in goods" :goodProp="goodEntity"></goods-item>
    </div>
  `,
});

Vue.component("goods-item", {
  props: ["goodProp"],

  data: {
    showBasket: false,
  },

  template: `
    <div class="goods-item">
      <h3>{{goodProp.product_name}}</h3>
      <p>{{goodProp.price}}</p>
      <button v-on:click="addToBasket">В Корзину</button>
    </div>
  `,

  methods: {
    addToBasket(e) {
      app.showBasket = true;
      const item = app.goods.find(
        (i) => i.id_product === this.goodProp.id_product
      );
      console.log(item);
      app.busketGoods.push(item);
    },
  },
});

Vue.component("busket-item", {
  props: ["goodProp"],
  template: `
    <div class="goods-item">
      <h3>{{goodProp.product_name}}</h3>
      <p>{{goodProp.price}}</p>
    </div>
  `,
});

Vue.component("basket", {
  props: ["goods"],
  template: `
  <div class="basket-wrapper">
    <h3 class="basket-header">Корзина</h3>
    <div class="basket-goods">
    <busket-item v-for="goodEntity in goods" :goodProp="goodEntity"></busket-item>
    </div>
  </div>
  `,
});

const app = new Vue({
  el: "#app",
  data: {
    goods: [],
    filteredGoods: [],
    busketGoods: [],
    searchLine: "",
    showBasket: false,
    cartItems: [],
    cartItems1: [],
  },

  methods: {
    async getProducts() {
      const responce = await fetch(`${API_URL}/catalogData.json`);
      if (responce.ok) {
        const catalogItems = await responce.json();
        this.goods = catalogItems;
        this.filteredGoods = catalogItems;
      } else {
        alert("Ошибка при соединении с сервером");
      }
    },
  },

  async mounted() {
    await this.getProducts();
  },
});
*/