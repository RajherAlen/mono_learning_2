export function createSearch() {
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

	modalContainer.innerHTML = newChild;

	return modalContainer;
}
