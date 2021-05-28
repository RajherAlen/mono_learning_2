export function createVideoJump() {
	const modalContainer = document.createElement("div");
	modalContainer.setAttribute("class", "c-modal");

	let newChild = `
        <iframe
            class="c-video c-video--jump"
            src="https://www.youtube.com/embed/hY6duUKQsS8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        ></iframe>
        
        <i class="u-icon u-icon--base u-icon--exit c-modal__icon--exit"></i>
    `;

	modalContainer.innerHTML = newChild;

	return modalContainer;
}
