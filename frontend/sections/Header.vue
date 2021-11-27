<template>
	<header class="fixed lg:static inset-x-0 top-0 z-30" data-aos="fade-down" data-aos-delay="300">
		<div class="container">
			<nav class="grid grid-cols-[.5fr,1fr,.5fr] lg:flex lg:justify-between backdrop-filter backdrop-blur-xl lg:backdrop-filter-none rounded-3xl bg-white/80 lg:bg-transparent px-5 lg:px-0 mt-4">
				<div class="h-full flex justify-start items-center">
					<a href="#">
						<img class="max-w-[200px] lg:max-w-[150px] w-full" src="/image/logo.png" alt="">
					</a>
				</div>
				<ul class="flex justify-center space-x-7 lg:hidden">
					<li v-for="(link, idx) in links" :key="`nav-link-${idx}`">
						<a class="flex flex-col items-center px-1.5 pb-3 hover:text-blue-600 transition-colors" href="#">
							<Icon :name="link.icon" />
							<span class="text-xs tracking-wider block mt-1">{{ link.name }}</span>
						</a>
					</li>
				</ul>
				<div class="flex justify-end">
					<div class="h-full flex items-center lg:justify-end">
						<a class="btn btn-white btn-outline h-12 space-x-2" href="#" title="Перейти в корзину">
							<Icon class="mt-px" name="shopping_bag" />
							<span>Корзина</span>
						</a>
					</div>
				</div>
			</nav>
		</div>

		<!-- Mobile -->
		<div class="hidden lg:block overflow-auto w-full container">
				<ul class="space-x-5 flex mt-4 pb-6 pr-4 w-max mx-auto">
					<li v-for="(link, idx) in links" :key="`nav-link-${idx}`">
						<a class="product-item w-[86px] pb-3 flex flex-col items-center justify-start bg-white rounded-xl overflow-hidden" href="#">
							<Icon :name="link.icon" />
							<span class="text-xs tracking-wider block mt-1 whitespace-nowrap">{{ link.name }}</span>
						</a>
					</li>
				</ul>
		</div>
	</header>
</template>

<script>
	export default {
		data: () => {
			return {
				links: [
					{ name: 'Airpods 2', icon: 'airpods_2gen' },
					{ name: 'Airpods 3', icon: 'airpods_3gen' },
					{ name: 'Airpods Pro', icon: 'airpods_pro' },
					{ name: 'Airpods Max', icon: 'airpods_max' }
				]
			}
		}
	}
</script>

<style lang="scss" scoped>

	nav {
		box-shadow: 0 2px 20px 0 rgba(#000, .07);

		@screen lg {
			box-shadow: none;
		}
	}

	.product-item {
		box-shadow: 0 2px 20px 0 rgba(#000, .07);
	}

</style>
