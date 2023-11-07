import '../index.html';

const main = document.body.firstElementChild;
const form = document.getElementsByClassName('form')[0];
const email = document.getElementsByClassName('inputEmail')[0];
const imgSide = document.getElementsByClassName('form_imgSide')[0].firstElementChild;
const errorText = document.getElementsByClassName('textOutEmailInput')[0].lastElementChild;
const buttonSending = newsletter.lastElementChild;
const popup = document.getElementsByClassName('popup')[0];
const dismissButton = popup.lastElementChild;
let popupCounter = 0;

export {form, email, imgSide, errorText, buttonSending, popup, dismissButton, main, popupCounter}
