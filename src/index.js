import "../style/main.scss";
import Modal from "./app/modal";
import scroll from "./app/scroll";

const modal = new Modal();

const searchIcon = document.querySelector(".c-nav__search");
searchIcon.addEventListener("click", modal.searchModalOpen);

const productVideo = document.querySelector("#video__product");
productVideo.addEventListener("click", modal.videoProductModalOpen);

const jumpVideo = document.querySelector("#video__jump");
jumpVideo.addEventListener("click", modal.videoJumpModalOpen);
