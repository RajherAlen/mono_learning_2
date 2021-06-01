import { createVideoProduct } from "./createVideoProduct";
import { createVideoJump } from "./createVideoJump";

const videoProduct = createVideoProduct();
const videoJump = createVideoJump();
let modalIsOpen = false;

export const openProductVideo = () => {
	modalIsOpen = true;

	$(document.body).append(videoProduct);

	console.log($(document.body).children()[2]);
	const exitIcon = $(".c-modal__icon--exit");
	exitIcon.on("click", closeProductVideo);
};

const closeProductVideo = () => {
	$(document.body).children()[2].remove();

	modalIsOpen = false;
};

export const openJumpVideo = () => {
	modalIsOpen = true;

	$(document.body).append(videoJump);

	const exitIcon = $(".c-modal__icon--exit");
	exitIcon.on("click", closeJumpVideo);
};

const closeJumpVideo = () => {
	$(document.body).children()[2].remove();

	modalIsOpen = false;
};

$(document).on("keyup", (e) => {
	if (e.key === "Escape" && modalIsOpen) {
		$(document.body).children()[2].remove();
	}
});
