import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js'

gsap.registerPlugin(MotionPathPlugin)

import Data from '../../json/section1.json'
import { getElementsOffscreenAmount, getRandomNumberBetween } from './helpers1'

// ********************** Beach Scene **********************//
// ************* VARIABLES
export const beachWaves = document.querySelectorAll('.beach__wave')
export const beachWavePath = document.querySelector('.beach__wave-path')
export const beachSun = document.querySelector('.beach__sun-svg')
export const waveData = Data.section1.spotAnimation.waveData

// ************* FUNCTIONS

// sunMove - function to move the sun
export function sunMove() {
  const t1 = gsap.timeline({ paused: true, repeat: -1, yoyo: true })

  t1.fromTo(
    beachSun,
    { bottom: '-100%', scale: 1.5 },
    {
      bottom: '100%',
      scale: 0.5,
      duration: 24,
      ease: 'power0',
    }
  )

  return t1
}

// waveMove - function to move the waves
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

// WavesTimeline
export const waveTimeline = gsap.timeline({
  repeat: -1,
  yoyo: true,
  paused: true,
})
beachWaves.forEach((wave, index) => {
  waveTimeline.add(
    waveMove(wave, waveData[index].align, waveData[index].duration),
    waveData[index].delay
  )
})

// cloudMove - function to move the clouds
export const beachClouds = document.querySelectorAll('.beach__cloud')
export const cloudTimeline = gsap.timeline({
  paused: true,
})

export function cloudMove(cloud, dur, left) {
  const t1 = gsap.timeline()

  t1.fromTo(
    cloud,
    {
      left: getElementsOffscreenAmount(cloud),
    },
    {
      left: '110%',
      duration: dur,
      ease: 'power0',
      yoyo: true,
      repeat: -1,
    }
  )

  return t1
}

beachClouds.forEach((cloud, index) => {
  cloudTimeline.add(cloudMove(cloud, getRandomNumberBetween(25, 35)), '<3')
})
