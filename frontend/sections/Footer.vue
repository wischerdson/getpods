<template>
	<footer class="mt-28">
		<div class="container">
			<div class="flex justify-between mb-6">
				<a href="#">
					<img class="w-[200px] lg:w-[150px]" :src="require('~/assets/svg/logo.svg')" alt="">
				</a>
				<ul class="flex space-x-10 items-center">
					<li>
						<a class="hover:underline" href="#">Политика конфиденциальности</a>
					</li>
					<li>
						<a class="hover:underline" href="#">Публичная оферта</a>
					</li>
					<li>
						<a class="font-medium text-lg" href="#">8 910 112 71 74</a>
					</li>
				</ul>
			</div>
		</div>
		<div class="flex justify-center">
			<a class="p-4" href="https://deserve.ru" target="_blank">
				<img class="w-60" :src="require('~/assets/svg/design-by-deserve.svg')" alt="Сделано в Deserve.ru">
			</a>
		</div>
	</footer>
</template>
