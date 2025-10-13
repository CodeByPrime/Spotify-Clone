console.log("weelcome to spotify")
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songs = [
    { songName: "On My Way", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Alan Walker - Faded", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Alan Walker - Faded", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Alan Walker - Faded", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Alan Walker - Faded", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
]
myProgressBar.addEventListener('timeupdate', () => {
    console.log('timeupdate');
})