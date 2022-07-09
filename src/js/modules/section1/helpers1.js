import YouTubePlayer from 'youtube-player'

export function spotVideo(target, id) {
  let player

  player = YouTubePlayer(target, {
    // videoId: id,
    controls: 0,
    modestbranding: 1,
    mute: 1,
    autoplay: 1,
  })

  player.loadVideoById(id)
}

// getRandomNumberBetween - function to provide a random number between the min and max given
export function getRandomNumberBetween(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

// getElementWidth - get the width of the given element in pixels
export function getElementWidth(element) {
  const width = element.offsetWidth
  return width
}

// getElementsOffscreenAmount - calculate what percentage past any direction is needed to get an element just off the screen
export function getElementsOffscreenAmount(element) {
  return -Math.abs(element.offsetWidth)
}

// spotPlayButton -
export function spotPlayOverlay(overlayDark = false) {
  const spotPlay = document.querySelector('.spot__play')

  if (overlayDark) {
    spotPlay.classList.add('dark')
  } else {
    spotPlay.classList.remove('dark')
  }
}
