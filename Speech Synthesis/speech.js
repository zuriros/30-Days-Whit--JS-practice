const msg = new SpeechSynthesisUtterance();
  let voices = [];
  const voicesDropdown = document.querySelector('[name="voice"]');
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');
  msg.text = document.querySelector('[name= "text"]').value;

  const populateVoices = (e) => {
    voices = e.target.getVoices();
    voicesDropdown.innerHTML = voices
      .filter(voice => voice.lang.includes('en'))
      .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
}

  const setVoice = (e) => {
    // console.log(e.target.value); 
    msg.voice = voices.find(voice => voice.name === e.target.value); 
    toggle();
  }

  const toggle = (startOver = true) => {
    speechSynthesis.cancel();
    if (startOver) {
      speechSynthesis.speak(msg);
    }
  }
  
  const setOption = (e) => {
    // console.log(e.target.name, e.target.value);
   msg[e.target.name] = e.target.value;
   toggle(); 
  }

  speechSynthesis.addEventListener('voiceschanged', populateVoices);
  voicesDropdown.addEventListener('change', setVoice);
  options.forEach(option => option.addEventListener('change', setOption));
  speakButton.addEventListener('click', toggle);
  // stopButton.addEventListener('click', toggle.bind(null, false));
  stopButton.addEventListener('click', () => toggle(false));



