// -----------------------------------------------------
const tamanhoFonte = 16;



const buttonAlmentarTexto = document
    .getElementById('aumentar-texto')
    .addEventListener('click', () => {
        console.log('Aumentar volume');
        const mensagems = document.querySelectorAll('.mensagem');
        mensagems.forEach((mensagem) => {
            const estiloAtual = window.getComputedStyle(mensagem);
            const tamanhoAtual = parseFloat(estiloAtual.fontSize);
            const novoTamanho = tamanhoAtual + 2;
            mensagem.style.fontSize = novoTamanho + 'px';
        });
    });

const buttonDiminuirTexto = document
    .getElementById('diminuir-texto')
    .addEventListener('click', () => { 
        console.log('Diminuir volume');
        const mensagems = document.querySelectorAll('.mensagem');
        mensagems.forEach((mensagem) => {
            const estiloAtual = window.getComputedStyle(mensagem);
            const tamanhoAtual = parseFloat(estiloAtual.fontSize);
            const novoTamanho = tamanhoAtual - 2;
            mensagem.style.fontSize = novoTamanho + 'px';
        });
    });
// -----------------------------------------------------