import '../index.html';
import "../index.css";
import {errorStyleList, doneStyleList, EMAIL_REGEXP} from './properties'
import {form, email, imgSide, errorText, buttonSending, popup, dismissButton, popupCounter} from './variables'

function defaultEmail (elem, text) {
    if (elem.value == '') {
        elem.value = 'Enter your email address';
        elem.style.color = doneStyleList.color;
        return;
    }

    if (!isEmailValid(email.value)) {
        errorEmail (elem, text)
        return;
    }
    
    doneEmail(elem)
}

function focusEmail (elem, text) {
    if (email.value == 'Enter your email address') {
        email.value = ''
    }
    email.style.color = '#232742';
    email.style.borderColor = doneStyleList.borderColor;
    email.style.background = doneStyleList.background;    
    text.hidden = true;
}

function blurEmail (elem, text) {
    defaultEmail(elem, text);
}

function doneEmail (elem) {
    elem.style.color = doneStyleList.color;
    elem.style.borderColor = doneStyleList.borderColor;
    elem.style.background = doneStyleList.background;  
}

function errorEmail (elem, text) {
    text.hidden = false;
    email.style.color = errorStyleList.color;
    email.style.borderColor = errorStyleList.borderColor;
    email.style.background = errorStyleList.background;  
}

function subscribtionPopup (elemClose, elemOpen) {
    elemClose.style.transition = '0.5s';
    elemOpen.style.transition = '0.5s';
    elemClose.style.opacity = '60';
    elemOpen.style.display = 'flex';
    elemClose.style.display = 'none';
    elemOpen.style.opacity = '0';

    setTimeout(() => {
        elemClose.style.opacity = '0';
        elemOpen.style.opacity = '100';
    }, 100)
    
    
}

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}
export {defaultEmail, focusEmail, blurEmail, doneEmail, errorEmail, subscribtionPopup, isEmailValid}