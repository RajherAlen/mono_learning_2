const showModal = document.querySelector(".c-modal");
const hideNav = document.querySelector(".c-nav");

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
	}

	closeModal() {
		this.isOpen = false;
		showModal.style.display = "none";
		hideNav.style.visibility = "visible";
	}
}
const modal = new Modal();

searchIcon.addEventListener("click", modal.openModal);
exitIcon.addEventListener("click", modal.closeModal);

document.addEventListener("keyup", function (e) {
	if (e.key === "Escape") {
		modal.closeModal();
	}
});

export default Modal;
