<template>
	<div class="space-y-20">
		<ProductCard :product="product" v-for="(product, idx) in products" :key="`product-${idx}`" />
	</div>
</template>

<script>

	import ProductCard from '~/components/ProductCard'

	export default {
		components: { ProductCard },
		data () {
			return {
				products: [
					{
						title: 'AirPods 2 поколение',
						subtitle: 'Беспроводная зарядка',
						description: `Увеличенное время работы в режиме телефонного разговора. Активация Siri с помощью голоса. Всё это AirPods — уникальные беспроводные наушники. Они подойдут ко всем вашим устройствам. Достаньте их из футляра, и сразу можете пользоваться. Просто наденьте их, и они мгновенно установят соединение, а значит, вы сможете сразу погрузиться в насыщенный качественный звук. Словно по волшебству.`,
						price: '12 490',
						gallery: [
							'/image/airpods-2-1.jpg',
							'/image/airpods-2-2.jpg',
							'/image/airpods-2-3.jpg',
							'/image/airpods-2-4.jpg',
						]
					},
					{
						title: 'AirPods 3 поколение',
						subtitle: 'Магия. В новой аранжировке.',
						description: `Абсолютно новые AirPods. Технология пространственного аудио окружает звуком со всех сторон. Адаптивный эквалайзер подстраивает музыку персонально под вас. Аккумулятор работает еще дольше без подзарядки. Наушники не боятся пота и воды. Ощущения просто волшебные.`,
						price: '16 490',
						gallery: [
							'/image/airpods-3-1.jpg',
							'/image/airpods-3-2.jpg',
							'/image/airpods-3-3.jpg',
							'/image/airpods-3-4.jpg',
						]
					},
					{
						title: 'AirPods Pro',
						subtitle: 'Активное шумоподавление',
						description: `Невероятно лёгкие наушники с функцией шумоподавления. Технология активного шумоподавления заглушает внешние шумы, постоянно адаптируя воспроизведение аудио с учётом уникальной геометрии вашего уха и размера вкладышей. <br>Переведите AirPods Pro в Прозрачный режим, чтобы отключить блокировку внешних шумов и услышать, что происходит вокруг. AirPods Pro способны компенсировать изолирующий эффект силиконовых вкладышей, чтобы внешний мир звучал так же естественно, как если бы вы общались без наушников.`,
						price: '24 990',
						gallery: [
							'/image/airpods-pro-1.jpg',
							'/image/airpods-pro-2.jpg',
							'/image/airpods-pro-3.jpg',
							'/image/airpods-pro-4.jpg',
						]
					},
					{
						title: 'AirPods Max',
						subtitle: 'Абсолютно оригинальная композиция.',
						description: `AirPods Max — это совершенно новый взгляд на полноразмерные наушники. Все элементы AirPods Max, от амбушюров до оголовья, спроектированы таким образом, чтобы наушники оптимально прилегали к голове любой формы. Благодаря этому достигается невероятное качество и богатство звука.`,
						price: '54 990',
						gallery: [
							'/image/airpods-max-1.jpg',
							'/image/airpods-max-2.jpg',
							'/image/airpods-max-4.jpg',
							'/image/airpods-max-5.webp',
						]
					}
				]
			}
		}
	}

</script>
