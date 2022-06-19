import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js'
gsap.registerPlugin(MotionPathPlugin)

export function spotTimeline(pathSelection, callback, var1, var2) {
  const spot = document.querySelector('.spot-box__spot')
  const path = document.querySelector(pathSelection)
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
export function spotLastTimeline(callback, var1) {
  const spot = document.querySelector('.spot-box__spot')
  const path1 = document.querySelector('#path--forward')
  const path2 = document.querySelector('#path--reverse')
  const t1 = gsap.timeline({ paused: true })

  t1.to(spot, {
    duration: 6,
    motionPath: {
      path: path1,
      align: path1,
      alignOrigin: [0.5, 0.5],
    },
  })
  t1.to(spot, {
    duration: 6,
    motionPath: {
      path: path2,
      align: path2,
      alignOrigin: [0.5, 0.5],
    },
  })
  t1.to(
    spot,
    {
      duration: 0,
      onComplete: callback,
      onCompleteParams: [var1],
    },
    '<45%'
  )

  return t1
}

// Spot Animation (a spot bouncing across multiple windows)
// export function spotAnimation(callback, var1, var2) {
//   const spot = document.querySelector('.spot-box__spot')
//   const path = document.querySelector('#path--bounce')
//   const t1 = gsap.timeline()

//   t1.to(spot, {
//     duration: 6,
//     motionPath: {
//       path: path,
//       align: path,
//       alignOrigin: [0.5, 0.5],
//     },
//   })
//   t1.to(
//     spot,
//     {
//       duration: 0,
//       onComplete: callback,
//       onCompleteParams: [var1, var2],
//     },
//     '<45%'
//   )
// }
