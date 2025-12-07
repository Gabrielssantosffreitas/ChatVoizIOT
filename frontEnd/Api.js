export default function chamarApi(mensagem) {
    fetch("https://localhost:8080/api/ia", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ texto: mensagem }),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Resposta da API:', data);
    })
    .catch((error) => {
        console.error('Erro ao chamar a API:', error);
    });
}