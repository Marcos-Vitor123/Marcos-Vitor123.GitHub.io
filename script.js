let idade = document.querySelector('#idade');
console.log(idade);

let data = new Date();
let dia = String(data. getDate()). padStart(2, '0');
let mes = String(data. getMonth() + 1). padStart(2, '0');
let ano = data. getFullYear();
//dataAtual = dia + '/' + mes + '/' + ano;
//console.log(dataAtual);

let idadeNasc = '04/02/1989';
let [diaNasc, mesNasc, anoNasc] = idadeNasc.split('/');
console.log(diaNasc);

let idadeResult = ano - anoNasc;
console.log(idadeResult);

function atualizarIdade(){
    idade.innerHTML = `Olá! Todos bem? Como vocês já sabem, sou o <strong>Marcos Vitor</strong>. Tenho ${idadeResult} anos, nascido em 04 de fevereiro de 1989. Atualmente faço residência em Cascavel - PR. E minha cidade natal é Paranhos - MS.`
}
atualizarIdade();
