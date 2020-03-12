// Respostas da Q1
const cardNumbers = document.querySelectorAll('#number input');
const hideNumber = document.querySelector('#show');

const toggleTypePasswordToText = function(input) {
    if ( input.type === 'password' )
        input.type = 'number';
    else
        input.type = 'password';
};

hideNumber.addEventListener('change', function () {
   for(let i = 0; i < cardNumbers.length; i++) {
       toggleTypePasswordToText(cardNumbers[i]);
   }
});

// Resposta da Q2
const verifyIsEmpty = function (input) {
    return input.value === '' || input.value === undefined;
};

const allInputs = document.querySelectorAll(
    'input:not([type=submit]):not([type=checkbox]):not([type=radio])'
            );

const btnAdicionar = document.querySelector('input[type="submit"].submit');

btnAdicionar.addEventListener('click', function (e) {
    for( let i = 0; i < allInputs.length; i++) {
        if (verifyIsEmpty(allInputs[i])) {
            e.preventDefault()
            console.log('O formulário possui elementos vazios');
            break;
        }
    }
});