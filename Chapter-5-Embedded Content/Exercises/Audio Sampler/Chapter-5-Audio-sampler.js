var mp3 = document.getElementsByClassName('mp3');
  Array.prototype.forEach.call(mp3, function(element) {
      element.addEventListener('click', function () {
          var audioSrc = this.getAttribute('data-src');
          play(audioSrc); 
      });
  });


function play(audioSrc) {
  const audio = new Audio(audioSrc);
  audio.playbackRate = 1.0; // Set the playback rate //
  audio.play();
}  

var soundPlayer = new Audio();

function playLowerNote() {
  soundPlayer.src = audioSrc; // Use the provided audio source
  soundPlayer.mozPreservesPitch = false;
  soundPlayer.play();
}

playLowerNote();