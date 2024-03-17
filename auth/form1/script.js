document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        console.log({
            mailorphone: document.getElementById('mailorphone').value,
            city: document.getElementById('city').value,
            newsletter: document.getElementById('newsletter').checked
        });
    }
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^\+?\d{11}$/;
    return re.test(phone);
}

document.getElementById('mailorphone').addEventListener('input', () => {
    document.getElementById('mailorphoneerror').innerHTML = '';
});

document.getElementById('city').addEventListener('input', () => {
    document.getElementById('cityerror').innerHTML = '';
});

function validateToCirrilyc(text) {
    const re = /^[а-яА-Я]+$/;
    return re.test(text);
}

function validateForm() {
    const mailorphone = document.getElementById('mailorphone').value;
    const city = document.getElementById('city').value;
    const newsletter = document.getElementById('newsletter').checked;
    const mailorphoneError = document.getElementById('mailorphoneerror');
    const cityError = document.getElementById('cityerror');

    const errors = [];


    if (!validateEmail(mailorphone) && !validatePhone(mailorphone)) {
        mailorphoneError.innerHTML = 'Введите корректный email или телефон';
        errors.push('Введите корректный email или телефон');
    }

    if (!validateToCirrilyc(city)) {
        cityError.innerHTML = 'Введите корректный город';
        errors.push('Введите корректный город');
    }

    if (errors.length > 0) {
        return false;
    }

    // if (newsletter) {
    //     alert('Вы подписались на рассылку');
    // }

    return true;
}

