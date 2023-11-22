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
    // const email = refs.formElem.elements.email.value;
    // const message = refs.formElem.elements.message.value;

    // const formData = {
    //     ...loadFromLS('feedback-form-state'),
    //     email,
    //     message
    // };


    const formData = loadFromLS('feedback-form-state') || {};

    if (e.target.name === 'email') {
        formData.email = e.target.value;
        formData.message = ''; // Очистити значення message при введенні в поле email
    } else if (e.target.name === 'message') {
        formData.message = e.target.value;
        formData.email = ''; // Очистити значення email при введенні в поле message
    }



   
        // const formData = {
        //     ...loadFromLS('feedback-form-state'),
        //     [e.target.name]: e.target.value,
        // };



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

    const formData = loadFromLS('feedback-form-state') || {};

    refs.formElem.elements.email.value = formData.email || "";
    refs.formElem.elements.message.value = formData.message || "";
     
      
     
}





