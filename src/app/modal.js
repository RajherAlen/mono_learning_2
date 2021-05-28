import { openSearchModal } from "./searchModal";
import { openProductVideo, openJumpVideo } from "./videoModal";

class Modal {
	constructor() {}

	searchModalOpen() {
		openSearchModal();
	}

	videoProductModalOpen() {
		openProductVideo();
	}

	videoJumpModalOpen() {
		openJumpVideo();
	}
}

export default Modal;
