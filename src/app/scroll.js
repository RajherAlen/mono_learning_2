const header = document.querySelector(".c-header");
const headerBottom = document.querySelector(".c-header--bottom");
const headerTop = document.querySelector(".c-header--top");
const hero = document.querySelector(".c-hero");

const scrollNav = window.addEventListener("scroll", function () {
	if (this.window.scrollY > 50) {
		header.className = "c-header c-header--glass";
		headerTop.className = "c-header--top c-header--top--removed";
		headerBottom.style.padding = "16px 0";
		headerBottom.style.borderBottom = "0";
		hero.style.paddingTop = "180px";
	} else {
		header.className = "c-header";
		headerTop.className = "c-header--top";
		headerBottom.style.borderBottom = "1px solid #636e72";
		headerBottom.style.padding = "0 0 16px";
		hero.style.paddingTop = "80px";
	}
});

export default scrollNav;
