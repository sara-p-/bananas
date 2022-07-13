import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js'

gsap.registerPlugin(MotionPathPlugin)

import Data from '../../json/section1.json'

import { getElementsOffscreenAmount } from './helpers1'

// Variables
const desertScene = document.querySelector('.desert')
export const desertTumbleweeds = document.querySelectorAll(
  '.desert__tumbleweed'
)
export const desertSun = document.querySelector('.desert__sun')
// const mountainData = Data.section1.spotAnimation.mountainMountainData
// const treeData = Data.section1.spotAnimation.mountainTreeData
// const desertMountain = document.querySelector('.desert__mountain')
const desertCactus = document.querySelector('desert__cactus')

export const tumbleweedTimeline = gsap.timeline({
  paused: true,
})

// tumbleweedMove - move the background mountain
export function tumbleweedMove() {
  const t1 = gsap.timeline({ paused: true })

  t1.to(desertTumbleweeds, {
    right: '100%',
    duration: 20,
    ease: 'power0',
    stagger: {
      each: 3,
      repeat: -1,
    },
  })

  return t1
}

// desertTumbleweeds.forEach((weed, index) => {
//   tumbleweedTimeline.add(tumbleweedMove(weed), '<')
// })
