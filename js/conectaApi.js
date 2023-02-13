async function listaDeProdutos (){

    const conecxao = await fetch("https://stupendous-swan-1ee694.netlify.app/db.json");
    const conecxaoConvetida = await conecxao.json()

    return conecxaoConvetida;
}

async function enviaProduto (nome, img, descricao, preco){
    const conecxao = await fetch("https://stupendous-swan-1ee694.netlify.app/db.json", {

        method: "POST",
        headers: {
            "content-type": "application/json"
    
        },

        body: JSON.stringify({
            nome: `${nome}`,
            img: img,
            descricao: `${descricao}`,
            preco: `${preco}`

        })
    });

    const conecxaoConvetida = await conecxao.json();

    return conecxaoConvetida;
}




export const conectaApi = {
    listaDeProdutos,
    enviaProduto
}


