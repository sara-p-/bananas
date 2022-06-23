import gsap from 'gsap'
import { spotAnimation, spotContainerOpen } from './animations1'
import { spotVideo } from './videos1'

export default function section1() {
  // Bouncing Spot Animation
  const gem1 = document.querySelector('.gem1')
  const spotClose = document.querySelector('#spot--close')
  const spotPause = document.querySelector('#spot--pause')
  const spotContainer = document.querySelector('.spot')
  const spotWrapper = document.querySelector('.spot__wrapper')
  const spotWindow = document.querySelector('.spot__window')
  const spotIframe = document.querySelector('#spot__iframe--0')
  const spotMaster = spotAnimation()
  const openPanel = spotContainerOpen().pause()
  const spotVideoPlayer = spotVideo(spotIframe, 'BibG8h__JOE')

  gsap.set(spotContainer, {
    left: '-100%',
  })
  gsap.set(spotWindow, {
    x: '-200%',
  })

  gem1.addEventListener('click', (e) => {
    spotMaster.restart()
    spotVideo(spotIframe, 'BibG8h__JOE')
  })

  spotClose.addEventListener('click', (e) => {
    spotMaster.pause()
    openPanel.reverse()
  })

  spotPause.addEventListener('click', (e) => {
    console.log(spotPause.dataset.playState)
    if (spotPause.dataset.playState == 'playing') {
      spotMaster.pause()
      spotPause.classList.replace('icon--pause', 'icon--play')
      spotPause.setAttribute('data-play-state', 'paused')
    } else {
      spotMaster.resume()
      spotPause.classList.replace('icon--play', 'icon--pause')
      spotPause.setAttribute('data-play-state', 'playing')
    }
  })
}
