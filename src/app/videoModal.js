import { createVideoProduct } from "./createVideoProduct";
import { createVideoJump } from "./createVideoJump";

const videoProduct = createVideoProduct();
const videoJump = createVideoJump();
let modalIsOpen = false;

export const openProductVideo = () => {
	modalIsOpen = true;

	document.body.appendChild(videoProduct);

	const exitIcon = document.querySelector(".c-modal__icon--exit");
	exitIcon.addEventListener("click", closeProductVideo);
	console.log();
};

const closeProductVideo = () => {
	document.body.removeChild(videoProduct);

	modalIsOpen = false;
};

export const openJumpVideo = () => {
	modalIsOpen = true;

	document.body.appendChild(videoJump);

	const exitIcon = document.querySelector(".c-modal__icon--exit");
	exitIcon.addEventListener("click", closeJumpVideo);
};

const closeJumpVideo = () => {
	document.body.removeChild(videoJump);

	modalIsOpen = false;
};

document.addEventListener("keyup", (e) => {
	if (e.key === "Escape" && modalIsOpen) {
		if (
			document.body.children[2].children[0].classList[1] ===
			"c-video--product"
		) {
			closeProductVideo();
		} else {
			closeJumpVideo();
		}
	}
});
