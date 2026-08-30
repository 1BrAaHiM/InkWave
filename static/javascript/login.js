document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (!form) return;
    // Authentication is handled by Django. Do not prevent the form submission.
});

function send_pass() {
    alert("Password reset is not configured on the Django server yet. Please contact the site administrator.");
}
