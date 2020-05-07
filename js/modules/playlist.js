import songList from "../data/songs.js"

const Playlist = (() => {
    //data and state of the player
    const songs = songList;
    let currentPlayingIndex = 0;
    let currentSong = new Audio(songs[currentPlayingIndex].url)
    let isPlaying = false;

    //cache the DOM
    const playlistEl = document.querySelector(".playlist")
    const background = document.querySelector("body")
    const playPause = document.querySelector("button")
    const headerImage = document.querySelector("img")
    const headerSong = document.querySelector(".player__song")
    const headerArtist = document.querySelector(".player__artist")
    const trackbar = document.querySelector(".trackbar")
    const trackbarInner = document.querySelector(".trackbar-inner")

    //functions

    const init = () => {
        render();
    }

    const render = () => {
        let htmlMarkUp = "";
        songs.forEach((songObject, index) => {
            htmlMarkUp += `
                <li class="playlist__song ${index === currentPlayingIndex ? "playlist__song-active":""}">
                    <div class="play__pause">
                        ${index === currentPlayingIndex ? `<i class="fas fa-pause"></i>`:""}
                    </div>
                    <div class="playlist__song-details">
                        <span class="playlist__song-name">${songObject.title}</span>
                        <br>
                        <span class="playlist__song-artist ${index === currentPlayingIndex ? "playlist__song-artist-active":""}">${songObject.artist}</span>
                    </div>
                    <div class="playlist__song-duration ${index === currentPlayingIndex ? "playlist__song-duration-active":""}">
                        ${songObject.time}
                    </div>
                    <div class="playlist__song-blocker"></div>
                </li>
            `
        })
        playlistEl.innerHTML = htmlMarkUp
        changeBackground();
        togglePlayPauseButton();
        renderHeader();
        listners();
    }

    const changeBackground = () => {
        background.style.background = `linear-gradient(to bottom, ${songs[currentPlayingIndex].color}, black)`
    }

    const togglePlayPauseButton = () => {
        if (isPlaying) {
            playPause.innerText = "Pause"
            playlistEl.children[currentPlayingIndex].firstElementChild.innerHTML = `<i class="fas fa-pause"></i>`
        } else {
            playPause.innerText = "Play"
            playlistEl.children[currentPlayingIndex].firstElementChild.innerHTML = `<i class="fas fa-play"></i>`
        }
    }

    const renderHeader = () => {
        headerImage.src = songs[currentPlayingIndex].cover;
        headerSong.innerText = songs[currentPlayingIndex].title;
        headerArtist.innerText = songs[currentPlayingIndex].artist;
    }

    const addPlayButton = (e) => {
        if (!e.target.parentElement.classList.contains("playlist__song-active")) {
            e.target.parentElement.children[0].innerHTML = `<i class="fas fa-play"></i>`
        }
    }

    const deletePlayButton = (e) => {
        if (!e.target.parentElement.classList.contains("playlist__song-active")) {
            e.target.parentElement.children[0].innerHTML = ""
        }
    }

    const mainPlay = (e) => {
        const songIndexArr = [...playlistEl.children]
        if (currentPlayingIndex === songIndexArr.indexOf(e.target.parentElement)) {
            togglePlayPause();
        } else {
            currentPlayingIndex = songIndexArr.indexOf(e.target.parentElement)
            changeSongSource();
            togglePlayPause();
            render();
        }
    }

    const togglePlayPause = () => {
        if (currentSong.paused) {
            currentSong.play()
            isPlaying = true;
            togglePlayPauseButton();
            setInterval(setTrackBar, 100)
        } else {
            currentSong.pause();
            isPlaying = false;
            togglePlayPauseButton();
        }
    }

    const changeSongSource = () => {
        currentSong.src = songs[currentPlayingIndex].url
    }

    const playNext = () => {
        if (currentPlayingIndex === 14) {
            currentPlayingIndex = 0;
        } else {
            currentPlayingIndex++;
            currentSong = new Audio(songs[currentPlayingIndex].url)
            currentSong.play();
            render();
        }
    }

    const setTrackBar = () => {
        const percentage = (currentSong.currentTime/currentSong.duration)*100
        trackbarInner.style.width = `${percentage}%`
    }

    const listners = () => {
        Array.prototype.forEach.call(playlistEl.children, (song) => {
            song.addEventListener("mouseover", addPlayButton)
            song.addEventListener("mouseout", deletePlayButton)
            song.addEventListener("click", mainPlay)
        })
        currentSong.addEventListener("ended", playNext)
        playPause.addEventListener("click", togglePlayPause)
    }

    return {
        init,
        listners
    }
})();

export default Playlist;