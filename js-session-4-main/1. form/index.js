const emailInput = document.getElementsByName('email')[0];

emailInput.addEventListener('blur', function(event) {
    console.log(event.target.value) // @bootcamp-upgrade.com
    const error = document.getElementById('error-email');

    if (event.target.value.includes('@bootcamp-upgrade.com')) {
        error.innerText = '';
        console.log('Contiene @bootcamp-upgrade.com')
    } else {
        error.innerText = 'Tiene que ser un email del dominio @bootcamp-upgrade.com';
        console.log('NO contiene @bootcamp-upgrade.com')
    }
});

const passwords = {
    password: '',
    verifyPassword: ''
};

function validatePasswords() {
    console.log(passwords);
    const passwordMessage = document.querySelector('#error-password');

    if (passwords.password === passwords.verifyPassword) {
        passwordMessage.innerText = 'Las contraseñas coinciden';
        passwordMessage.style.color = 'green';

    } else {
        passwordMessage.innerText = 'Las contraseñas no coinciden';
        passwordMessage.style.color = 'red';
    }
};

document
    .querySelectorAll('input[type=password]')
    .forEach(function(input) {
        console.log(input);
        input.addEventListener('input', function (event) {
            passwords[event.target.name] = event.target.value; // actualiza el objeto passwords
            validatePasswords();
        });
    })
