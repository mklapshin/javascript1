const API_URL =
  "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";



  Vue.component('search', {
  
    template: `
    <div>
    <input type="text" class="goods-search" />
    <button class="search-button" type="button">Искать</button>
    <button class="cart-button" type="button">Корзина</button>
    </div>
    `
  })
  

Vue.component('goods-list', {
  props: ['goods'],
  template: `
    <div class="goods-list">
      <goods-item v-for="goodEntity in goods" :goodProp="goodEntity"></goods-item>
    </div>
  `
})

Vue.component('goods-item', {
  props: ['goodProp'],


  data: {
    showBasket: false,
  },


  template: `
    <div class="goods-item" @click="addToBasket">
      <h3>{{goodProp.product_name}}</h3>
      <p>{{goodProp.price}}</p>
      <button>Купить</button>
    </div>
  `,

  methods: {
    addToBasket() {
      this.showBasket = true;
      console.log(this.showBasket)
     
    }
  },
})


Vue.component('basket', {
  props: ['showBasket'],

  template: `
  <div class="basket-wrapper" v-if="showBasket">
    <h3 class="basket-header">Корзина</h3>
    <div class="basket-goods">
      <div class="goods-item">
        <h3>Товар</h3>
        <p>Цена</p>
      </div>
    </div>
  </div>

  `


})

const app = new Vue({
  el: "#app",
  data: {
    goods: [],
    filteredGoods: [],
    busketGoods: [],
    searchLine: '',
    showBasket: false,
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
    await this.getProducts()
  }
});
