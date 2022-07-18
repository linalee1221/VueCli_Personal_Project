<template>
	<header>
		<div class="navbar navbar-default">
			<div class="navbar-header">
				<!-- 링크 추가 : MainView -->
				<!-- <h1>{{ sitename }}</h1> -->
				<h1>
					<router-link :to="{ name: 'MainView' }">{{
						sitename
					}}</router-link>
				</h1>
			</div>
			<div class="nav navbar-nav navbar-right cart">
				<!-- <button type="button" class="btn btn-default btn-lg" v-on:click="showCheckout">
        <span class="glyphicon glyphicon-shopping-cart">{{cartItemCount}}</span> 체크아웃
      </button> -->
				<!-- 링크 추가 : FormView -->
				<router-link
					active-class="active"
					tag="button"
					class="btn btn-default btn-lg"
					:to="{ name: 'FormView' }"
				>
					<span class="glyphicon glyphicon-shopping-cart">{{
						cartItemCount
					}}</span>
					체크아웃
				</router-link>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	name: "my-header",
	data() {
		return {
			sitename: "Vue.js 애완용품샵",
		};
	},
	props: ["cartItemCount"],
	methods: {
		// showCheckout() {
		//   this.$router.push({name: 'Form'});
		// }
	},
};
</script>

<style>
a {
	text-decoration: none;
	color: black;
}

.router-link-exact-active {
	/* color: blue; */
	color: black;
}
</style>