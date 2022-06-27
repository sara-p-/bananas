import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js'

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
} from './spot--gsap'
import {
  beachWavePath,
  waveTimeline,
  waveMove,
  waveData,
  beachWaves,
  sunMove,
  beachSun,
  beachClouds,
  cloudTimeline,
} from './spot--beach'
import Data from '../../json/section1.json'
import { spotVideo, getRandomNumberBetween } from './helpers1'
import { spotTrack, moveAmount, spotTrackMove } from './spot--gsap'
gsap.registerPlugin(MotionPathPlugin)

export default function section1() {
  // *************************** SPOT ANIMATION ******************** //
  const spot__button_panelOpen = document.querySelector(
    '#spot__button--panel-open'
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
  // gsap.set(spotContainer, {
  //   left: '-100%',
  // })
  // gsap.set(spotWindow, {
  //   x: '200%',
  // })
  // gsap.set(spotControls, {
  //   bottom: '-100%',
  // })
  beachWaves.forEach((wave, index) => {
    gsap.set(wave, {
      motionPath: {
        path: beachWavePath,
        align: beachWavePath,
        alignOrigin: [0.5, waveData[index].align],
      },
    })
  })
  gsap.set(spotTrack, {
    x: '-=' + moveAmount,
  })

  // ******************* PANEL-OPEN "CLICK" EVENT ****************** //
  spot__button_panelOpen.addEventListener('click', (e) => {
    cloudTimeline.restart()
    waveTimeline.restart()
    sunMove().restart()
    spotPanelMove().restart()
  })

  // ******************* PANEL-CLOSE "CLICK" EVENT ****************** //
  spot__button_close.addEventListener('click', (e) => {
    // spotAnimation.pause()
    spotPanelMove().reverse()
  })

  // ******************* PANEL-PLAY/PAUSE "CLICK" EVENT ****************** //
  spot__button_playPause.addEventListener('click', (e) => {
    if (spot__button_playPause.dataset.playState == 'paused') {
      spotAnimation.resume()
      spot__button_playPause.classList.replace('icon--play', 'icon--pause')
      spot__button_playPause.setAttribute('data-play-state', 'playing')
    } else {
      spotAnimation.pause()
      spot__button_playPause.classList.replace('icon--pause', 'icon--play')
      spot__button_playPause.setAttribute('data-play-state', 'paused')
    }
  })
}
