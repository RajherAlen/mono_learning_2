const form = document.querySelector(".c-modal--search");
const searchInput = document.querySelector(".c-modal__input");
const searchIcon = document.querySelector(".c-modal__icon--search");
const clearIcon = document.querySelector(".c-modal__icon--clear");

clearIcon.addEventListener("click", () => {
	searchInput.value = "";
	clearIcon.style.display = "none";
});

searchInput.addEventListener("keyup", () => {
	if (searchInput.value !== "") {
		clearIcon.style.display = "block";
	} else {
		clearIcon.style.display = "none";
	}
});

searchIcon.addEventListener("click", () => {
	console.log({ value: searchInput.value });
});

form.addEventListener("submit", (e) => {
	e.preventDefault();
	console.log({ value: searchInput.value });

	searchInput.value = "";
});

export default searchInput;
