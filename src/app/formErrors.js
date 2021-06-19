export const inputIsNotValid = (
	firstName,
	errorFirstName,
	iconErrorFirstName
) => {
	if (firstName.val() === "" || firstName.val() === null) {
		showError(firstName, errorFirstName, iconErrorFirstName);
	} else {
		return true;
	}
};

export const hideErrors = (main, message, icon) => {
	main.removeClass("error");
	message.hide();
	icon.hide();
};

const showError = (main, message, icon) => {
	main.addClass("error");
	message.show();
	icon.show();
};
