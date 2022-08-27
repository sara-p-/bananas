import gsap from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js'

import {
  spotAnimationMaster,
  spotPanelMove,
  sunMove,
  pathReverse,
  spot,
  spotContainer,
  spotWindow,
} from './spot--gsap'
import { waveTimeline, cloudTimeline } from './spot--beach'
import Data from '../../json/section1.json'
import { mountainTimeline, treeTimeline, treeMove } from './spot--mountains'
import {
  getElementsOffscreenAmount,
  spotPlayOverlay,
  spotPlayStart,
  removeOverlay,
  debouncedMouseMove,
} from './helpers1'
import { spotTrack, moveAmount, spotTrackMove } from './spot--gsap'
import { tumbleweedMove, desertTumbleweeds, desertSun } from './spot--desert'
gsap.registerPlugin(MotionPathPlugin)

export default function panelZero() {
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
  // gsap.set(spotContainer, {
  //   left: '-100%',
  // })
  // gsap.set(spotWindow, {
  //   x: '200%',
  // })
  desertTumbleweeds.forEach((weed, index) => {
    gsap.set(weed, {
      right: getElementsOffscreenAmount(weed),
    })
  })

  // Start the "video" with a blur
  spotPlayStart(true)

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

    // setTimeout(() => {
    //   console.log('5000 ms')
    //   spotPanelMove().reverse()
    // }, 5000)
  })

  // ******************* PANEL-CLOSE "CLICK" EVENT ****************** //
  spot__button_close.addEventListener('click', (e) => {
    console.log('click')
    e.stopPropagation()
    // spotAnimation.pause()
    spotPanelMove().reverse()
  })

  // ******************* PANEL-PLAY/PAUSE MOUSE EVENTS ****************** //
  spot__button_playPause.addEventListener('mousemove', (e) => {
    spotPlayOverlay(true)
    debouncedMouseMove()
  })
  spot__button_playPause.addEventListener('click', (e) => {
    if (spot__button_playPause.dataset.playState == 'paused') {
      spotAnimation.resume()
      spotPlayStart(false)
      spot__button_playPause.classList.replace('show-play', 'show-pause')
      spot__button_playPause.setAttribute('data-play-state', 'playing')
    } else {
      // spotPlayOverlay(false)
      spotAnimation.pause()
      // spotPlayStart(true)
      spot__button_playPause.classList.replace('show-pause', 'show-play')
      spot__button_playPause.setAttribute('data-play-state', 'paused')
    }
  })
}
