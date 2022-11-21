import throttle from 'lodash.throttle';
import localStorageApi from './localstorage';

const DATA_KEY = `feedback-form-state`;
const contactFormEl = document.querySelector(`.feedback-form`);
const userData = {};

const fillFormFields = () => {
    const userDataFromLS = localStorageApi.load(DATA_KEY);


    const formElements = contactFormEl.elements;

    for (const key in userDataFromLS) {
        if (userDataFromLS.hasOwnProperty(key)) {
            formElements[key].value = userDataFromLS[key];
        }
    }
};

const onFormElChange = event => {
    const target = event.target;
    const formElValue = target.value;
    const formElName = target.name;
    userData[formElName] = formElValue;
    localStorageApi.save(DATA_KEY, userData);
    
    
};


const onContactFormSubmit = event => {
    event.preventDefault();
    localStorageApi.remove(DATA_KEY);
    event.currentTarget.reset();
    console.log(userData);
};

contactFormEl.addEventListener(`input`, throttle(onFormElChange, 500));
contactFormEl.addEventListener(`submit`, onContactFormSubmit);

fillFormFields();
