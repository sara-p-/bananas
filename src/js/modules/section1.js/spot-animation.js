import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js'
gsap.registerPlugin(MotionPathPlugin)

import { createSpotFrame } from '../html-components'
import { spotStart } from '../animations'

export default function spotAnimation() {
  const spot = document.querySelector('.spot-box__spot')
  const path = document.querySelector('#path--bounce')
  const bar = document.querySelector('.spot-box__bar')
  const duration = 6
  const t1 = gsap.timeline

  gsap.to(spot, {
    duration: duration,
    motionPath: {
      path: path,
      align: path,
      alignOrigin: [0.5, 0.5],
    },
  })
}
