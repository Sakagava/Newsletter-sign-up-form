import '../index.html';

const form = document.getElementsByClassName('form')[0];
const email = document.getElementsByClassName('inputEmail')[0];
const imgSide = document.getElementsByClassName('imgSide')[0].firstElementChild;
const errorText = document.getElementsByClassName('textOutEmailInput')[0].lastElementChild;
const buttonSending = newsletter.lastElementChild;
const successfulSubscription = document.getElementsByClassName('successfulSubscription')[0];
const dismissButton = successfulSubscription.lastElementChild;

export {form, email, imgSide, errorText, buttonSending, successfulSubscription, dismissButton}
