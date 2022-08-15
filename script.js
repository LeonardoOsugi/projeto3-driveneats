let seletor_1 = undefined;
let seletor_2 = undefined;
let seletor_3 = undefined;
let nome_1;
let nome_2;
let nome_3;
let valorTotal;


const tacada =  document.querySelector('.ultima-parada .pedido');
tacada.disabled = true;

function enviar(){
    if(seletor_1 !== undefined && seletor_2 !== undefined && seletor_3 !== undefined){
        tacada.disabled = false;
        tacada.innerHTML = "Fechar pedido";
        tacada.classList.add('background-botao');
    } 
}

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

    
    const moneyPrato = document.querySelector(`${seletor} .valor-prato`);
    seletor_1 = moneyPrato.innerHTML;

    const nomePrato = document.querySelector(`${seletor} .nome-prato`);
    nome_1 = nomePrato.innerHTML;

    enviar();
}


function opcao2(seletor2){
    seletor_2 = seletor2;
    const cardapio = document.querySelector('.bebida .green');

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

    const moneyBerita = document.querySelector(`${seletor2} .valor-berita`);
    seletor_2 = moneyBerita.innerHTML;

    const nomeBerita = document.querySelector(`${seletor2} .nome-bebida`);
    nome_2 = nomeBerita.innerHTML;

    enviar();
}

function opcao3(seletor3){
    seletor_3 = seletor3;
    const cardapio = document.querySelector('.sobreamesa .green');

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
    
    const moneySobremesa = document.querySelector(`${seletor3} .valor-sobremesa`);
    seletor_3 = moneySobremesa.innerHTML;

    const nomeSobremesa = document.querySelector(`${seletor3} .nome-sobremesa`);
    nome_3 = nomeSobremesa.innerHTML;

    enviar();

}

function enviarZap(){
    valorTotal = (Number(seletor_1.replace(',', '.'))) + (Number(seletor_2.replace(',', '.'))) + (Number(seletor_3.replace(',', '.')));
    const variavel = `Olá, gostaria de fazer o pedido:
    - Prato: ${nome_1}
    - Bebida: ${nome_2}
    - Sobremesa: ${nome_3}
    Total: R$ ${(valorTotal.toFixed(2))}`
    

        let zipzop = encodeURIComponent(variavel);

        window.open(`https://wa.me/5541998096214?text=${zipzop}`);
}