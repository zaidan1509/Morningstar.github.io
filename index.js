window.onload = () => {
	let sliderImagesBox = document.querySelectorAll('.cards-box');
	sliderImagesBox.forEach(el => {
		let imageNodes = el.querySelectorAll('.card:not(.hide)')
		let arrIndexes = []; // Index array
		(() => {
			// The loop that added values to the arrIndexes array for the first time
			let start = 0;
			while (imageNodes.length > start) {
				arrIndexes.push(start++);
			}
		})();

		let setIndex = (arr) => {
			for(let i = 0; i < imageNodes.length; i++) {
				imageNodes[i].dataset.slide = arr[i] // Set indexes
			}
		}
		el.addEventListener('click', () => {
			arrIndexes.unshift(arrIndexes.pop());
			setIndex(arrIndexes)
		})
		setIndex(arrIndexes) // The first indexes addition
	});
};
