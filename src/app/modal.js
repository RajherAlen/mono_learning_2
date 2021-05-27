import { closeModal, openModal } from "./modalOpenClose";

const searchIcon = document.querySelector(".c-nav__search");
const exitIcon = document.querySelector(".c-modal__icon--exit");

class Modal {
	constructor() {
		this.isOpen = false;
	}

	openModal() {
		this.isOpen = true;
		openModal();
	}

	closeModal() {
		this.isOpen = false;
		closeModal();
	}
}

const modal = new Modal();

searchIcon.addEventListener("click", modal.openModal);
exitIcon.addEventListener("click", modal.closeModal);

document.addEventListener("keyup", (e) => {
	if (e.key === "Escape") {
		modal.closeModal();
	}
});

export default Modal;
