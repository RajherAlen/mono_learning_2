import "../style/main.scss";
import Search from "./app/search";

const searchIcon = document.querySelector(".c-nav__search");

const search = new Search(false);

searchIcon.addEventListener("click", search.openModal);
