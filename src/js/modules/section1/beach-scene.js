import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js'

gsap.registerPlugin(MotionPathPlugin)

// ********************** Beach Scene **********************//
// ************* VARIABLES
export const beachWaves = document.querySelectorAll('.beach__wave')
export const beachWave0 = document.querySelector('.beach__wave--0')
export const beachWave1 = document.querySelector('.beach__wave--1')
export const beachWave2 = document.querySelector('.beach__wave--2')
export const beachWavePath = document.querySelector('.beach__wave-path')
export const beachSun = document.querySelector('.beach__sun-svg')
export const beachSky = document.querySelector('.beach__sky')

// ************* FUNCTIONS
// skyMove - move the sky from "night" to "day"
export function skyMove() {
  const t1 = gsap.timeline({ paused: true, repeat: -1, yoyo: true })

  t1.fromTo(
    beachSky,
    {
      bottom: '0%',
    },
    {
      bottom: '-500%',
      duration: 24,
      ease: 'power3.out',
    }
  )

  return t1
}
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
