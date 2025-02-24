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
    name: "Sanam Re",
    artist: "Mithoon & Arijit Singh",
    image: "https://media-hosting.imagekit.io//19e83e19a4bf48ba/screenshot_1740419554412.png?Expires=1835027555&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=AcnEA6o1ex1W9npRumjhB4uvzDf43AVnNuYw21I6W-lcdOX9b7A7MWf4EHYwLHUunQ8EctgQhpRrs83o-DxGRkgSQE4Cae-3IGjpfqqF6QlTaeIA6Fu-CWcS4PyWvSoao8odeqWHndxsG4HVWi11lPjgdIwmoZOC4uxweyDnrNO9O~xv~l18wUs74hKWa5kfnnewY~SsPEQu73yvLpYifahNpLWjwd8KoysRFETR6e7ffwGqMGvhTqCTxIMXiDbnLlbh-OoMlnGh6viu-VvvvbjWmWiB5oKZBuTkJpBIZVKbLPRtjqenbxK1mPqCR9vMTxCBEf26-0DX~gx435HGVw__",
    path: "1c0a47960b0581817dfac596a058604f.mp3",
  },
  {
    name: "Aziyat",
    artist: "Diljit X Sia",
    image: "https://media-hosting.imagekit.io//f4938527f01146e4/screenshot_1740420125948.png?Expires=1835028127&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=H0rwJV4ARojxJXCLzefSDZBDu0NUqHlKVxohzTNgMoPXojenPiEtpdsaY5EMvBiF1ANNKAWJRL6PCMxg5GqVNhtOI0X-iU8EX2b3Qst3GBYOBH84SPCfrPLdj1XGl8Qohyb8GCWSpeFmpOM8GVBxtYq45W4l0OmBZa-PbinEAsQb7c8feEKxQmo5qcFKEEQMzvUviA3b97H5QhramrLH2XGKA6OpUbwrte~GdEi1z7iAkvRf-5W~nLNL6H6ozAzO3Eip-3Tr-0nhKcGggt6vbYQ7I1ybT77-UE1OzIau-yJtuPeOg1aY4RRQgEo4NqBgv9FMKJ5v~RZ7RRF-du~X7Q__",
    path: "Aziyat - Pratyush Dhiman.mp3",
  },
  {
    name: "Nasheed",
    artist: "Arif Lohar, Deep Jandu",
    image: "https://media-hosting.imagekit.io//6575a79aa1f84d09/screenshot_1740420287712.png?Expires=1835028289&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WyKv861FKgMzgvpA2nhE1izGYhpdZL6VunKAipEowqkVPp~0CltjMc5PqP~6j16FQUSQGmSnlBU2Jnl~ZjfD0XdXVj~hBl6YeCsrIJV5FIOQGpzeK9HT8qW3gxSR-9g9XO5GuUsezaX9jL6bGeyPaMJzug~PHJsVee8e5vdTutVcGCR6CYskz243uhGlGanv-shs6dEAhgHx5~z125u2BK9xFwAOMw1W0PxQJJq9GGKSBIJLuBCZQcUwqy9qJH98KWcozqB~YawkPll2uNxctVpgRuV~2z9Jp5hr9IOkWLfkYsVAxLVLO7qargySjcCjBlKE~7gbVzrkGHg6Ir2EFw__",
    path: "nasheed.mp3",
  },
  {
    name: "Kahani_Suno",
    artist: "SHADOW LADY SCXR SOUL",
    image: "https://media-hosting.imagekit.io//1f562de013e24f74/screenshot_1740420375390.png?Expires=1835028376&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=jaT7f4TmaRh3V49vOtz62hd~u4U6z7~TAupIhHmcapm9su56qDYJR3-LNn-DxkCpE0rcayWXzExw7BNZNJds7C-kLZxx70LnF65fPIxcAPsUI79MFyEpxd8SQm2L83T-UQkANCNd-xX4dnVQ3h0RRl04ZPak9fCjrON~ewLptGnKI5rRm1Xo3UADA76-~6HyYZt~inO7g86ZNCO6Fn4JlYHYnzLGC-VTJLP-iBQtQ1BXDaB7-zGOONu-22PGb-K2xfVBYzM3tTP-quZgAvJiLO6mx4LQgT7EnUqciSlUwylNLdR9TQBvbApvzwfAUsynCqP3w56pdet1xytedKm21A__",
    path: "kahani_suno.mp3",
  },
  {
    name: "Teri Meri",
    artist: "SHADOW LADY SCXR SOUL",
    image: "https://media-hosting.imagekit.io//db9ba48ea87c4352/screenshot_1740420795208.png?Expires=1835028796&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=TYNr8MRd2sZgnIgw9f7nkjbWt2bQ4fTq9Qc3V~4Vh90UxEJ85JM756nw4drrHfMV2~81ZIh9XIy0PRY4JekgH3DrqHsg8gIsR92pjLkQLkNSzYWZouYRuN66Ow-4zFK7ntkHvlEkeru35GNheew4xw89wkbu09MqXQJBBrFjDxIVtc37l5BOMYjPdWtDJdQKthg0HL935vn84EiRAyl74azZbD13lUZeqIxYP8bNaNWarGj2lbz1XmWmohp9BbnIaUd8wmV5o3mg-XJKFmvmvL3V2FJHeVvlcsyLXLZw2Y43F7pu2zeRA4lTn-tku~BPeTL5~6L6givq~4-JEp2Npg__",
    path: "b2814905d7a33c1106ee0aca91f1f9c7.mp3",
  },
  {
    name: "Rauf & Faik",
    artist: "SHADOW LADY SCXR SOUL",
    image: "https://media-hosting.imagekit.io//b18d69d8c8264eca/screenshot_1740420973860.png?Expires=1835028975&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=aMs3-HIaTLu~NG~~EoMPaGCrChi59-q1RNpZv5fRSmvME2kaa39DcYGdVBPXuYUR0KJXaDPp6gy3RsaDdE6E4d85UW9U2qmOOYczPVYBGM-GZ5DDNCmpeZ3~ugMSONdhXRsl5BsuePHjBmfueR4w0mUczI3xDDhFTXr2Rk5axiObuga4tyIb6OqARskI75v8OfyZQM-fGNbSWctjKATad69JVGhPYuLBOPKDONktINiSipzTnoBO6HSfsKcTX78guodiSinV5kwTv62feF5UVZ8bZo3GB6yv-MH-VDLZMWjBIDVCFJyOUr3biu3fgQOYoWmDCySW~vWtnada8oVgDA__",
    path: "b60241ef64e3906815f9dd11928deb10.mp3",
  },
  {
    name: "Ishq",
    artist: "SHADOW LADY SCXR SOUL",
    image: "https://media-hosting.imagekit.io//b9011f190b5b4792/screenshot_1740421229697.png?Expires=1835029231&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ypbmTNtMTV-tdx~5Yhuw83Pt0~yDmnr6AvnXNqHJM6et~NRePMCx9oR2l7vl1g6xmjP--jSjxpdFfg10xecwx8CdCRt4D9dvE18Fmq8GNcb4C1MeC7PhC59yqHTeCUcvuQEF4YLfXClaFW1q7NlASrubAfDrSK0YXsJ78C-RSeCRejygRZa5MvJBPlsp~76pa6zr0eKh2q8813pnmjVfmBxPCBU8k~kbjsEKrgacp23MfisKb7zAXM-S20phzGWIxbGl21vbjlBRTw8P7owCVGJmGzrGzXfCSVmScOfwfkcK3kIz-Uifbn7QARk~bA2FDpo2I~bYbphX1~bISEPhSA__",
    path: "nasheed.mp3",
  },
  {
    name: "Jhol",
    artist: "SHADOW LADY SCXR SOUL",
    image: "https://media-hosting.imagekit.io//7c969cb02aff43c8/screenshot_1740418839921.png?Expires=1835026841&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=AYcqy3MD6Aw2Fjl6axZMBxXfu9EgxLXajT-xpwhZ9vPkGU~D1zT6uPrTWIK~j0d1brNIDHN-zZgZZWrWktdsqMsMlbl1rxtmEzfUW5I5MF4qjgu-sL360JgsMgek~pZ26OFzChKGab8vtOjkqoqk609y9Lx0PhIqvl3VyByqypwvCZ1tDqFaEmbDzETvPlufPYjtn3Co9Vz4Uqq4uB06~R1VPkWnPeObYxEXbLLP9bhjpfYTaOADetqI8hWu57BlxKxjWS-UPlSyTHLRzzPp5O3Nax0eyczXv9YEvfMolFg4i79Ah4r7hR5Wc3yC4SyX~i3-jD777neOm-rUagVXfg__",
    path: "&Signature=AYcqy3MD6Aw2Fjl6axZMBxXfu9EgxLXajT-xpwhZ9vPkGU~D1zT6uPrTWIK~j0d1brNIDHN-zZgZZWrWktdsqMsMlbl1rxtmEzfUW5I5MF4qjgu-sL360JgsMgek~pZ26OFzChKGab8vtOjkqoqk609y9Lx0PhIqvl3VyByqypwvCZ1tDqFaEmbDzETvPlufPYjtn3Co9Vz4Uqq4uB06~R1VPkWnPeObYxEXbLLP9bhjpfYTaOADetqI8hWu57BlxKxjWS-UPlSyTHLRzzPp5O3Nax0eyczXv9YEvfMolFg4i79Ah4r7hR5Wc3yC4SyX~i3-jD777neOm-rUagVXfg__",
  },
  {
    name: "kjhgfrdzxc",
    artist: "SHADOW LADY SCXR SOUL",
    image: "https://ik.imagekit.io/eypz/1727596419416_7OfDs2puX.png",
    path: "https://i.imgur.com/0BYmNbz.mp4",
  },
  {
    name: "KUNJIOOO7876TR",
    artist: "SHADOW LADY SCXR SOUL",
    image: "https://ik.imagekit.io/eypz/1727596419416_7OfDs2puX.png",
    path: "https://i.imgur.com/BYHxsQb.mp4",
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
