window.addEventListener('load', function(){

	new Slider('.gallery-1');
	let slider2 = new Slider('.gallery-2');

	setInterval(function(){
		slider2.next();
	}, 3000);
});

class Slider{
	constructor(selector){
		this.root = document.querySelector(selector);
		this.btnPrev = this.root.querySelector('.buttons .prev');
		this.btnNext = this.root.querySelector('.buttons .next');
	
		this.images = this.root.querySelectorAll('.photos img');
		this.i = 0;
		this.animated = false;

		this.btnPrev.addEventListener('click', () => { this.prev() });
		this.btnNext.addEventListener('click', () => { this.next() });

		this.leftAnim = [
			{ transform: 'translateX(-100%)' },
			{ transform: 'translateX(0)' }
		];

		this.rightAnim = [
			{ transform: 'translateX(100%)' },
			{ transform: 'translateX(0)' }
		];

	}

	prev(){
		if(!this.animated){
			let imgHide = this.images[this.i];
			this.i = this.i > 0 ? this.i - 1 : this.images.length - 1;
			this.toogleSlides(imgHide, this.images[this.i], false);
		}
	}

	next(){
		if(!this.animated){
			let imgHide = this.images[this.i];
			this.i = this.i < this.images.length - 1 ? this.i + 1 : 0;
			this.toogleSlides(imgHide, this.images[this.i]);
		}
	}

	toogleSlides(imgHide, showImg, isNext = true){
		// this.animated = true;
		// let animate 
		// let animate2
		// if (this.vector === 'r') { 
		// 	animate = imgHide.animate([{ transform: 'translateX(100%)' }], 500);
		// 	// animate2 = showImg.animate([{ transform: 'translateX(0)' }], 500);
		// } else if (this.vector === 'l') { 
		// 	animate = imgHide.animate([{ transform: 'translateX(-100%)' }], 500);
		// }

		// animate.addEventListener('finish', () => {
		// 	imgHide.classList.remove('showed');
		// 	this.animated = false;
		// });

		showImg.classList.add('showed');
		showImg.animate(isNext ? this.rightAnim : this.leftAnim, {duration:500});
		// showimgHide.animate(isNext ? this.rightAnim : this.leftAnim, {duration:500});

		imgHide.classList.remove('showed');
	}
}