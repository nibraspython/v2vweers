// Array of song objects
const songs = [
    { title: "Aziyat - Pratyush Dhiman", src: "Aziyat - Pratyush Dhiman.mp3" },
    { title: "Beevi Rish NK, Zail", src: "Beevi Rish NK, Zail.mp3" },
    { title: "kahani_suno", src: "kahani_suno.mp3" },
    { title: "nasheed", src: "nasheed.mp3" }
    // Add more songs as needed
];

// Function to initialize the playlist
function initPlaylist() {
    const playlist = document.getElementById('playlist');
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = song.title;
        li.addEventListener('click', () => playSong(index));
        playlist.appendChild(li);
    });
}

// Function to play a selected song
function playSong(index) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = songs[index].src;
    audioPlayer.play();
}

// Scroll functionality
function scrollPlaylist(direction) {
    const container = document.querySelector('.playlist-container');
    const scrollAmount = 50; // Adjust scroll amount as needed
    if (direction === 'up') {
        container.scrollTop -= scrollAmount;
    } else if (direction === 'down') {
        container.scrollTop += scrollAmount;
    }
}

// Event listeners for scroll buttons
document.getElementById('scrollUp').addEventListener('click', () => scrollPlaylist('up'));
document.getElementById('scrollDown').addEventListener('click', () => scrollPlaylist('down'));

// Initialize the playlist on page load
window.onload = initPlaylist;
