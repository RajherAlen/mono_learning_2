const showModal = document.querySelector(".c-modal");
const hideNav = document.querySelector(".c-nav");

class Modal {
	constructor(isOpen) {
		this.isOpen = isOpen;
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

export default Modal;
