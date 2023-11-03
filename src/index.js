import './index.html';
import "./index.css";

import {form, email, rightSide, errorText, buttonSending, successfulSubscription, dismissButton} from './modules/variables'
import {focusEmail, blurEmail, subscribtionWindow} from './modules/functions'

email.onfocus = function (e) {
    focusEmail(e, errorText)
}

email.onblur = function () {
    blurEmail(email, errorText)
}

buttonSending.onclick = function (e) {
    e.preventDefault();
    
    if(!email.value.includes('@')) {
        return;
    }
    enteredEmail.firstChild.data = email.value;
    subscribtionWindow(form, successfulSubscription);
}

buttonSending.onmouseover = function(e) {
    rightSide.style.borderRadius = 0;
    rightSide.style.transition = '0.5s'
}

buttonSending.onmouseout = function(e) {
    rightSide.style.borderRadius = '1em';
}

dismissButton.onclick = function () {
    subscribtionWindow(successfulSubscription, form);
    email.value = 'Enter your email address';
}