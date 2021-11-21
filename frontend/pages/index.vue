<template>
	<div>
		<WelcomeSection />
		<div class="space-y-14">
			<!-- <ProductCardSection /> -->
			<ProductCardSection />
		</div>
	</div>
</template>

<script>

	import WelcomeSection from '~/sections/home/Welcome'
	import ProductCardSection from '~/sections/home/ProductCard'

	export default {
		components: { WelcomeSection, ProductCardSection },
		data: () => {
			return {
				products: [
					{
						title: 'AirPods 2',
						subtitle: 'Беспроводная зарядка',
						description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod`,
						price: '2499',
					},
					{
						title: 'AirPods',
						subtitle: '',
						description: '',
						price: '',
					},
					{
						title: 'AirPods',
						subtitle: '',
						description: '',
						price: '',
					},
					{
						title: 'AirPods',
						subtitle: '',
						description: '',
						price: '',
					},
					{
						title: 'AirPods',
						subtitle: '',
						description: '',
						price: '',
					}
				]
			}
		}
	}

</script>

<style lang="scss">

	body {
		background-color: #ebe9e9;
	}

</style>
