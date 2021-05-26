const showModal = document.querySelector(".c-modal");
const searchInput = document.querySelector(".c-modal--search");
const hideNav = document.querySelector(".c-nav");

const videoProduct = document.querySelector(".c-video--product");
const videoJump = document.querySelector(".c-video--jump");

const searchIcon = document.querySelector(".c-nav__search");
const exitIcon = document.querySelector(".c-modal__icon--exit");

class Modal {
	constructor() {
		this.isOpen = false;
	}

	openModal() {
		this.isOpen = true;
		showModal.style.display = "block";
		hideNav.style.visibility = "hidden";
		searchInput.style.display = "block";
		videoProduct.style.display = "none";
		videoJump.style.display = "none";
	}

	closeModal() {
		this.isOpen = false;
		showModal.style.display = "none";
		searchInput.style.display = "none";
		hideNav.style.visibility = "visible";
		videoProduct.style.display = "none";
		videoJump.style.display = "none";
	}
}

const modal = new Modal();

searchIcon.addEventListener("click", modal.openModal);
exitIcon.addEventListener("click", modal.closeModal);

document.addEventListener("keyup", (e) => {
	if (e.key === "Escape") {
		modal.closeModal();
		videoProduct.style.display = "none";
		videoJump.style.display = "none";
	}
});

export default Modal;
