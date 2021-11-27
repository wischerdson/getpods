<template>
	<section>
		<div class="container">
			<div class="card bg-white rounded-3xl grid grid-cols-2 lg:flex lg:flex-col-reverse overflow-hidden relative z-10">
				<div class="h-full bg-gray-50 flex items-center p-16 md:p-10 sm:p-6">
					<div>
						<h2 class="font-bold text-5xl md:text-5xl sm:text-4xl text-gray-900">{{ product.title }}</h2>
						<h3 class="subtitle font-semibold text-4xl md:text-3xl sm:text-2xl mt-6 md:mt-4 sm:mt-2 text-gray-400">{{ product.subtitle }}</h3>
						<p class="mt-4 text-lg md:text-base" v-html="product.description"></p>
						<div class="mt-6">
							<p class="inline-block text-xl font-regular bg-blue-600 rounded-full py-1 px-4 text-white">{{ product.price }} ₽</p>
						</div>
						<div class="flex items-center space-x-7 mt-6">
							<a class="btn btn-black" href="#">
								<Icon name="shopping_bag" />
								<span>Добавить в корзину</span>
							</a>
							<!-- <a class="flex items-center font-semibold space-x-2" href="#">
								<Icon name="play_circle" />
								<span>Видео-обзор</span>
							</a> -->
						</div>
					</div>
				</div>

				<product-card-slider :gallery="product.gallery" />
			</div>
		</div>
	</section>
</template>


<script>

	import ProductCardSlider from '~/components/ProductCardSlider'

	export default {
		props: {
			product: Object
		},
		components: { ProductCardSlider },
	}

</script>

<style lang="scss" scoped>

	.card {
		min-height: 620px;
	}
	.subtitle {
		color: #b3b3b3;
	}

</style>
