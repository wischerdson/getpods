<template>
	<div>
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
							'/image/airpods-2-1.jpeg',
							'/image/airpods-2-2.jpeg',
							'https://uwalls.com/img/gallery/8/thumbs/thumb_l_nus_21895.jpg',
						]
					}
				]
			}
		}
	}

</script>
