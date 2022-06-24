import gsap from 'gsap'
import {
  spotAnimationMaster,
  spotContainerOpen,
  spotContainer,
  spotWindow,
  spotWrapper,
} from './spot-animation'
import Data from './../../json/section1.json'

import { spotVideo } from './helpers1'

export default function section1() {
  // *************************** SPOT ANIMATION ******************** //
  const gem1 = document.querySelector('.gem1')
  const spotClose = document.querySelector('#spot--close')
  const spotPause = document.querySelector('#spot--pause')
  const spotVideoList = Data.section1.spotAnimation.videos
  // const spotMasterTimeline
  const spotAnimation = spotAnimationMaster()
  const spotVideoBoxes = document.querySelectorAll('.spot__video')

  // spotAnimationScript()
  gsap.set(spotContainer, {
    left: '-100%',
  })
  gsap.set(spotWindow, {
    left: '-100%',
  })

  gem1.addEventListener('click', (e) => {
    spotContainerOpen().restart()
    spotAnimation.restart()
    spotVideoBoxes.forEach((box, index) => {
      spotVideo(box, spotVideoList[index])
    })
  })

  spotClose.addEventListener('click', (e) => {
    spotAnimation.pause()
    spotContainerOpen().restart()
    // spotContainerOpen().reverse()
    // spotPanelOpen.reverse()
  })

  spotPause.addEventListener('click', (e) => {
    console.log(spotPause.dataset.playState)
    if (spotPause.dataset.playState == 'playing') {
      spotAnimation.pause()
      spotPause.classList.replace('icon--pause', 'icon--play')
      spotPause.setAttribute('data-play-state', 'paused')
    } else {
      spotAnimation.resume()
      spotPause.classList.replace('icon--play', 'icon--pause')
      spotPause.setAttribute('data-play-state', 'playing')
    }
  })
}
