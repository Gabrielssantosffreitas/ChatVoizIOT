
import Falar from "./Voice.js"
export default async function chamarApi(mensagem) {

    await fetch("http://localhost:8080/api/ia", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ texto: mensagem }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Resposta da API:', data);
        addMensagem("bot",data.texto);
        Falar(data.texto)

    })
    .catch((error) => {
        console.error('Erro ao chamar a API:', error);
    });

    
}