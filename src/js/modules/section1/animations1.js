import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js'
gsap.registerPlugin(MotionPathPlugin)

export function spotAnimation() {
  const track = document.querySelector('.spot__track')
  const spot = document.querySelector('.spot__item')
  const pathForward = document.querySelector('.spot__path--forward')
  const pathReverse = document.querySelector('.spot__path--reverse')

  const moveAmount = track.offsetWidth / 3
  const trackMove = '-=' + moveAmount
  const trackMoveBack = '+=' + moveAmount
  const duration = 4

  const t1 = gsap.timeline({ paused: true, ease: 'power0' })
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
    track,
    {
      left: '-=' + moveAmount,
      duration: 1,
    },
    '<75%'
  )
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
    track,
    {
      x: trackMove,
      duration: 1,
    },
    '<75%'
  )
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
    '<60%'
  )
  t1.to(
    track,
    {
      x: trackMoveBack,
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
  t1.to(
    track,
    {
      x: trackMoveBack,
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
