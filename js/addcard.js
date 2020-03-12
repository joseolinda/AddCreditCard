// Respostas da Q1
const cardNumbers = document.querySelectorAll('#number input');
const hideNumber = document.querySelector('#show');

const toggleTypePasswordToText = function(input) {
    if ( input.type === 'password' )
        input.type = 'text';
    else
        input.type = 'password';
};

hideNumber.addEventListener('change', function () {
   for(let i = 0; i < cardNumbers.length; i++) {
       toggleTypePasswordToText(cardNumbers[i]);
   }
});