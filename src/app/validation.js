export const validationCard = (message, validation) => {
	const validationContainer = document.createElement("div");

	validationContainer.setAttribute(
		"class",
		`c-validation c-validation--${validation}`
	);

	const text = `<p>${message}</p>`;

	validationContainer.innerHTML = text;

	return validationContainer;
};
