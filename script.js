
function opcao(seletor){
    const cardapio = document.querySelector('.lateral-menu .green');

    if(cardapio !== null){
        cardapio.classList.remove("green");
    }

    seletor.classList.add("green");
}

function opcao2(seletor){
    const cardapio2 = document.querySelector('.lateral-menu2 .green');

    if(cardapio2 !== null){
        cardapio2.classList.remove("green");
    }

    seletor.classList.add("green");
}

function opcao3(seletor){
    const cardapio3 = document.querySelector('.lateral-menu3 .green');

    if(cardapio3 !== null){
        cardapio3.classList.remove("green");
    }

    seletor.classList.add("green");
}