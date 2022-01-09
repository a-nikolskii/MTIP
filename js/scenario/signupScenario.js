import signupUI from '/js/config/singupUI.js';
import {validate, comparePasswords} from '/js/utils/validate.js';
import {showInputError, removeInputError} from '/js/views/form.js';
import {saveToSessionStorage} from "/js/utils/storage.js";

const {form, inputName, inputEmail, inputPassword, inputConfirmPassword, signupBtn, cancelBtn} = signupUI;
const inputs = [inputName, inputEmail, inputPassword, inputConfirmPassword];

// Events
form.addEventListener('submit', e => {
    e.preventDefault();
    onSubmit();
})

inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)));

// Handlers
function onSubmit() {
    const credentials = {};
    const isFormValid = inputs.every(el => {
        credentials[el.dataset.required] = el.value;
        let isInputValid = validate(el);
        if (el === inputConfirmPassword) {
            isInputValid = isInputValid && comparePasswords(el.value, inputPassword.value)
        }
        if (!isInputValid){
            showInputError(el)
        }
        return isInputValid;
    })


    if(!isFormValid) return;
    saveToSessionStorage(credentials, 'credentials');

    window.location.href = "/html/credentials.html";
}

