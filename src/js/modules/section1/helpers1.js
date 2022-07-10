import YouTubePlayer from 'youtube-player'
import { debounce } from 'debounce'

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

// ********************** Spot Animation "video controls" hover effects ******************* //
// spotPlayOverlay - If true, the class 'inactive' is added to

export function spotPlayOverlay(overlayState = false) {
  const spotPlay = document.querySelector('.spot__play')
  const innerWindow = document.querySelector('.spot__inner-window')

  if (overlayState) {
    spotPlay.classList.remove('inactive')
    // innerWindow.classList.add('blur')
  } else {
    spotPlay.classList.add('inactive')
    // innerWindow.classList.remove('blur')
  }
}

export function spotPlayStart(blur = true) {
  const innerWindow = document.querySelector('.spot__inner-window')

  if (blur) {
    innerWindow.classList.add('blur')
  } else {
    innerWindow.classList.remove('blur')
  }

  return blur
}

// Trying to combine the functions above but can't quite do it yet. For reasons.
export function toggleHover(element, className, active = false) {
  if (active) {
    element.classList.add(className)
  } else {
    element.classList.remove(className)
  }
}

export function removeOverlay() {
  spotPlayOverlay(false)
}
export let debouncedMouseMove = debounce(removeOverlay, 500)
