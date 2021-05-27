const videoProduct = document.querySelector("#video__product");
const videoJump = document.querySelector("#video__jump");
const showModal = document.querySelector(".c-modal");

const playProduct = document.querySelector(".c-video--product");
const playJump = document.querySelector(".c-video--jump");

const playProductVideo = () => {
	playJump.style.display = "none";
	showModal.style.display = "block";
	playProduct.style.display = "block";
};

const playJumpVideo = () => {
	playProduct.style.display = "none";
	showModal.style.display = "block";
	playJump.style.display = "block";
};

videoProduct.addEventListener("click", playProductVideo);
videoJump.addEventListener("click", playJumpVideo);

export default videoProduct;
