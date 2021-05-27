const hideNav = document.querySelector(".c-nav");

const modalContainer = document.createElement("div");
modalContainer.setAttribute("class", "c-modal");

let newChild = `
	<form class="c-modal--search">
		<i class="u-icon u-icon--med u-icon--search c-modal__icon--search"></i>
		<input type="text" class="c-modal__input" />
		<i class="u-icon u-icon--base u-icon--exit c-modal__icon--clear"></i>
	</form>
	
	<i class="u-icon u-icon--base u-icon--exit c-modal__icon--exit"></i>
`;

export const openModal = () => {
	hideNav.style.visibility = "hidden";
	modalContainer.innerHTML = newChild;
	document.body.appendChild(modalContainer);

	let exitIcon = document.querySelector(".c-modal__icon--exit");
	exitIcon.addEventListener("click", closeModal);
};

export const closeModal = () => {
	document.body.removeChild(modalContainer);

	hideNav.style.visibility = "visible";
};

document.addEventListener("keyup", (e) => {
	if (e.key === "Escape") {
		closeModal();
	}
});
