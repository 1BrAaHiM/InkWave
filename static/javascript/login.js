document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = form.querySelector('[name="username"]').value.trim();
        const password = form.querySelector('[name="password"]').value;

        if (!username || !password) {
            alert("Please enter your username and password.");
            return;
        }

        const savedUser = JSON.parse(localStorage.getItem("user") || "null");

        if (!savedUser || savedUser.username !== username || savedUser.password !== password) {
            alert("Invalid username or password. Please sign up first.");
            return;
        }

        localStorage.setItem("loggedIn", "true");
        alert("Login successful!");
        window.location.href = "index.html";
    });
});

function send_pass() {
    alert("Password reset is not available in the static GitHub Pages version.");
}
