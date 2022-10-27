// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const img = new Image();
  var audioFile;

  const hornSelect = document.getElementById('horn-select');
  const volume = document.getElementById('volume');

  const hide = document.getElementsByClassName("hidden");
  
  const audio = document.querySelector("audio");
  const hornImage = document.querySelector("#expose > img");
  const volumeIcon = document.querySelector("#volume-controls > img");
  const button = document.querySelector('#expose > button');


  hornSelect.addEventListener('change', e => {
    hornImage.src = 'assets/images/' + e.target.value + '.svg';
    audioFile = e.target.value;
  });

  volume.addEventListener('input', e => {
    if(volume.value == 0)
    {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    }
    else if(volume.value >= 1 && volume.value < 33)
    {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    }
    else if(volume.value >= 33 && volume.value < 67)
    {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    }
    else  //from 67 and up (to 100)
    {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }

    audio.volume = volume.value / 100;
  });

  button.addEventListener('click', function() {
    audio.src = 'assets/audio/' + audioFile + '.mp3';
    audio.play();

    if(hornSelect.value == 'party-horn')
    {
      let jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}