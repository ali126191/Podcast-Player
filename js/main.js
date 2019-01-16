alert('c');
function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}
const c = 3;
c= 4;
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

window.onload= playerSound;

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
window.addEventListener('keydown', playSound);
// var audio = new Audio('TheBystanderEffectAreWeAllGuilty.mp3');
// audio.play();

// let playlist = [TheBystanderEffectAreWeAllGuilty.mp3, WhatHappensWhenAPaedophileHunterCatchesYourDad.mp3,
// WillINeverNeedACar.mp3];

// let audio_title = document.getElementById("audio_title");
// let progressBar = document.getElementById('bar');

// let currentTrack = 0;
// let audo = new Audio();
// audio.src = playList[currentTrack];

// window.onload= playerAudio;

// function playerAudio() {
//   audo.src = playList[currentTrack];
//   audio_title.textContent = playerlist[currentTrack];
// }

// function playOrPause() {
//   if(audio.paused) {
//     audio.play();
//   } else {
//     audio.pause();
//   }
// }

// audio.addEventListener('timeupdate' , function(){
//   let position = audio.currentTime / audio.duration;

//   progressBar.style.width = position * 100 + '%';
// });

// function next() {
//   currentTrack++;
//   if(currentTrack > 2){ 
//     currentTrack = 0;
//   }
//   playerAudio();
// }

// function pre() {
//   currentTrack--;
//   if(currentTrack < 0){
//     currentTrack = 2;
//   }
//   playerAudio();
// }

