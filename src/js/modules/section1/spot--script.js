import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js'

import {
  spotAnimationMaster,
  spotPanelMove,
  spotContainer,
  spotWindow,
  sunMove,
  spotControls,
  spotWrapper,
  pathForward,
  pathReverse,
  spot,
} from './spot--gsap'
import {
  beachWavePath,
  waveTimeline,
  waveMove,
  waveData,
  beachWaves,
  beachSun,
  beachClouds,
  cloudTimeline,
} from './spot--beach'
import Data from '../../json/section1.json'
import {
  mountainSun,
  mountainTimeline,
  treeTimeline,
  treeMove,
} from './spot--mountains'
import {
  spotVideo,
  getRandomNumberBetween,
  getElementsOffscreenAmount,
  spotPlayOverlay,
} from './helpers1'
import { spotTrack, moveAmount, spotTrackMove } from './spot--gsap'
import { tumbleweedMove, desertTumbleweeds, desertSun } from './spot--desert'
gsap.registerPlugin(MotionPathPlugin)

export default function section1() {
  // *************************** SPOT ANIMATION ******************** //
  const spot__button_panelOpen = document.querySelector(
    '#panel0__button--panel-open'
  )
  const spot__button_close = document.querySelector('#spot--close')
  const spot__button_playPause = document.querySelector('#spot--play')
  const spotAnimation = spotAnimationMaster()

  // GSAP SET
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
    x: '200%',
  })
  desertTumbleweeds.forEach((weed, index) => {
    gsap.set(weed, {
      right: getElementsOffscreenAmount(weed),
    })
  })

  spotPlayOverlay(true)

  // gsap.set(spotTrack, {
  //   x: '-=' + moveAmount * 2,
  // })

  // ******************* PANEL-OPEN "CLICK" EVENT ****************** //
  spot__button_panelOpen.addEventListener('click', (e) => {
    // Sun
    sunMove(15).restart()
    // Desert
    tumbleweedMove().restart()
    gsap.to(desertTumbleweeds, {
      rotate: -360,
      duration: 5,
      ease: 'power0',
      repeat: -1,
    })
    // Beach Animations
    cloudTimeline.restart()
    waveTimeline.restart()
    // Mountain Animations
    mountainTimeline.restart()
    treeMove().restart()

    spotPanelMove().restart()
  })

  // ******************* PANEL-CLOSE "CLICK" EVENT ****************** //
  spot__button_close.addEventListener('click', (e) => {
    e.stopPropagation()
    spotPanelMove().reverse()
  })

  // ******************* PANEL-PLAY/PAUSE "CLICK" EVENT ****************** //
  // spot__button_playPause.addEventListener('mousemove', (e) => {
  //   spotPlayOverlay(true)
  //   setTimeout(() => {
  //     console.log('2000 ms')
  //     spotPlayOverlay(false)
  //   }, 2000)
  // })
  spot__button_playPause.addEventListener('click', (e) => {
    if (spot__button_playPause.dataset.playState == 'paused') {
      spotAnimation.resume()
      spotPlayOverlay(false)
      spot__button_playPause.classList.replace('icon--play', 'icon--pause')
      spot__button_playPause.setAttribute('data-play-state', 'playing')
    } else {
      // spotPlayOverlay(false)
      spotAnimation.pause()
      spot__button_playPause.classList.replace('icon--pause', 'icon--play')
      spot__button_playPause.setAttribute('data-play-state', 'paused')
    }
  })
}
