import { closeSearchModal, openSearchModal } from "./searchModal";

const searchIcon = document.querySelector(".c-nav__search");

class Modal {
	constructor() {}

	searchModalOpen() {
		openSearchModal();
	}

	searchModalClose() {
		closeSearchModal();
	}
}

const modal = new Modal();

searchIcon.addEventListener("click", modal.searchModalOpen);

export default Modal;
