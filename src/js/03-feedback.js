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

      if (email && message) {
    const formData = {
        email,
        message
    };
      console.log(formData);
      e.target.reset();

  saveToLS('feedback-form-state', formData);
  localStorage.removeItem('feedback-form-state');
  
      }else{
        alert('Please fill in all fields before submitting.');
    }

}
 
function onContentLoaded() {
  
    const formData = loadFromLS('feedback-form-state');

    if (formData) {
        refs.formElem.elements.email.value = email || "email";
        refs.formElem.elements.message.value = message || "input text";
    }
}
document.addEventListener('DOMContentLoaded', onContentLoaded);  


