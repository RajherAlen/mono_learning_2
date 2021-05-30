import "../style/main.scss";
import Modal from "./app/modal";
import scroll from "./app/scroll";

const modal = new Modal();

const searchIcon = $(".c-nav__search");
searchIcon.on("click", modal.searchModalOpen);

const productVideo = $("#video__product");
productVideo.on("click", modal.videoProductModalOpen);

const jumpVideo = $("#video__jump");
jumpVideo.on("click", modal.videoJumpModalOpen);
