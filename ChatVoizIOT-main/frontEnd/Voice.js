
export default function Falar(texto){
    const discurso =  new SpeechSynthesisUtterance(texto)

    discurso.lang = "pt-BR"
    discurso.rate = 1
    window.speechSynthesis.speak(discurso)
    
}