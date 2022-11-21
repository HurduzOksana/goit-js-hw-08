

const refs = {
    form: document.querySelector(`.feedback-form`),
    textarea: document.querySelector(`.js-feedback-form textarea`),
    // input: document.querySelector('.js-feedback-form input'),
};

refs.form.addEventListener(`submit`, onFormSubmit);
refs.textarea.addEventListener(`input`, onTextAreaInput);

function onFormSubmit(evt) {

};

function onTextAreaInput(evt) {
    const value = evt.currentTarget.value;
    
};


function populateMessageOutput(evt) {

};

