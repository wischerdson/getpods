<template>
	<div class="font-light">
		<HeaderSection />

		<Nuxt />

		<FooterSection />
	</div>
</template>

<script>

	import HeaderSection from '~/components/sections/Header'
	import FooterSection from '~/components/sections/Footer'

	export default {
		components: { HeaderSection, FooterSection }
	}

</script>
