import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");


 async function envia (Evento) {
   Evento.preventDefault();

   const nome = document.querySelector("[data-nome]").value ;
   const img = document.querySelector("[data-img]").value ;
   const descricao = document.querySelector("[data-descricao]").value ;
   const preco = document.querySelector("[data-preco]").value;

  await conectaApi.enviaProduto(nome, img, descricao, preco);

  
}

formulario.addEventListener("submit", Evento => envia(Evento));