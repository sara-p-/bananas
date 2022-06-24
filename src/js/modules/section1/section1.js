import gsap from 'gsap'
import { spotAnimationMaster, spotContainerOpen } from './spot-animation'
import Data from './../../json/section1.json'

import { spotVideo } from './helpers1'

export default function section1() {
  // *************************** SPOT ANIMATION ******************** //
  const gem1 = document.querySelector('.gem1')
  const spotClose = document.querySelector('#spot--close')
  const spotPause = document.querySelector('#spot--pause')
  const spotContainer = document.querySelector('.spot')
  const spotVideoList = Data.section1.spotAnimation.videos
  const spotWindow = document.querySelector('.spot__window')
  const spotMasterAnimation = spotAnimationMaster()
  const spotVideoBoxes = document.querySelectorAll('.spot__video')
  const spotPanelOpen = spotContainerOpen().pause()

  // spotAnimationScript()
  gsap.set(spotContainer, {
    left: '-100%',
  })
  gsap.set(spotWindow, {
    x: '-200%',
  })

  gem1.addEventListener('click', (e) => {
    spotMasterAnimation.restart()
    spotVideoBoxes.forEach((box, index) => {
      spotVideo(box, spotVideoList[index])
    })
  })

  spotClose.addEventListener('click', (e) => {
    spotMasterAnimation.pause()
    spotPanelOpen.reverse()
  })

  spotPause.addEventListener('click', (e) => {
    console.log(spotPause.dataset.playState)
    if (spotPause.dataset.playState == 'playing') {
      spotMasterAnimation.pause()
      spotPause.classList.replace('icon--pause', 'icon--play')
      spotPause.setAttribute('data-play-state', 'paused')
    } else {
      spotMasterAnimation.resume()
      spotPause.classList.replace('icon--play', 'icon--pause')
      spotPause.setAttribute('data-play-state', 'playing')
    }
  })
}
