// Booking Form Script

document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert("Thank you for booking ArDi Creations! We will contact you soon.");

            form.reset();

        });

    }

});