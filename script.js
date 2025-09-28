(function(){
	// Fonts with a paired size to visually normalize their appearance.
	// Tweak the sizes if you want a different visual balance.
	const fonts = [
		{ family: "'Rock Salt', cursive", size: '30px' },
		{ family: "'Homemade Apple', cursive", size: '35px' },
		{ family: "'Fuzzy Bubbles', cursive", size: '35px' },
		{ family: "'Just Another Hand', cursive", size: '85px' },
		{ family: "'Comforter', cursive", size: '70px' },
		{ family: "'Over the Rainbow', cursive", size: '50px' },
		{ family: "'Caveat', cursive", size: '55px' }
	];

	let idx = 0;
	const el = document.querySelector('.signature');
	if (!el) return;

	setInterval(() => {
		const f = fonts[idx];
		el.style.fontFamily = f.family;
		el.style.fontSize = f.size;
		idx = (idx + 1) % fonts.length;
	}, 100);
})();

// Icon cycler for bottom-left icons
(function(){
	const icons = [
		'assests/icons/Heart.svg',
		'assests/icons/Peace.svg',
		'assests/icons/Victory.svg'
	];
	let i = 0;
	const img = document.querySelector('.icons .icon');
	if (!img) return;

		setInterval(() => {
			img.src = icons[i];
			i = (i + 1) % icons.length;
		}, 1000);
})();

