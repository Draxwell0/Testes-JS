window.document.querySelector('button#adicionar').addEventListener('click', adicionar);
window.document.querySelector('button#calcular').addEventListener('click', calcular);


let numeros = [];
let soma;
let mai;
let men;

let feed = document.getElementById('feed');
let resposta = document.getElementById('resposta');
let lista = document.getElementById('lista');

lista.setAttribute('style', 'padding: 2px;')

function adicionar(){

   let dado = Number(document.getElementById('dado').value);

    //VALIDAÇÃO DE RESPOSTAS

   if(dado.length == 0 || dado <= 0 || dado > 100){window.alert('Insira um valor válido!'); return;}
   else if(numeros.indexOf(dado) != -1){window.alert('Este valor já foi inserido!'); return;}

    //VALIDAÇÃO DA CAIXA DE FEED

   if(numeros.length == 0){
    feed.setAttribute('style', 'width: 10vw; background-color: white; color: black; box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.61); padding: 5px; text-align: center;');
   }

   
    //INICIO DOS CÁLCULOS

   numeros.push(dado);

   lista.innerHTML += `${dado} adicionado! <br>`;

}

function calcular(){

   //VALIDAÇÃO DE RESPOSTAS

   if(numeros.length == 0){window.alert('Insira algum valor antes!'); return;}

   //INICIO DOS CÁLCULOS
   numeros.sort();

   resposta.innerHTML = `<br> Foram adicionados no total ${numeros.length} números.`;

   equação();

   resposta.innerHTML += `<br> O maior valor inserido foi ${mai}.`;

   resposta.innerHTML += `<br> O menor valor inserido foi ${men}.`;

   resposta.innerHTML += `<br> A soma dos valores inseridos é de ${soma}.`;

   resposta.innerHTML += `<br> A média dos valores inseridos é de ${soma / numeros.length}.`;


}

function equação(){

   mai = 100;
   men = 1;
   soma = 0;
   let i = 0;

   while(i < numeros.length){
      
      soma += Number(numeros[i]);
      i++;

   }

   while(numeros.indexOf(mai) == -1){mai--;}
   while(numeros.indexOf(men) == -1){men++;}

}


