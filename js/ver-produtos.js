import { carrinho } from "../js/cirrinhodeprodutos.js";

console.log(carrinho)
import { conectaApi } from "./conectaApi.js";

 const produto = document.querySelector("[data-card]");
  
 function criaProduto(nome, img, descricao, preco){
    const produtos = document.createElement("card");
    produtos.className = "card"
    produtos.innerHTML = `
    <div class="circle"></div>
    <div class="content">
      <h2 class="nomedoproduto">${nome}</h2>
      <h3>${descricao}</h3>
      <p class="valordoproduto">${preco}</p>
      <button type="button" class="addProductToCart">compra</button>
    </div>
    <img class="imagemdoproduto" src="${img}" alt="">
    `


    
  
    const botaoaddcarinho = document.getElementsByClassName("addProductToCart");
    for (var i = 0; i < botaoaddcarinho.length; i++){
        botaoaddcarinho[i].addEventListener("click", carrinho.addcarinho);
        
    }
    return produtos;

    
 }

 async function listaDeProduto() {
    const listaProduto = await conectaApi.listaDeProdutos();
    listaProduto.forEach(elemento => produto.appendChild(
        criaProduto (elemento.nome, elemento.img, elemento.descricao, elemento.preco)))
        
    };

 listaDeProduto();
