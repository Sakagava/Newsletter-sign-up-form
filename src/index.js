import './index.html';
import "./index.css";

import {form, email, imgSide, errorText, buttonSending, successfulSubscription, dismissButton} from './modules/variables'
import {focusEmail, blurEmail, subscribtionWindow, isEmailValid} from './modules/functions'

email.onfocus = function (e) {
    focusEmail(e, errorText)
}

email.onblur = function () {
    blurEmail(email, errorText)
}

buttonSending.onclick = function (e) {
    e.preventDefault();
    
    if(!isEmailValid(email.value)) {
        return;
    }
    enteredEmail.firstChild.data = email.value;
    subscribtionWindow(form, successfulSubscription);
}

buttonSending.onmouseover = function(e) {
    imgSide.style.borderRadius = 0;
    imgSide.style.transition = '0.5s'
}

buttonSending.onmouseout = function(e) {
    imgSide.style.borderRadius = '2vh';
}

dismissButton.onclick = function () {
    subscribtionWindow(successfulSubscription, form);
    email.value = 'Enter your email address';
}