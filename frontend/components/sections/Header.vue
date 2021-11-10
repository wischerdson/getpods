<template>
	<header class="fixed inset-x-0 z-30" data-aos1="fade-down" data-aos1-delay="300">
		<div class="container">
			<nav class="grid grid-cols-3 backdrop-filter backdrop-blur-xl rounded-3xl bg-white/80 px-5 mt-4">
				<div class="h-full flex justify-start items-center">
					<a href="#">
						<img width="200" src="/image/logo.png" alt="">
					</a>
				</div>
				<ul class="flex justify-center space-x-7">
					<li>
						<a class="flex flex-col items-center px-1.5 pb-3 hover:text-blue-600 transition-colors" href="#">
							<Icon name="airpods_2gen" />
							<span class="text-xs tracking-wider block mt-1">Airpods 2</span>
						</a>
					</li>
					<li>
						<a class="flex flex-col items-center px-1.5 pb-3 hover:text-blue-600 transition-colors" href="#">
							<Icon name="airpods_pro" />
							<span class="text-xs tracking-wider block mt-1">Airpods Pro</span>
						</a>
					</li>
					<li>
						<a class="flex flex-col items-center px-1.5 pb-3 hover:text-blue-600 transition-colors" href="#">
							<Icon name="airpods_max" />
							<span class="text-xs tracking-wider block mt-1">Airpods Max</span>
						</a>
					</li>
				</ul>

				<div class="flex justify-end">
					<div class="h-full flex items-center">
						<a class="btn btn-white btn-outline px-6 h-12 space-x-2" href="#" title="Перейти в корзину">
							<Icon class="mt-px" name="shopping_bag" />
							<span>Корзина</span>
						</a>
					</div>
				</div>
			</nav>
		</div>
	</header>
</template>

<style lang="scss" scoped>

	nav {
		box-shadow: 0 2px 20px 0 rgba(#000, .07);
	}

</style>
