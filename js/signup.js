const form = document.getElementById("form");
const email = document.getElementById("email");
const err = document.getElementById("err");
const err_r = document.getElementById("error");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const emailValue = email.value.trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(emailValue)) {
        email.classList.add('error');
        err.style.display = 'inline';
    } else {
        localStorage.setItem('userEmail', emailValue);
        window.location.href = "success.html";
    }
});
