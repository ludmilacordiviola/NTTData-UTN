export default function sound (text){
    speechSynthesis.speak(new SpeechSynthesisUtterance(text))
}