const errorStyleList = {
    color: 'red',
    borderColor: 'tomato',
    background: '#ff000027',
};
const doneStyleList = {
    color: '#bfbfbf',
    borderColor: '#bfbfbf',
    background: 'none',
};
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export {errorStyleList, doneStyleList, EMAIL_REGEXP}