const form = document.querySelector(".c-modal--search");
const searchInput = document.querySelector(".c-modal__input");
const searchIcon = document.querySelector(".c-modal__icon--search");
const clearIcon = document.querySelector(".c-modal__icon--clear");

searchInput.addEventListener("keyup", function () {
	if (searchInput.value !== "") {
		clearIcon.style.display = "block";
	} else {
		clearIcon.style.display = "none";
	}
});

searchIcon.addEventListener("click", function () {
	console.log({ value: searchInput.value });
});

form.addEventListener("submit", function (e) {
	e.preventDefault();
	console.log({ value: searchInput.value });

	searchInput.value = "";
});

export default searchInput;
