import gsap from 'gsap'
import {
  spotAnimationMaster,
  spotPanelMove,
  spotContainer,
  spotWindow,
  spotControls,
  spotWrapper,
  pathForward,
  pathReverse,
  spot,
} from './spot-animation'
import Data from './../../json/section1.json'

import { spotVideo } from './helpers1'

export default function section1() {
  // *************************** SPOT ANIMATION ******************** //
  const gem1 = document.querySelector('.gem1')
  const spotClose = document.querySelector('#spot--close')
  const spotPlay = document.querySelector('#spot--play')
  const spotVideoList = Data.section1.spotAnimation.videos
  const spotAnimation = spotAnimationMaster()
  const spotVideoBoxes = document.querySelectorAll('.spot__video')

  // spotAnimationScript()
  gsap.set(spot, {
    motionPath: {
      path: pathReverse,
      align: pathReverse,
      alignOrigin: [0.5, 0.5],
    },
  })
  gsap.set(spotContainer, {
    left: '-100%',
  })
  gsap.set(spotWindow, {
    left: '-100%',
  })
  gsap.set(spotControls, {
    bottom: '-100%',
  })

  gem1.addEventListener('click', (e) => {
    spotPanelMove().restart()
    spotVideoBoxes.forEach((box, index) => {
      spotVideo(box, spotVideoList[index])
    })
  })

  spotClose.addEventListener('click', (e) => {
    // spotAnimation.pause()
    spotPanelMove().reverse()
  })

  spotPlay.addEventListener('click', (e) => {
    if (spotPlay.dataset.playState == 'paused') {
      spotAnimation.resume()
      spotPlay.classList.replace('icon--play', 'icon--pause')
      spotPlay.setAttribute('data-play-state', 'playing')
    } else {
      spotAnimation.pause()
      spotPlay.classList.replace('icon--pause', 'icon--play')
      spotPlay.setAttribute('data-play-state', 'paused')
    }
  })
}
