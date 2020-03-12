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

// Resposta da Q3

// Respostas da Q4
const listOfCards = document.querySelectorAll('#card-lists .wrapper .item');

const selectItem = function (el) {
    el.classList.add('active', 'margin');
    el.querySelector('.close').classList.add('show');
};

const deselectItem = function (el) {
    if(el.classList.contains('active')) {
        el.classList.remove('active', 'margin');
        el.querySelector('.close').classList.remove('show');
    } else {
        return undefined;
    }
};

const addEventOnListOfCards = function(el) {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        let sibling = el.parentElement ? el.parentElement.firstElementChild : false;
        while (sibling) {
            if (sibling !== el) {
                deselectItem(sibling);
            }
            sibling = sibling.nextElementSibling;
        }
        selectItem(el);
    });
};

const updateEventOnListOfCards = function () {
    for( let i = 0; i < listOfCards.length; i++) {
        addEventOnListOfCards(listOfCards[i]);
    }
};
updateEventOnListOfCards();

// Resposta da Q5
const btnRemoveCard = document.querySelectorAll('.close');

const updateEventOnRemoveCardButtons = function () {
    for (let i = 0; i < btnRemoveCard.length; i++) {
        btnRemoveCard[i].addEventListener('click', function (e) {
            const itemFather = btnRemoveCard[i].parentElement;
            itemFather.parentElement.removeChild(itemFather);
        })
    }
}

updateEventOnRemoveCardButtons();

