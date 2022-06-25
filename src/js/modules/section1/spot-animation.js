import { gsap } from 'gsap'
import { Timeline } from 'gsap/gsap-core'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js'

gsap.registerPlugin(MotionPathPlugin)

// ********************** SPOT ANIMATION **********************//
// ************* VARIABLES
export const spotContainer = document.querySelector('.spot')
export const spotWrapper = document.querySelector('.spot__wrapper')
export const spotWindow = document.querySelector('.spot__window')
export const spotInnerWindow = document.querySelector('.spot__inner-window')
export const spotWindowArray = [spotWindow, spotInnerWindow]
export const spotControls = document.querySelector('.spot__controls')
export const beachWaves = document.querySelectorAll('.beach__wave')
export const beachWave0 = document.querySelector('.beach__wave--0')
export const beachWave1 = document.querySelector('.beach__wave--1')
export const beachWave2 = document.querySelector('.beach__wave--2')
export const beachWavePath = document.querySelector('.beach__wave-path')

export const spotTrack = document.querySelector('.spot__track')
export const spotBottomTrack = document.querySelector('.spot__bottom')
export const spotTrackArray = [spotTrack, spotBottomTrack]
export const spot = document.querySelector('.spot__item')
export const pathForward = document.querySelector('.spot__path--forward')
export const pathReverse = document.querySelector('.spot__path--reverse')

const duration = 4
const moveAmount = spotTrack.offsetWidth / 3
const spotTrackMove = '-=' + moveAmount
const spotTrackMoveBack = '+=' + moveAmount

// ********* FUNCTIONS
// waveMove - function to move the waves in the beach scene (box 1)
export function waveMove(wave, alignY = 0.4, duration = 2) {
  const t1 = gsap.timeline({ repeat: -1, yoyo: true })

  t1.to(wave, {
    motionPath: {
      path: beachWavePath,
      align: beachWavePath,
      alignOrigin: [0.5, alignY],
    },
    duration: duration,
    ease: 'power0',
  })

  return t1
}

//  spotPanelMove - Function to open/close the spot panel sections
export function spotPanelMove() {
  const t1 = gsap.timeline({ paused: true })

  t1.fromTo(
    spotContainer,
    {
      left: '-100%',
    },
    {
      left: '0%',
      duration: 2,
      ease: 'expo.inOut',
    }
  )
  t1.fromTo(
    spotWindowArray,
    {
      x: '200%',
    },
    {
      x: '0%',
      duration: 2,
      ease: 'expo.inOut',
      // delay: 0.3,
      stagger: 0.1,
    },
    '<'
  )
  t1.fromTo(
    spotControls,
    {
      bottom: '-100%',
    },
    {
      bottom: '0%',
      ease: 'back',
      duration: 1,
    },
    '<50%'
  )

  return t1
}

// spotMoveIntro - Function that stores the beginning of the animation
export function spotMoveIntro() {
  const t1 = gsap.timeline({ ease: 'power0' })

  t1.to(
    spot,
    {
      duration: duration,
      motionPath: {
        path: pathForward,
        align: pathForward,
        alignOrigin: [0.5, 0.5],
      },
    },
    '<60%'
  )
  t1.to(
    spotTrackArray,
    {
      x: spotTrackMove,
      duration: 1,
      stagger: 0.1,
      ease: 'expo',
    },
    '<75%'
  )

  return t1
}

export function spotMoveMiddle() {
  const t1 = gsap.timeline({ ease: 'power0' })

  t1.to(
    spot,
    {
      duration: duration,
      motionPath: {
        path: pathForward,
        align: pathForward,
        alignOrigin: [0.5, 0.5],
      },
    },
    '<60%'
  )
  t1.to(
    spot,
    {
      duration: duration,
      motionPath: {
        path: pathReverse,
        align: pathReverse,
        alignOrigin: [0.5, 0.5],
      },
    },
    '<80%'
  )

  return t1
}

export function spotMoveEnd() {
  const t1 = gsap.timeline({ ease: 'power0' })

  t1.to(
    spotTrackArray,
    {
      x: spotTrackMoveBack,
      duration: 1,
      stagger: 0.1,
      ease: 'expo',
    },
    '<75%'
  )
  t1.to(
    spot,
    {
      duration: duration,
      motionPath: {
        path: pathReverse,
        align: pathReverse,
        alignOrigin: [0.5, 0.5],
      },
    },
    '<60%'
  )

  return t1
}

export function spotAnimationMaster() {
  const spotMaster = gsap.timeline({ paused: true, delay: 1, repeat: -1 })

  spotMaster.add(spotMoveIntro())
  spotMaster.add(spotMoveIntro())
  spotMaster.add(spotMoveMiddle())
  spotMaster.add(spotMoveEnd())
  spotMaster.add(spotMoveEnd())

  return spotMaster
}
