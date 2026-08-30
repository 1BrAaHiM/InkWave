document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const termsCheckbox = document.querySelector("#check");
    if (!form) return;

    form.addEventListener("submit", function (event) {
        if (termsCheckbox && !termsCheckbox.checked) {
            event.preventDefault();
            alert("You must agree to the terms and conditions.");
        }
    });
});
