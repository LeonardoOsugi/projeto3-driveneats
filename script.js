
function opcao(seletor){
    const cardapio = document.querySelector('.prato .green');


    if(cardapio !== null){
        const confirm = document.querySelector('.prato .green .chekando ');
        confirm.classList.add("none");
        cardapio.classList.remove("green");
    }

    const caixaCheckao = document.querySelector(seletor);
    caixaCheckao.classList.add("green");

    const procura = document.querySelector(`${seletor} .chekando`);
    if(procura !== null){
        procura.classList.remove("none");
    }


    return true;
}


function opcao2(seletor2){
    const cardapio = document.querySelector('.bebida .green');

    console.log(cardapio);
    if(cardapio !== null){
        const confirm = document.querySelector('.bebida .green .chekando');
        confirm.classList.add("none");
        cardapio.classList.remove("green");
    }

    const caixaCheckao = document.querySelector(seletor2);
    caixaCheckao.classList.add('green');

    const procura = document.querySelector(`${seletor2} .chekando`);
    if(procura !== null){
        procura.classList.remove("none");
    }


    return true;
}

function opcao3(seletor3){
    const cardapio = document.querySelector('.sobreamesa .green');

    console.log(cardapio);
    if(cardapio !== null){
        const confirm = document.querySelector('.sobreamesa .green .chekando');
        confirm.classList.add("none");
        cardapio.classList.remove("green");
    }

    const caixaCheckao = document.querySelector(seletor3);
    caixaCheckao.classList.add('green');

    const procura = document.querySelector(`${seletor3} .chekando`);
    if(procura !== null){
        procura.classList.remove("none");
    }


    return true;

    return true;
}