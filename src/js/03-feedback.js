import '../css/common.css';
import '../css/03-feedback.css';
import throttle from 'lodash/throttle';
import { saveToLS, loadFromLS } from './helpers.js';



const refs = {
    formElem: document.querySelector('.feedback-form'),
};
refs.formElem.addEventListener('input', onFormInput);
refs.formElem.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
    const key = e.target.name;
    const value = e.target.value;

    saveToLS(key, value);
}
function onFormSubmit(e) {
    e.preventDefault();

    const email = refs.formElem.elements.email.value;
    const message = refs.formElem.elements.message.value;
    const obj = {
        email,
        message
    };

  saveToLS('feedback-form-state', {
        email,
        message
    });

    console.log(obj);
    e.target.reset();
    
    // localStorage.removeItem('email');
    // localStorage.removeItem('message');
}
 
function onContentLoaded() {
     const email = loadFromLS('email');
     const message = loadFromLS('message');
    // console.log(refs.formElem.elements);

    const formData = loadFromLS('feedback-form-state');

    if (formData) {
        refs.formElem.elements.email.value = email || "email";
        refs.formElem.elements.message.value = message || "input text";
    }
}
document.addEventListener('DOMContentLoaded', onContentLoaded);  


