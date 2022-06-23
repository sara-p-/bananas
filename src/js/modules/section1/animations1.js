import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js'
gsap.registerPlugin(MotionPathPlugin)

// ********************** SPOT ANIMATION **********************//
// ************* VARIABLES
const spotContainer = document.querySelector('.spot')
const spotWrapper = document.querySelector('.spot__wrapper')
const spotWindow = document.querySelector('.spot__window')
const spotTrack = document.querySelector('.spot__track')
const spot = document.querySelector('.spot__item')
const pathForward = document.querySelector('.spot__path--forward')
const pathReverse = document.querySelector('.spot__path--reverse')

const duration = 4
const moveAmount = spotTrack.offsetWidth / 3
const spotTrackMove = '-=' + moveAmount
const spotTrackMoveBack = '+=' + moveAmount

// ********* FUNCTIONS
// spotContainerOpen - Function to pull out the side panel that holds the spot animation
export function spotContainerOpen(callback) {
  const t1 = gsap.timeline({ paused: true })

  t1.to(spotContainer, {
    left: '0%',
    duration: 2,
  })
  t1.to(spotWindow, {
    x: '0%',
    duration: 1,
    onComplete: callback,
  })

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
      onComplete: function () {
        console.log('track moved')
      },
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

export function spotMoveEnd(remove) {
  function removeFunction(remove) {
    if (remove) {
      spotContainer.classList.remove('spot--active')
    }
  }

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
      onComplete: removeFunction,
      onCompleteParams: [remove],
    },
    '<60%'
  )

  return t1
}

export function spotAnimation() {
  const spotMaster = gsap.timeline({ paused: true, delay: 1 })

  gsap.set(spot, {
    motionPath: {
      path: pathReverse,
      align: pathReverse,
      alignOrigin: [0.5, 0.5],
    },
  })

  spotMaster.add(spotMoveIntro())
  spotMaster.add(spotMoveIntro())
  spotMaster.add(spotMoveMiddle())
  spotMaster.add(spotMoveEnd())
  spotMaster.add(spotMoveEnd(true))

  return spotMaster
}
