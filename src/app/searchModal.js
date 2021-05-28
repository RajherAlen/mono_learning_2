import { createSearch } from "./createSearch";
import { validationCard } from "./validation";

const hideNav = document.querySelector(".c-nav");
const modalContainer = createSearch();

const validationMessage = validationCard("Enter some value", "note");
const validationMessageCard = () => {
	document.body.appendChild(validationMessage);
	validationMessage &&
		setTimeout(() => {
			document.body.removeChild(validationMessage);
		}, 3000);
};

let modalIsOpen = false;

export const openSearchModal = () => {
	modalIsOpen = true;

	hideNav.style.visibility = "hidden";

	document.body.appendChild(modalContainer);

	const form = document.querySelector(".c-modal--search");
	const exitIcon = document.querySelector(".c-modal__icon--exit");
	const searchInput = document.querySelector(".c-modal__input");
	const searchIcon = document.querySelector(".c-modal__icon--search");
	const clearIcon = document.querySelector(".c-modal__icon--clear");

	exitIcon.addEventListener("click", closeSearchModal);

	// show clear icon
	searchInput.addEventListener("keyup", () => {
		if (searchInput.value !== "") {
			clearIcon.style.display = "block";
		} else {
			clearIcon.style.display = "none";
		}
	});

	// set input value ""
	clearIcon.addEventListener("click", () => {
		searchInput.value = "";
		clearIcon.style.display = "none";
	});

	// Submit search on click search icon
	searchIcon.addEventListener("click", () => {
		searchInput.value !== ""
			? console.log({ value: searchInput.value })
			: validationMessageCard();
	});

	// Submit search on enter
	form.addEventListener("submit", (e) => {
		e.preventDefault();
		searchInput.value !== ""
			? console.log({ value: searchInput.value })
			: validationMessageCard();

		searchInput.value = "";
	});
};

export const closeSearchModal = () => {
	document.body.removeChild(modalContainer);
	hideNav.style.visibility = "visible";

	modalIsOpen = false;
};

document.addEventListener("keyup", (e) => {
	if (e.key === "Escape" && modalIsOpen) {
		closeSearchModal();
	}
});
