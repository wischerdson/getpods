<template>
	<div>
		<WelcomeSection />
		<div class="space-y-14">
			<CatalogSection />
		</div>
	</div>
</template>

<script>

	import WelcomeSection from '~/sections/home/Welcome'
	import CatalogSection from '~/sections/home/Catalog'

	export default {
		components: { WelcomeSection, CatalogSection }
	}

</script>

<style lang="scss">

	body {
		background-color: #ebe9e9;
	}

</style>
