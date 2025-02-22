let songs = [];

function addSong() {
    const name = document.getElementById("song-name").value;
    const file = document.getElementById("song-file").files[0];
    const message = document.getElementById("message");

    if (!name || !file) {
        message.innerHTML = "Please enter a song name and upload a file.";
        return;
    }

    const songURL = URL.createObjectURL(file);
    songs.push({ name, url: songURL });

    document.getElementById("song-name").value = "";
    document.getElementById("song-file").value = "";
    message.innerHTML = "Song added successfully!";

    displayPlaylist();
}

function displayPlaylist() {
    const songList = document.getElementById("song-list");
    songList.innerHTML = "";

    songs.forEach((song, index) => {
        const songItem = document.createElement("div");
        songItem.classList.add("song-item");
        songItem.innerHTML = `
            <p onclick="playSong(${index})">${song.name}</p>
        `;
        songList.appendChild(songItem);
    });

    document.getElementById("audio-player").onended = function () {
        nextSong();
    };
}

let currentSongIndex = 0;

function playSong(index) {
    currentSongIndex = index;
    const player = document.getElementById("audio-player");
    player.src = songs[currentSongIndex].url;
    player.play();
    document.getElementById("song-title").innerText = songs[currentSongIndex].name;
}

function nextSong() {
    if (currentSongIndex < songs.length - 1) {
        playSong(currentSongIndex + 1);
    }
}

function prevSong() {
    if (currentSongIndex > 0) {
        playSong(currentSongIndex - 1);
    }
}

function playPause() {
    const player = document.getElementById("audio-player");
    if (player.paused) {
        player.play();
    } else {
        player.pause();
    }
}

// Background Color Change Every 5 Seconds
function changeBackgroundColor() {
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#F3FF33", "#33FFF3", "#9266D4", "#b491e3"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

setInterval(changeBackgroundColor, 5000);
