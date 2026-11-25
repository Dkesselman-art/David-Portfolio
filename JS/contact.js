// Contact form validation — shows an error under any empty or invalid field
var form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
	event.preventDefault();

	var name = document.getElementById("name").value.trim();
	var email = document.getElementById("email").value.trim();
	var message = document.getElementById("message").value.trim();
	var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	var ok = true;

	if (name === "") {
		document.getElementById("nameError").style.display = "block";
		ok = false;
	} else {
		document.getElementById("nameError").style.display = "none";
	}

	if (!emailPattern.test(email)) {
		document.getElementById("emailError").style.display = "block";
		ok = false;
	} else {
		document.getElementById("emailError").style.display = "none";
	}

	if (message === "") {
		document.getElementById("messageError").style.display = "block";
		ok = false;
	} else {
		document.getElementById("messageError").style.display = "none";
	}

	if (ok) {
		document.getElementById("thanksName").textContent = name;
		document.getElementById("success").style.display = "block";
		form.style.display = "none";
	}
});
