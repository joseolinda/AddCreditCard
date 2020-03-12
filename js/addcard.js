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

const btnAddCard = document.querySelector('input[type="submit"].submit');

btnAddCard.addEventListener('click', function (e) {
    for( let i = 0; i < allInputs.length; i++) {
        if (verifyIsEmpty(allInputs[i])) {
            e.preventDefault()
            console.log('O formulário possui elementos vazios');
            break;
        }
    }
});

// Resposta da Q3 no final, pois facilita

// Respostas da Q4
let listOfCards = document.querySelectorAll('#card-lists .wrapper .item');

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
    listOfCards = document.querySelectorAll('#card-lists .wrapper .item');
    for( let i = 0; i < listOfCards.length; i++) {
        addEventOnListOfCards(listOfCards[i]);
    }
};
updateEventOnListOfCards();

// Resposta da Q5
const updateEventOnRemoveCardButtons = function () {
    const btnRemoveCard = document.querySelectorAll('.close');

    for (let i = 0; i < btnRemoveCard.length; i++) {
        btnRemoveCard[i].addEventListener('click', function (e) {
            const itemFather = btnRemoveCard[i].parentElement;
            if (itemFather.parentElement)
                itemFather.parentElement.removeChild(itemFather);
        })
    }
}

updateEventOnRemoveCardButtons();


// Resposta da Q3
const cardListContainer = document.querySelector("#card-lists .wrapper");

addNewCardInList = function (cardFinalNumber, cardName, cardMonth, cardYear) {
    const item = document.createElement('div');
    const logo = document.createElement('div');
    const logoIMG = document.createElement('img');
    const logoURL = 'https://brand.mastercard.com/content/dam/mccom/brandcenter/thumbnails/mastercard_circles_92px_2x.png';
    const textDetails = document.createElement('p');
    const btnRemove = document.createElement('div');

    item.className = 'item';
    item.appendChild(logo);
    item.appendChild(textDetails);
    item.appendChild(btnRemove);

    logo.appendChild(logoIMG);
    logo.className = 'logo';
    logoIMG.src = logoURL;

    let htmlDetails = '<strong>MasterCard final '+ cardFinalNumber +'</strong><br>';
    htmlDetails += '<small>'+ cardName +'</small><br/>';
    htmlDetails += '<small>Vencimento <span>'+ cardMonth +'/'+ cardYear +'</span></small><br/>'

    textDetails.innerHTML = htmlDetails;

    btnRemove.className = 'close';

    cardListContainer.appendChild(item);

    // Sempre atualizar os eventos
    updateEventOnListOfCards();
    updateEventOnRemoveCardButtons();
}

/* anexar função ao evento de submit */
const formCard = document.querySelector("form");

formCard.addEventListener('submit', function (e) {
    e.preventDefault();
    const lastNumber = document.querySelector('#number input:last-child');
    const nameOnCard = document.querySelector('#holder input');
    const month = document.querySelector('#date input:first-child');
    const year = document.querySelector('#date input:last-child');

    addNewCardInList(lastNumber.value, nameOnCard.value, month.value, year.value);

    for ( let i = 0; i < allInputs.length; i++ ) {
        allInputs[i].value = '';
    }
});