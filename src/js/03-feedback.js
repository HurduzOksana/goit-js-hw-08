
import localStorageApi from './localstorage';

// Робимо доступ до форми
const formContactElement = document.querySelector(`.feedback-form`);

const userData = {};

const formFill = () => {
    const dataFromLocalStorage = localStorageApi.load(`feedback-form-state`);
    // Перевірка: якщо undefined, то нічого не робимо
    if (dataFromLocalStorage === undefined) {
        return;
    }
    const formEl = formContactElement;
    for (const key in dataFromLocalStorage) {
        if (dataFromLocalStorage.hasOwnproperty(key)) {
            formEl[key].value = dataFromLocalStorage[key];
        }
    }
};

// Описуємо функцію-обробник

onFormElementChange = event => {
    // Виносимо цільовий елемент
    const target = event.target;
    // Доступ до значення елемента
    const formElementValue = target.value;
    // Доступ до імені елемента
    const formElementName = target.name;

    userData[formElementName] = formElementValue;
    // Зберігаємо дані в local storage
    localStorageApi.save(`feedback-form-state`, userData);
};

const onFormSubmit = event => {
    // Запобігаємо перезавантаженню
    event.preventDefault();
    localStorageApi.remove(`feedback-form-state`);
    // Чистимо local storage від даних після сабміта
    event.currentTarget.reset();
}


formContactElement.addEventListener(`change`, onFormElementChange);
formContactElement.addEventListener(`submit`, onFormSubmit);

formFill();