import { gsap } from 'gsap'
import { Timeline } from 'gsap/gsap-core'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js'

gsap.registerPlugin(MotionPathPlugin)

// ********************** SPOT ANIMATION **********************//
// ************* VARIABLES
export const spotContainer = document.querySelector('.spot')
export const spotWrapper = document.querySelector('.spot__wrapper')
export const spotWindow = document.querySelector('.spot__window')
export const spotControls = document.querySelector('.spot__controls')

export const spotTrack = document.querySelector('.spot__track')
export const spot = document.querySelector('.spot__item')
export const pathForward = document.querySelector('.spot__path--forward')
export const pathReverse = document.querySelector('.spot__path--reverse')

const duration = 4
const moveAmount = spotTrack.offsetWidth / 3
const spotTrackMove = '-=' + moveAmount
const spotTrackMoveBack = '+=' + moveAmount

// ********* FUNCTIONS

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
    }
  )
  t1.fromTo(
    spotWindow,
    {
      left: '-100%',
    },
    {
      left: '0%',
      duration: 1,
    }
  )
  t1.fromTo(
    spotControls,
    {
      bottom: '-100%',
    },
    {
      bottom: '0%',
      duration: 1,
    }
  )

  return t1
}
// spotContainerOpen - Function to pull out the side panel that holds the spot animation
export function spotContainerOpen() {
  const t1 = gsap.timeline()

  t1.fromTo(
    spotContainer,
    {
      left: '-100%',
    },
    {
      left: '0%',
      duration: 2,
    }
  )
  t1.fromTo(
    spotWindow,
    {
      left: '-100%',
    },
    {
      left: '0%',
      duration: 1,
    }
  )
  t1.fromTo(
    spotControls,
    {
      left: '-100%',
    },
    {
      left: '0%',
      duration: 1,
    }
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
    spotTrack,
    {
      x: spotTrackMove,
      duration: 1,
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
    spotTrack,
    {
      x: spotTrackMoveBack,
      duration: 1,
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
  const spotMaster = gsap.timeline({ paused: true, delay: 1 })

  // spotMaster.add(spotContainerOpen().restart())
  spotMaster.add(spotMoveIntro())
  spotMaster.add(spotMoveIntro())
  spotMaster.add(spotMoveMiddle())
  spotMaster.add(spotMoveEnd())
  spotMaster.add(spotMoveEnd())
  // spotMaster.add(spotContainerOpen().reverse())

  return spotMaster
}
