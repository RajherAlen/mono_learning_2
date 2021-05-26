import "../style/main.scss";
import searchInput from "./app/search";
import Modal from "./app/modal";

const searchIcon = document.querySelector(".c-nav__search");
const exitIcon = document.querySelector(".c-modal__icon--exit");
const modal = new Modal(false);
searchIcon.addEventListener("click", modal.openModal);
exitIcon.addEventListener("click", modal.closeModal);
