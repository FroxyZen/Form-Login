document.addEventListener("DOMContentLoaded", function () {
    const formContainer = document.querySelector('.form-container');
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');

    if (registerLink && loginLink && formContainer) {
        registerLink.addEventListener('click', function (event) {
            event.preventDefault(); // Hindari reload halaman
            formContainer.classList.add('active');
        });

        loginLink.addEventListener('click', function (event) {
            event.preventDefault(); // Hindari reload halaman
            formContainer.classList.remove('active');
        });
    } else {
        console.error("Elemen tidak ditemukan! Pastikan HTML sudah benar.");
    }
});
