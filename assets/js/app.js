function openHeader(){
	document.getElementById('header').classList.toggle("open-nav");
}

function openPortfolio(){
	document.getElementById('portfolio').classList.toggle("open-port");
}

window.addEventListener('scroll', function(){
	var scroll = document.querySelector('.return');
	scroll.classList.toggle("active", window.scrollY > 300)
})

function scrollToTop(){
	window.scrollTo({
		top: 0,
		left: 0,
		behaviour: "smooth"
	})
}

