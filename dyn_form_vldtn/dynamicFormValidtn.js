const form = document.querySelector('#login-form');
const password_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

let username = form.elements.namedItem('username');
let password = form.elements.namedItem('password');

username.addEventListener('input', validate);
password.addEventListener('input', validate);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('SUBMITTED');
});

function validate(e) {
    let target = e.target;

    if(target.name == "password") {
        if(password_reg.test(target.value)) {
            target.classList.add('valid');
            target.classList.remove('invalid');
        } else {
            target.classList.add('invalid');
            target.classList.remove('valid');
        }
    }

    if(target.name == "username") {
        if(target.value.length >= 4) {
            target.classList.add('valid');
            target.classList.remove('invalid');
        } else {
            target.classList.add('invalid');
            target.classList.remove('valid');
        }
    }
}