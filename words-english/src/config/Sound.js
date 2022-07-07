export default function Sound (text){
    speechSynthesis.speak(new SpeechSynthesisUtterance(text))
}