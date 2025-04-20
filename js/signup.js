const form = document.getElementById("form");
const email = document.getElementById("email");
const err = document.getElementById("err");
const err_r = document.getElementById("error");


form.addEventListener('submit', function (e) {
    e.preventDefault()
    const err_rValue = email.value;
    const emaiPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
 

    if (!emaiPattern.test(err_rValue)) {
        email.classList.add('error');
        err.style.display = 'inline';
    } else {
        window.location.href = "success.html"

    }


})

