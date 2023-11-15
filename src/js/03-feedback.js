import '../css/common.css';
import '../css/03-feedback.css';
import throttle from 'lodash/throttle';
import { saveToLS, loadFromLS } from './helpers.js';



const refs = {
    formElem: document.querySelector('.feedback-form'),
};


refs.formElem.addEventListener('input', onFormInput);
refs.formElem.addEventListener('submit', onFormSubmit);
document.addEventListener('DOMContentLoaded', onContentLoaded);  


function onFormInput(e) {
    const email = refs.formElem.elements.email.value;
    const message = refs.formElem.elements.message.value;

    const formData = {
        email,
        message
    };

    saveToLS('feedback-form-state', formData);
}

function onFormSubmit(e) {
    e.preventDefault();

    const email = refs.formElem.elements.email.value;
    const message = refs.formElem.elements.message.value;

    if (email && message) {
        const formData = {
            email,
            message
        };

        console.log(formData);
        e.target.reset();
        saveToLS('feedback-form-state', {});
    } else {
        alert('Please fill in all fields before submitting.');
    }
}

function onContentLoaded() {
    const formData = loadFromLS('feedback-form-state');

    if (formData) {
        refs.formElem.elements.email.value = formData.email || "email";
        refs.formElem.elements.message.value = formData.message || "input text";
    }
}





