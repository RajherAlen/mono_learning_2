import { closeSearchModal, openSearchModal } from "./searchModal";

const searchIcon = document.querySelector(".c-nav__search");

class Modal {
	constructor() {
		this.isOpen = false;
	}

	searchModalOpen() {
		openSearchModal();
		this.isOpen = true;
	}

	searchModalClose() {
		closeSearchModal();
		this.isOpen = false;
	}
}

const modal = new Modal();
searchIcon.addEventListener("click", modal.searchModalOpen);

document.addEventListener("keyup", (e) => {
	if (e.key === "Escape") {
		modal.searchModalClose();
	}
});

export default Modal;
