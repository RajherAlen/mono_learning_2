import { createSearch } from "./createSearch";
import { validationCard } from "./validation";

const hideNav = $(".c-nav");
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

	document.body.appendChild(modalContainer);
	hideNav.css("visibility", "hidden");

	const form = $(".c-modal--search");
	const exitIcon = $(".c-modal__icon--exit");
	const searchInput = $(".c-modal__input");
	const searchIcon = $(".c-modal__icon--search");
	const clearIcon = $(".c-modal__icon--clear");
	let inputValue;

	exitIcon.on("click", closeSearchModal);

	// show clear icon
	searchInput.on("keyup", () => {
		inputValue = searchInput.val();
		if (inputValue !== "") {
			clearIcon.css("display", "block");
		} else {
			clearIcon.css("display", "none");
		}
	});

	// set input value ""
	clearIcon.on("click", () => {
		searchInput.val("");
		clearIcon.css("display", "none");
	});

	// Submit search on click search icon
	searchIcon.on("click", () => {
		inputValue !== ""
			? console.log({ value: inputValue })
			: validationMessageCard();
	});

	// Submit search on enter
	form.on("submit", (e) => {
		e.preventDefault();
		inputValue !== ""
			? console.log({ value: inputValue })
			: validationMessageCard();

		searchInput.val("");
	});
};

export const closeSearchModal = () => {
	document.body.removeChild(modalContainer);
	hideNav.css("visibility", "visible");

	modalIsOpen = false;
};

$(document).keyup((e) => {
	if (e.key === "Escape" && modalIsOpen) {
		closeSearchModal();
	}
});
