<template>
	<div ref="slider" class="swiper-container h-full relative overflow-hidden lg:after:block lg:after:pt-full">
		<div class="swiper-wrapper absolute inset-0 z-10">
			<div class="swiper-slide w-full h-full md:pb-10" v-for="(slide, idx) in gallery" :key="`slide-${idx}`">
				<img class="w-full h-full object-center object-contain lg:object-cover" :src="slide" alt="">
			</div>
		</div>

		<div class="absolute inset-x-0 bottom-0 z-20 pb-4 flex justify-center" ref="pagination"></div>
		<div class="absolute inset-4 z-20 flex justify-center pointer-events-none">
			<div class="absolute inset-y-0 left-0 flex items-center">
				<button class="btn w-8 h-8 rounded-full bg-white/70 backdrop-filter backdrop-blur-md pointer-events-auto shadow-md" ref="navPrev">
					<Icon width="30px" height="30px" class="text-gray-600" name="chevron_left" />
				</button>
			</div>
			<div class="absolute inset-y-0 right-0 flex items-center">
				<button class="btn w-8 h-8 rounded-full bg-white/70 backdrop-filter backdrop-blur-md pointer-events-auto shadow-md" ref="navNext">
					<Icon width="30px" height="30px" class="text-gray-600" name="chevron_right" />
				</button>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		props: {
			gallery: Array
		},
		data () {
			return {
				swiper: null
			}
		},
		mounted () {
			this.swiper = new this.$swiper(this.$refs.slider, {
				resistanceRatio: 0.4,
				navigation: {
					nextEl: this.$refs.navNext,
					prevEl: this.$refs.navPrev,
				},
				speed: 600,
				pagination: {
					el: this.$refs.pagination,
					bulletElement: 'button',
					clickable: true,
				},
			})
		}
	}

</script>

<style lang="scss">

	.swiper-pagination-bullet {
		padding: 5px;

		&:before {
			content: "";
			width: 10px;
			height: 10px;
			@apply block bg-gray-300 transition-colors rounded-full;
		}
		&.swiper-pagination-bullet-active {
			&:before {
				@apply bg-blue-600;
			}
		}
	}

</style>
