import { conectaApi } from "./conectaApi.js";


if (document.readyState == 'loading') {
   document.addEventListener('DOMContentLoaded', ready)
 } else {
   ready()
 }


 function ready() {
   // botao de remover produto

 const botaoremove = document.getElementsByClassName("remove-product-button");
 for ( var i = 0; i < botaoremove.length; i++){
    botaoremove[i].addEventListener("click", removeprodutos );

    }

    const quantositem = document.getElementsByClassName("product-qtd-input");
    for (var i = 0; i < quantositem.length; i++){
        quantositem[i].addEventListener("change", updateTotal);

    }


    const botaoaddcarinho = document.getElementsByClassName("addProductToCart");
    for (var i = 0; i < botaoaddcarinho.length; i++){
        botaoaddcarinho[i].addEventListener("click", addcarinho);
        
    }
 }

 

 function removeprodutos (evento){
    evento.target.parentElement.parentElement.remove();

    updateTotal()
 }





function updateTotal () {

 let totalProdutos = 0

 const produtos = document.getElementsByClassName("cart-product");

 for (var i = 0; i < produtos.length; i++){
     
    const valordpproduto = produtos[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")
    const quantosprodutos = produtos[i].getElementsByClassName("product-qtd-input")[0].value
    
    totalProdutos += valordpproduto * quantosprodutos
 }

 totalProdutos = totalProdutos.toFixed(2)
 totalProdutos = totalProdutos.replace(".", ",")
 document.querySelector(".cart-total-container .cart-product-price").innerText = "R$" + totalProdutos;



}



   function addcarinho(evento){
      const add = evento.target
      const produtos = add.parentElement.parentElement
      const produtoimg = produtos.getElementsByClassName("imagemdoproduto")[0].src
      const produtonome = produtos.getElementsByClassName("nomedoproduto")[0].innerText
      const produtovalor = produtos.getElementsByClassName("cart-product-price")[0].innerText
     let produtonocarrinho = document.createElement("tr");
     produtonocarrinho.classList.add("cart-product")
     
     produtonocarrinho.innerHTML = `
     <td class="product-identification">
          <img src="${produtoimg}" alt="${produtonome}" class="cart-product-image">
          <strong class="cart-product-title">${produtonome}</strong>
        </td>
        <td>
          <span class="cart-product-price">${produtovalor}</span>
        </td>
        <td>
          <input type="number" value="1" min="0" class="product-qtd-input">
          <button type="button" class="remove-product-button">Remover</button>
        </td>
     `
  
     const carrinhoadd = document.querySelector("tbody");
     carrinhoadd.append(produtonocarrinho)
      
      updateTotal();


     produtonocarrinho.getElementsByClassName("product-qtd-input")[0].addEventListener("chagen", updateTotal);
     produtonocarrinho.getElementsByClassName("remove-product-button")[0].addEventListener("click", removeprodutos);
   }

export const carrinho = {
   addcarinho,
   updateTotal
};

document.querySelector('#submit').addEventListener('click' , function (){
   let itemnome = document.getElementsByClassName("cart-product");
   for ( var i = 0; i < itemnome.length; i++){


      let nomedointem = itemnome[i].getElementsByClassName("cart-product-title")[0].innerText
      


      console.log("nomedointem")
   



   let nomes = document.querySelector('#nome').value;
   let numero =  document.querySelector('#numero').value;
   let endereco = document.querySelector('#endereco').value;
   let numerocasa = document.querySelector('#numerodacasa').value;
   let bandeira = document.querySelector('#seleçaodebandeira').value;
   let valor = document.getElementsByClassName(".cart-product-price").innerText;
    console.log(valor)


   let url = "https://api.whatsapp.com/send?phone=5521980501851&text= Bem vindo ao Espetinho carioca -->> %0A%0A Nome do cliente %0A%0A " + nomes + " %0A%0A Numero de Telefone ?%0A%0A"+ 
   numero + "%0A%0A Endereço do cliente %0A%0A "+ endereco +" %0A%0A Numero e complemento da casa ? %0A"+ numerocasa +"%0A Bandeira do cartão ? %0A%0A" + bandeira + "%0A%0A items %0A%0A" + nomedointem + "  %0A%0A valor total %0A%0A" + valor; 

   window.open(url);

   }
});
 
