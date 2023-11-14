//import '../css/common.css';
//import '../css/03-feedback.css';
//import throttle from 'lodash/throttle';
import { saveToLS, loadFromLS } from './helpers.js';



const refs = {
    formElem: document.querySelector('.feedback-form'),
};
refs.formElem.addEventListener('input', onFormInput);

function onFormInput(e) {
    const key = e.target.name;
    const value = e.target.value;

    saveToLS(key, value);
}



function onLoad() {
    const email = loadFromLS('email');
    const message = loadFromLS('message');
    
    console.log(refs.formElem.elements);

     refs.formElem.elements.email.value = email;
     refs.formElem.elements.message.value = message;
}
 onload();