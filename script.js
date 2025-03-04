let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement("audio");

// Define the tracks that have to be played
let track_list = [
  {
    name: "SanamRe",
    artist: "Mithoon & Arijit Singh",
    image: "img/SANAMRE.jpg",
    path: "mp3/SANAMRE.mp3",
  },
  {
    name: "Aziyat",
    artist: "Diljit X Sia",
    image: "img/AZIYAT.jpg",
    path: "mp3/AZIYAT.mp3",
  },
  {
    name: "Nasheed",
    artist: "Arif Lohar, Deep Jandu",
    image: "img/NASHEED.jpg",
    path: "mp3/NASHEED.mp3",
  },
  {
    name: "Kahani Suno",
    artist: "SHADOW LADY SCXR SOUL",
    image: "img/KAHANISUNO.jpg",
    path: "mp3/KAHANI-SUNO.mp3",
  },
  {
    name: "Teri Meri",
    artist: "SHADOW LADY SCXR SOUL",
    image: "img/TERIMERI.jpg",
    path: "mp3/TERI-MERI.mp3",
  },
  {
    name: "Rauf & Faik",
    artist: "SHADOW LADY SCXR SOUL",
    image: "img/RAUF-F.jpg",
    path: "mp3/RAUF-F.mp3",
  },
  {
    name: "Ishq",
    artist: "SHADOW LADY SCXR SOUL",
    image: "img/ISHQ.jpg",
    path: "mp3/ISHQ-Q.mp3",
  },
  {
    name: "Jhol",
    artist: "SHADOW LADY SCXR SOUL",
    image: "img/JHOLL.jpg",
    path: "mp3/JHOL.mp3",
  },
  {
    name: "Changes",
    artist: "XXX TENTACTION",
    image: "img/CHANGE.jpg",
    path: "mp3/change-s.mp3",
  },
  {
    name: "Dil Ko Karaar Aaya",
    artist: "SHADOW LADY SCXR SOUL",
    image: "img/DILKOK.jpg",
    path: "mp3/DILKOK.mp3",
  },
  {
    name: "Husn",
    artist: "Anuv Jain",
    image: "img/HUSN.jpg",
    path: "mp3/HUSN.mp3",
  },
  {
    name: "Derdime Derdiman",
    artist: "SHADOW LADY SCXR SOUL",
    image: "img/DERDIMAN.jpg",
    path: "mp3/DERDIMAN.mp3",
  },
  {
    name: "Jo Tum Mera Ho",
    artist: "Anuv Jain",
    image: "img/JOTUM.jpg",
    path: "mp3/JOTUM.mp3",
  },
  {
    name: "Baarishein",
    artist: "Anuv Jain",
    image: "img/BAARISHEIN.jpg",
    path: "mp3/BAARISHEIN-ANUV.mp3",
  },
  {
    name: "Jupiter Mazha",
    artist: "XXX TENTACTION",
    image: "img/JUPITER.jpg",
    path: "mp3/JUPITERMAZHA.mp3",
  },
  {
    name: "Dilshaad",
    artist: "SHADOW LADY SCXR SOUL",
    image: "img/DILSHAAD.jpg",
    path: "mp3/DILSHAAD.mp3",
  },
];

function random_bg_color() {
  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}

// Change color every 5 seconds
setInterval(random_bg_color, 4000);

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage =
    "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent =
    "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextTrack() {
  if (track_index < track_list.length - 1) track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function song1OnClick() {
  loadTrack(0);
  playTrack();
}

function song2OnClick() {
  loadTrack(1);
  playTrack();
}

function song3OnClick() {
  loadTrack(2);
  playTrack();
}

function song4OnClick() {
  loadTrack(3);
  playTrack();
}

function song5OnClick() {
  loadTrack(4);
  playTrack();
}

function song6OnClick() {
  loadTrack(5);
  playTrack();
}

function song7OnClick() {
  loadTrack(6);
  playTrack();
}

function song8OnClick() {
  loadTrack(7);
  playTrack();
}

function song9OnClick() {
  loadTrack(8);
  playTrack();
}

function song10OnClick() {
  loadTrack(9);
  playTrack();
}

function song11OnClick() {
  loadTrack(10);
  playTrack();
}

function song12OnClick() {
  loadTrack(11);
  playTrack();
}

function song13OnClick() {
  loadTrack(12);
  playTrack();
}

function song14OnClick() {
  loadTrack(13);
  playTrack();
}

function song15OnClick() {
  loadTrack(14);
  playTrack();
}

function song16OnClick() {
  loadTrack(15);
  playTrack();
}


function prevTrack() {
  if (track_index > 0) track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  let seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(
      curr_track.currentTime - currentMinutes * 60
    );
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(
      curr_track.duration - durationMinutes * 60
    );

    if (currentSeconds < 10) {
      currentSeconds = "0" + currentSeconds;
    }
    if (durationSeconds < 10) {
      durationSeconds = "0" + durationSeconds;
    }
    if (currentMinutes < 10) {
      currentMinutes = "0" + currentMinutes;
    }
    if (durationMinutes < 10) {
      durationMinutes = "0" + durationMinutes;
    }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}

// Scroll functionality for playlist
function scrollPlaylist(direction) {
    const container = document.querySelector(".playlist");
    const scrollAmount = 50; // Adjust scroll amount
    if (direction === 'up') {
        container.scrollTop -= scrollAmount;
    } else if (direction === 'down') {
        container.scrollTop += scrollAmount;
    }
}

// Add event listeners to scroll buttons
document.getElementById('scroll-up').addEventListener('click', function() {
    document.querySelector('.playlist').scrollBy(0, -50); // Scrolls up
});

document.getElementById('scroll-down').addEventListener('click', function() {
    document.querySelector('.playlist').scrollBy(0, 50); // Scrolls down
});

// Ensure new songs are added inside the playlist
function addSongToPlaylist(songName, artist) {
    let songList = document.getElementById('song-list');
    let listItem = document.createElement('li');
    listItem.innerHTML = `<span>${songName} - ${artist}</span>`;
    songList.appendChild(listItem);
}
