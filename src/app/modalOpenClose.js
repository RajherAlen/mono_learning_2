const showModal = document.querySelector(".c-modal");
const searchInput = document.querySelector(".c-modal--search");
const hideNav = document.querySelector(".c-nav");

const videoProduct = document.querySelector(".c-video--product");
const videoJump = document.querySelector(".c-video--jump");

export const openModal = () => {
	showModal.style.display = "block";
	hideNav.style.visibility = "hidden";
	searchInput.style.display = "block";
	videoProduct.style.display = "none";
	videoJump.style.display = "none";
};

export const closeModal = () => {
	showModal.style.display = "none";
	searchInput.style.display = "none";
	hideNav.style.visibility = "visible";
	videoProduct.style.display = "none";
	videoJump.style.display = "none";
};
