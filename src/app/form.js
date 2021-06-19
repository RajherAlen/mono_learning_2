import { inputIsNotValid, hideErrors } from "./formErrors";

// input variables
const firstName = $("#support__firstName");
const lastName = $("#support__lastName");
const email = $("#support__email");
const password = $("#support__password");
const form = $("#support__form");
// const submitBtn = $("#support__btn");

// Error messages
const errorFirstName = $("#error__firstName").hide();
const errorLastName = $("#error__lastName").hide();
const errorEmail = $("#error__email").hide();
const errorPassword = $("#error__password").hide();

// Error icons
const iconErrorFirstName = $(".icon-error__firstName").hide();
const iconErrorLastName = $(".icon-error__lastName").hide();
const iconErrorEmail = $(".icon-error__email").hide();
const iconErrorPassword = $(".icon-error__password").hide();

// Loader
const modal = $(".c-modal").hide();

export const submitForm = (e) => {
	e.preventDefault();

	inputIsNotValid(firstName, errorFirstName, iconErrorFirstName);
	inputIsNotValid(lastName, errorLastName, iconErrorLastName);
	inputIsNotValid(email, errorEmail, iconErrorEmail);
	inputIsNotValid(password, errorPassword, iconErrorPassword);

	if (firstName.val() && lastName.val() && email.val() && password.val()) {
		modal.css("display", "block");

		setTimeout(() => {
			modal.css("display", "none");

			location.reload(true);
		}, 2000);
	}
};

// on submiting a form
form.on("submit", submitForm);

/// HIDE ERRORS
firstName.on("input", () => {
	hideErrors(firstName, errorFirstName, iconErrorFirstName);
});

lastName.on("input", () => {
	hideErrors(lastName, errorLastName, iconErrorLastName);
});

email.on("input", () => {
	hideErrors(email, errorEmail, iconErrorEmail);
});

password.on("input", () => {
	hideErrors(password, errorPassword, iconErrorPassword);
});
