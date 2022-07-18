<template>
	<div>
		<my-header :cartItemCount="cartItemCount"></my-header>
		<main>
			<!-- <div> -->
			<div v-for="product in products" :key="product">
				<div class="row">
					<div class="col-md-5 col-md-offset-0">
						<figure>
							<!-- 1번 이미지 보이게 수정할 것  -->
							<img
								class="product"
								v-bind:src="require(`@/assets/images/${product.image}`)"
							/>
						</figure>
					</div>
					<div class="col-md-6 col-md-offset-0 description">
						<!-- 2. 링크 수정 -->
						<!-- 2. params 방식 ex) :id -->
						<!-- 3. querystring 방식 ex) ?id=1234&name='taegyung' -->
						<!-- <h1 v-text="product.title"></h1> -->
						<router-link
							tag="h1"
							:to="{ name: 'Id', params: { id: product.id } }"
						>
							{{ product.title }}
						</router-link>
						<p v-html="product.description"></p>
						<p class="price">
							{{ product.price | formatPrice }}
						</p>
						<button
							class="btn btn-primary btn-lg"
							v-on:click="addToCart(product)"
							v-if="canAddToCart(product)"
						>
							장바구니 담기
						</button>
						<button
							disabled="true"
							class="btn btn-primary btn-lg"
							v-else
						>
							장바구니 담기
						</button>
						<!-- transition 애니메이션 추가 -->
						<transition name="bounce" mode="out-in">
							<span
								class="inventory-message"
								v-if="
									product.availableInventory -
										cartCount(product.id) ===
									0
								"
							>
								품절!
							</span>
							<span
								class="inventory-message"
								v-else-if="
									product.availableInventory -
										cartCount(product.id) <
									5
								"
							>
								{{
									product.availableInventory -
									cartCount(product.id)
								}}
								남았습니다!
							</span>
							<span class="inventory-message" v-else
								>지금 구매하세요!
							</span>
						</transition>
						<div class="rating">
							<span v-for="n in 5" :key="n">
								{{ checkRating(product, n) }}
								<!-- <span v-if="checkRating(product, n)">★ </span>
								<span v-else>☆ </span> -->
							</span>
						</div>
					</div>
				</div>
				<!-- end of row -->
				<hr />
			</div>
			<!-- end of v-for -->
			<!-- </div> -->
			<!-- end of showProduct -->
		</main>
	</div>
</template>

<script>
// @ is an alias to /src
// axios 추가
import axios from 'axios'
import MyHeader from "@/components/HeaderCom.vue";

export default {
	name: "MainView",
	data() {
		return {
			// computed에 평션으로 등록하고 store 이동
			products: [],
			cart: [],
		};
	},
	components: { MyHeader },
	methods: {
		checkRating(myProduct, n) {
			return myProduct.rating >= n ? "★" : "☆";
		},
		addToCart(aProduct) {
			this.cart.push(aProduct.id);
		},
		showCheckout() {
			this.showProduct = this.showProduct ? false : true;
		},
		submitForm() {
			alert("제출 완료");
		},
		canAddToCart(aProduct) {
			return aProduct.availableInventory > this.cartCount(aProduct.id);
		},
		cartCount(id) {
			let count = 0;
			for (var i = 0; i < this.cart.length; i++) {
				if (this.cart[i] === id) {
					count++;
				}
			}
			return count;
		},
	},
	computed: {
		cartItemCount() {
			return this.cart.length;
		},
		// 데이터 변수 products 대신 평션 사용
		// computed 평션 추가
		// products() {
		// 	return this.$store.getters.products;
		// },
	},
	filters: {
		formatPrice(price) {
			return "$" + price.toLocaleString();
		},
	},
	// store 이동 및 호출
	// created: function () {
	// 	this.$store.dispatch("initStore");
	// },
	created: function () {
		axios.get("/static/products.json").then((response) => {
			this.products = response.data.products;
			// console.log(this.products);
		});
	},
};
</script>

<style scoped>
.bounce-enter-active {
	animation: shake 0.72s cubic-bezier(0.37, 0.07, 0.19, 0.97) both;
	transform: translate3d(0, 0, 0);
	backface-visibility: hidden;
}

@keyframes shake {
	10%,
	90% {
		color: red;
		transform: translate3d(-1px, 0, 0);
	}

	20%,
	80% {
		transform: translate3d(2px, 0, 0);
	}

	30%,
	50%,
	70% {
		color: red;
		transform: translate3d(-4px, 0, 0);
	}

	40%,
	60% {
		transform: translate3d(4px, 0, 0);
	}
}
</style>
