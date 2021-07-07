//Sticky header

window.addEventListener("scroll", function(){
	var header = document.getElementById("navbar");
	header.classList.toggle("sticky", window.scrollY > 0);
})

//Ouvrir et fermer le header responsive

function openHeader(){
	document.getElementById('ulmenu').classList.toggle("open-nav");
}

