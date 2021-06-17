// input variables
const firstName = $("#support__firstName");
const lastName = $("#support__lastName");
const email = $("#support__email");
const password = $("#support__password");
const form = $("#support__form");
const submitBtn = $("#support__btn");

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

class Form {
	constructor(firstName, lastName, email, password) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
	}

	submitForm(e) {
		e.preventDefault();

		if (firstName.val() === "" || firstName.val() === null) {
			errorFirstName.show();
			firstName.addClass("error");
			iconErrorFirstName.show();
		} else if (lastName.val() === "" || lastName.val() === null) {
			errorLastName.show();
			lastName.addClass("error");
			iconErrorLastName.show();
		} else if (email.val() === "" || email.val() === null) {
			errorEmail.show();
			email.addClass("error");
			iconErrorEmail.show();
		} else if (password.val() === "" || password.val() === null) {
			errorPassword.show();
			password.addClass("error");
			iconErrorPassword.show();
		}

		if (
			firstName.val() &&
			lastName.val() &&
			email.val() &&
			password.val()
		) {
			modal.css("display", "block");

			setTimeout(() => {
				modal.css("display", "none");

				location.reload(true);
			}, 2000);
		}
	}
}

const supportForm = new Form(firstName, lastName, email, password);
form.on("submit", supportForm.submitForm);

errorFirstName.on("mouseenter", () => {
	console.log("HELOS");
});

errorFirstName.on("mouseleave", () => {
	console.log("MOuse leave");
});

export default supportForm;

/// HIDE ERRORS
firstName.change(() => {
	hideErrors(firstName, errorFirstName, iconErrorFirstName);
});

lastName.change(() => {
	hideErrors(lastName, errorLastName, iconErrorLastName);
});

email.change(() => {
	hideErrors(email, errorEmail, iconErrorEmail);
});

password.change(() => {
	hideErrors(password, errorPassword, iconErrorPassword);
});

const hideErrors = (main, message, icon) => {
	main.removeClass("error");
	message.hide();
	icon.hide();
};
