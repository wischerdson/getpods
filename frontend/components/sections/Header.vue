<template>
	<header class="bg-black">
		<div class="container">
			<nav class="grid grid-cols-3 text-white">
				<div class="h-full flex justify-start items-center">
					<a href="#">
						<img width="200" src="/image/logo.png" alt="">
					</a>
				</div>
				<ul class="flex justify-center space-x-7">
					<li>
						<a class="flex flex-col items-center px-1.5 pb-3 hover:opacity-60 transition transition-opacity" href="#">
							<Icon name="airpods_2gen" />
							<span class="text-xs text-gray-200 tracking-wider block mt-1">Airpods 2</span>
						</a>
					</li>
					<li>
						<a class="flex flex-col items-center px-1.5 pb-3 hover:opacity-60 transition transition-opacity" href="#">
							<Icon name="airpods_pro" />
							<span class="text-xs text-gray-200 tracking-wider block mt-1">Airpods Pro</span>
						</a>
					</li>
					<li>
						<a class="flex flex-col items-center px-1.5 pb-3 hover:opacity-60 transition transition-opacity" href="#">
							<Icon name="airpods_max" />
							<span class="text-xs text-gray-200 tracking-wider block mt-1">Airpods Max</span>
						</a>
					</li>
				</ul>
				<div class="flex justify-end">
					<div class="h-full flex items-center">
						<a class="btn btn-white btn-outline px-6 h-12 space-x-1.5" href="#" title="Перейти в корзину">
							<Icon class="text-gray-200" name="shopping_bag" />
							<span>Корзина</span>
						</a>
					</div>
				</div>
			</nav>
		</div>
	</header>
</template>
