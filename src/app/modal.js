import { closeModal, openModal } from "./openSearch";

const searchIcon = document.querySelector(".c-nav__search");

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

export default Modal;
