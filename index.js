document.getElementById("togglePassword").addEventListener("click", function() {
    let passInput = document.getElementById("pass");
    if (passInput.type === "password") {
        passInput.type = "text";
        this.classList.remove("bi-eye");
        this.classList.add("bi-eye-slash"); // Ganti ikon ke "mata tertutup"
    } else {
        passInput.type = "password";
        this.classList.remove("bi-eye-slash");
        this.classList.add("bi-eye"); // Ganti ikon ke "mata terbuka"
    }
});

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
