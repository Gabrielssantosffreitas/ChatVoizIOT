import Falar from "./Voice.js";
import  chamarApi  from "./Api.js";
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const reconhecer = new SpeechRecognition()

reconhecer.lang = "pt-BR"

reconhecer.onresult = (evento) => {
        const texto = evento.results[0][0].transcript
        console.log("Texto reconhecido: ", texto)
        addMensagem("usuario", texto);
        const resposta = chamarApi(texto);
 

        
        
}
    reconhecer.onerror = (e) => console.log("ERRO:", e.error);

    reconhecer.onnomatch = () => console.log("Sem correspondência");

    reconhecer.onaudiostart = () => console.log("Captando áudio...");

const microfone = document.getElementById("microfone").addEventListener("click", ()=> {
    reconhecer.start()
    console.log("Microfone ativado, pode falar")
   
});