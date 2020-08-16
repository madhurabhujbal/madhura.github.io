const regForm = document.querySelector('form#register');
const errors_el = document.querySelector('form#register .errors');

regForm.addEventListener('submit', validateRegisterForm);

//Prevents form submission before validation
function validateRegisterForm(e) {
    e.preventDefault();

    const firstname = document.querySelector('#register #firstname');
    const surname = document.querySelector('#register #surname');
    const email = document.querySelector('#register #email');
    const password = document.querySelector('#register #password');

    let errors = [];

    const email_reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const password_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if(firstname.value == '') {
        errors.push({text: "first name", el: firstname});
    }

    if(surname.value == '') {
        errors.push({text: "sur name", el: surname});
    }

    if(email.value == '') {
        errors.push({text: "email", el: email});
    } else if(!email_reg.test(email.value)) {
        errors.push({text: "email", el: email});
    }

    if(password.value == '') {
        errors.push({text: "password", el: password});
    } else if(!password_reg.test(password.value)) {
        errors.push({text: "password", el: password});
    }

    //Gives error if only some fields of form are filled
    if(errors.length > 0) {
        handle_errors(errors);
        return false;
    }

    alert('SUBMITTED');
    return true;
}

//below function needs explanation
function handle_errors(errs) {
    // clear old errors
    if( errors_el.hasChildNodes() ) {
        let old_error = errors_el.lastElementChild;
        errors_el.removeChild(old_error);
    }
    let str = "You have error with the following fields: ";
    errs.map((er) => {
        er.el.classList.add('error');
        str += er.text + ", ";
    });

    //Focuses only on those fields which are causing error
    errs[0].el.focus();

    //Display error with error fields
    let error_el = document.createElement('div');
    error_el.classList.add('error');
    error_el.innerText = str;

    error_el.addEventListener('click', function() {
        errors_el.removeChild(error_el);
    });

    errors_el.appendChild(error_el);
}