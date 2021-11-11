<template>
	<section>
		<div class="container">
			<div class="card bg-white rounded-3xl grid grid-cols-2 overflow-hidden">
				<div class="h-full bg-gray-50 flex items-center px-16">
					<div>
						<h2 class="font-bold text-5xl text-gray-900">AirPods 2 поколение</h2>
						<h3 class="subtitle font-semibold text-4xl mt-6 text-gray-400">Беспроводная зарядка</h3>
						<p class="mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						<div class="mt-6">
							<p class="inline-block text-xl font-regular bg-blue-600 rounded-full py-1 px-4 text-white">2490₽</p>
						</div>
						<div class="flex items-center space-x-7 mt-6">
							<a class="btn btn-black" href="#">
								<Icon name="shopping_bag" />
								<span>Добавить в корзину</span>
							</a>
							<a class="flex items-center font-semibold space-x-2" href="#">
								<Icon name="play_circle" />
								<span>Видео-обзор</span>
							</a>
						</div>
					</div>
				</div>

				<product-card-slider />
			</div>
		</div>
	</section>
</template>


<script>

	import ProductCardSlider from '~/components/ProductCardSlider'

	export default {
		components: { ProductCardSlider }
	}

</script>

<style lang="scss" scoped>

	.card {
		min-height: calc(100vh - 200px);
	}
	.subtitle {
		color: #b3b3b3;
	}

</style>
