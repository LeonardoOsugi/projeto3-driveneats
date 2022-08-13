function opcao(seletor){
    const cardapio = document.querySelector(".content .green");

    if(cardapio !== null){
        cardapio.classList.remove("green");
    }

    seletor.classList.add("green");
}