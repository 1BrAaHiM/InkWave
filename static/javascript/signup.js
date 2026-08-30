document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const termsCheckbox = document.querySelector("#check");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (termsCheckbox && !termsCheckbox.checked) {
            alert("You must agree to the terms and conditions.");
            return;
        }

        const username = form.querySelector('[name="username"]').value.trim();
        const email = form.querySelector('[name="email"]').value.trim();
        const password1 = form.querySelector('[name="password1"]').value;
        const password2 = form.querySelector('[name="password2"]').value;

        if (!username || !email || !password1 || !password2) {
            alert("Please fill in all fields.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password1 !== password2) {
            alert("Passwords do not match.");
            return;
        }

        const user = {
            username: username,
            name: username,
            email: email,
            password: password1,
            favoriteGenre: "",
            profilePhoto: "",
            social: {}
        };

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("loggedIn", "true");

        alert("Account created successfully!");
        window.location.href = "index.html";
    });
});
