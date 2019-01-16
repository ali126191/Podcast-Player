const PodcastOne = document.getElementById('one');
const PodcastTwo = document.getElementById('two');
const PodcastThree = document.getElementById('three');
const PodcastFour = document.getElementById('four');

const sound1 = document.getElementById('sound1');
const sound2 = document.getElementById('sound2');
const sound3 = document.getElementById('sound3');
const sound4 = document.getElementById('sound4');

const forward1 = document.getElementById('forward1');
const forward2 = document.getElementById('forward2');
const forward3 = document.getElementById('forward3');
const forward4 = document.getElementById('forward4');

forward1.addEventListener('click', forwardAudio);
forward2.addEventListener('click', forwardAudio);
forward3.addEventListener('click', forwardAudio);
forward4.addEventListener('click', forwardAudio);

backward1.addEventListener('click', backwardAudio);
backward2.addEventListener('click', backwardAudio);
backward3.addEventListener('click', backwardAudio);
backward4.addEventListener('click', backwardAudio);


PodcastOne.addEventListener('click', playSound);
PodcastTwo.addEventListener('click', playSound);
PodcastThree.addEventListener('click', playSound);
PodcastFour.addEventListener('click', playSound);

let timeBar = document.getElementsByClassName("handle")[0];
let currentPodcast;

function forwardAudio(e) {
  currentPodcast.currentTime += 30;
}

function backwardAudio(e) {
  currentPodcast.currentTime -= 30;
}





let playing = false;
function playSound(e) {
   const audio = e.target.id;
  
   if (!audio) return;
  
  if(!playing) {
     playing = true;
     if (audio == 'one') {
       sound1.play();
       currentPodcast = sound1;
        let podcast = sound1;
        podcast.addEventListener("timeupdate", function () {
        let position = sound1.currentTime / sound1.duration;
          timeBar.style.marginLeft =  (position * 100) + '%';
        });
      } 
   else if (audio == 'two') {
       sound2.play();
       currentPodcast = sound2;
     } else if (audio == 'three') {
       sound3.currentTime = 0;
       sound3.play();
       currentPodcast = sound3;
     } else if (audio == 'four') {
       sound4.currentTime = 0;
       sound4.play();
       currentPodcast = sound4;
     }
   } 
   else if (playing) {
    playing = false;
    sound1.pause();
    sound2.pause();
    sound3.pause();
    sound4.pause();
  }
   
}

function podcastPlaying() {
   if (audio == 'one') {
     //  sound1.currentTime = 0;
     sound1.play();
   } else if (audio == 'two') {
     //  sound2.currentTime = 0;
     sound2.play();
     currentPodcast = sound2;
   } else if (audio == 'three') {
     sound3.currentTime = 0;
     sound3.play();
     currentPodcast = sound3;
   } else if (audio == 'four') {
     sound4.currentTime = 0;
     sound4.play();
     currentPodcast = sound4;
   }
}