const header = $(".c-header");
const headerBottom = $(".c-header--bottom");
const headerTop = $(".c-header--top");
const hero = $(".c-hero");

const scrollNav = window.addEventListener("scroll", function () {
	if (this.window.scrollY > 50) {
		header.addClass("c-header--glass");
		headerTop.addClass("c-header--top--removed");
		headerBottom.css("padding", "16px 0");
		headerBottom.css("borderBottom", "0");
		hero.css("paddingTop", "180px");
	} else {
		header.removeClass("c-header--glass");
		headerTop.removeClass("c-header--top--removed");
		headerBottom.css("borderBottom", "1px solid #636e72");
		headerBottom.css("padding", "0 0 16px");
		hero.css("paddingTop", "80px");
	}
});

export default scrollNav;
