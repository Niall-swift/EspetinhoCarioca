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
 document.querySelector(".cart-total-container .valor").innerText = "R$" + totalProdutos;



}



   function addcarinho(evento){
      const add = evento.target
      const produtos = add.parentElement.parentElement
      const produtoimg = produtos.getElementsByClassName("imagemdoproduto")[0].src
      const produtonome = produtos.getElementsByClassName("nomedoproduto")[0].innerText
      const produtovalor = produtos.getElementsByClassName("valordoproduto")[0].innerText
  
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


