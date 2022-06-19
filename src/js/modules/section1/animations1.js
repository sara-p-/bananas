import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js'
gsap.registerPlugin(MotionPathPlugin)

export function spotTimeline(callback, var1, var2) {
  const spot = document.querySelector('.spot-box__spot')
  const path = document.querySelector('#path--bounce')
  const t1 = gsap.timeline({ paused: true })

  t1.to(spot, {
    duration: 6,
    motionPath: {
      path: path,
      align: path,
      alignOrigin: [0.5, 0.5],
    },
  })
  t1.to(
    spot,
    {
      duration: 0,
      onComplete: callback,
      onCompleteParams: [var1, var2],
    },
    '<45%'
  )

  return t1
}

export function spot(dir, callback, var1, var2) {
  let spotForward = spotTimeline(callback, var1, var2)
  let spotBackwards = spotTimeline(callback, var1, var2)

  if (dir == 'forwards') {
    spotForward.play()
  }
  if (dir == 'last') {
    // spotForward.play()
    spotBackwards.play()
  }
}

// Spot Animation (a spot bouncing across multiple windows)
export function spotAnimation(callback, var1, var2) {
  const spot = document.querySelector('.spot-box__spot')
  const path = document.querySelector('#path--bounce')
  const t1 = gsap.timeline()

  t1.to(spot, {
    duration: 6,
    motionPath: {
      path: path,
      align: path,
      alignOrigin: [0.5, 0.5],
    },
  })
  t1.to(
    spot,
    {
      duration: 0,
      onComplete: callback,
      onCompleteParams: [var1, var2],
    },
    '<45%'
  )
}
