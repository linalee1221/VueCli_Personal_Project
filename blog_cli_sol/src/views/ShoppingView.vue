<template>
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :src="image" />
      </div>
      <div class="product-info">
        <div class="cart">Cart {{ cart.length }}</div>
        <product-display
          :premium="prem"
          @add-to-cart="updateCart"
          @remove-from-cart="removeById"
        >
        </product-display>
        <h1>{{ title }}</h1>

        <p v-if="InStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping {{ shipping }}</p>

        <product-details :details="details"></product-details>
        <ul>
          <li v-for="detail in details" :key="detail">
            {{ detail }}
          </li>
        </ul>

        <div
          v-for="(variant, index) in variants"
          :key="variant.id"
          @mouseover="updateImage(index)"
          class="color-circle"
          :style="{ 'background-color': variant.color }"
        ></div>
        <br>
        <br>
        <button class="button" v-on:click="addToCart">Add To Cart</button>
        <button class="button" v-on:click="removeFromCart">Remove Item</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [],
      InStock: true,
      prem: false,
      product: "양말",
      brand: "뿌꾸네",
      selectedVariant: 0,
      reviews: [],
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: require("@/assets/images/greensocks.jpg"),
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: require("@/assets/images/bluesocks.jpg"),
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    removeById(id) {
      const index = this.cart.indexOf(id);
      if(index > -1) {
      this.cart.splice(index, 1);
      }
    },
    addToCart() {
      this.cart.push(this.variants[this.selectedVariant].id);
    },
    removeFromCart() {
      const index = this.variants[this.selectedVariant].id

      if(this.cart.indexOf(index)>-1) {
        this.cart.splice(this.cart.indexOf(index),1);
      }
    },
    updateImage(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    // InStock() {
    //     return this.variants[this.selectedVariant].quantity
    // },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
  },
};
</script>

<style scoped>
/* body {
  background-color: #f2f2f2;
  margin: 0px;
  font-family: tahoma;
  color: #282828;
} */

.button {
  margin: 20px;
  background-color: #39495c;
  border-radius: 5px;
  font-size: 18px;
  text-align: center;
  width: 160px;
  height: 60px;
  color: white;
  padding: 8px;
  box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
    inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
    inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
  text-align: center;
  cursor: pointer;
}

.cart {
  width: 50px;
  margin: 15px;
  margin-right: 0px;
  margin-left: 320px;
  border: 1px solid #d8d8d8;
  padding: 10px 30px;
  background-color: white;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

.color-circle {
  width: 40px;
  height: 40px;
  margin-top: 8px;
  border: 2px solid #d8d8d8;
  border-radius: 50%;
}

.disabledButton {
  background-color: #d8d8d8;
  cursor: not-allowed;
}

h1 {
  font-size: 40px;
}

h3 {
  font-size: 25px;
}

img {
  border: 2px solid #d8d8d8;
  width: 70%;
  margin: 40px;
  padding: 15px;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 2px 15px -12px rgba(0, 0, 0, 0.57);
}

input {
  width: 100%;
  height: 40px;
  margin-bottom: 20px;
}

label {
  font-size: 20px;
  margin-bottom: 5px;
}

li {
  font-size: 18px;
  align-items: center;
}

.out-of-stock-img {
  opacity: 0.5;
}

p {
  font-size: 20px;
}

.product-display {
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

.product-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.product-image,
.product-info {
  width: 50%;
}
</style>
