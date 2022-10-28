// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  const synth = window.speechSynthesis;
  const select = document.getElementById('voice-select');
  const button = document.querySelector('button');
  const text = document.getElementById('text-to-speak');
  const smilingImg = document.querySelector('img');
 
  let voices = []

  synth.addEventListener("voiceschanged", function() {
    voices = synth.getVoices();
    for(let i=0; i<voices.length; i++)
    {
      let option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
      option.value = voices[i].name;
      select.appendChild(option);
    }
  })

  button.addEventListener('click', function() {
    let utter = new SpeechSynthesisUtterance(text.value);
    utter.addEventListener('end', () => {
      smilingImg.src = 'assets/images/smiling.png';
      smilingImg.alt = 'Smiling face';
    });
    utter.addEventListener('start', () => {
      smilingImg.src = 'assets/images/smiling-open.png';
      smilingImg.alt = 'Smiling Open face';
    });

    for(let i=0; i<voices.length; i++)
    {
      if(voices[i].name === select.value)
        utter.voice = voices[i];
    }
    
    synth.speak(utter);
  })
}