var speech = new SpeechSynthesisUtterance();
function speak(){
    speech.text = text.value;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    
}