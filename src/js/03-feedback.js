
import localStorageApi from './localstorage';
// import throttle from './lodash.throttle';

// Робимо посилання на всю форму
const formContactElement = document.querySelector(`.feedback-form`);

// Використовуємо константу незмінного значення для подальшого використання
const STORAGE_KEY = `feedback-form-state`;



// Виносимо змінну як масив, куди будемо зберігати введені дані
const userData = {};

// Функція обробки введених даних
onFormElementInput = event => {
    // Іменуємо змінні для зручності
    const target = event.target;
    const formElementValue = target.value;
    const formElementName = target.name;
    // Ім'я елемента, куди користувач ввів дані, буде дорівнювати значенню цих даних
    userData[formElementName] = formElementValue;
    // Зберігаємо дані в local storage
    localStorageApi.save(STORAGE_KEY, userData);
};


// const formFill = () => {
//     const dataFromLocalStorage = localStorageApi.load(STORAGE_KEY);
//     const formEl = formContactElement;
//     for (const key in dataFromLocalStorage) {
//         if (dataFromLocalStorage.hasOwnproperty(key)) {
//             formEl[key].value = dataFromLocalStorage[key];
//         }
//     }
// };

// formFill();

// Функція обробки submit'a
const onFormSubmit = event => {
    // Запобігаємо перезавантаженню сторінки
    event.preventDefault();
    // Виводимо в консоль об'єкт з полями email, message та їхніми поточними значеннями.
    console.log(userData);
    // Скидаємо значення всіх полів після submit'a
    event.currentTarget.reset();
    // Очищаємо localstorage після submit'a
    // localStorageApi.removeItem(STORAGE_KEY, userData);
}

// Функція для того, щоб дістати значення всіх полів з local storage при перезавантаженні сторінки
function onLoadUserData() {
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) {
        console.log(savedMessage);
    }
};

// Назначаємо слухачів на події
formContactElement.addEventListener(`input`, onFormElementInput);
formContactElement.addEventListener(`submit`, onFormSubmit);