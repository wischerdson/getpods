import SmoothScroll from 'smooth-scroll'

export default ({ app }, inject) => {
	const smoothScroll = new SmoothScroll('a[href*="#"]',{
		header: '.section-header',
		offset: function (anchor, toggle) {
			console.log(toggle.closest('.mobile'))
			return toggle.closest('.mobile') ? -174 : 25
		},
		speedAsDuration: true
	});

	inject('smoothScroll', smoothScroll)
}
