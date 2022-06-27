import { gsap } from 'gsap'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin.js'

gsap.registerPlugin(MotionPathPlugin)

import Data from '../../json/section1.json'

// Variables
const mountainScene = document.querySelector('.mountain')
export const mountains = document.querySelectorAll('.mountain__image')
export const mountainSun = document.querySelector('.mountain__sun')
const mountainData = Data.section1.spotAnimation.mountainMountainData
const treeData = Data.section1.spotAnimation.mountainTreeData
const mountainTrees = document.querySelectorAll('.mountain__tree')

export const mountainTimeline = gsap.timeline({
  paused: true,
})
export const treeTimeline = gsap.timeline({
  paused: true,
})

// mountainMove - move the background mountains
export function mountainMove(mountain, dur, amount) {
  const t1 = gsap.timeline({ repeat: -1, yoyo: true })

  t1.to(mountain, {
    x: amount,
    duration: dur,
    ease: 'power0',
  })

  return t1
}
mountains.forEach((mountain, index) => {
  mountainTimeline.add(
    mountainMove(
      mountain,
      mountainData[index].duration,
      mountainData[index].xAmount
    ),
    '<'
  )
})

// treeMove - move the trees up and down
export function treeMove() {
  const t1 = gsap.timeline({ paused: true })

  t1.to(mountainTrees, {
    y: 'random(-20,-10)',
    duration: 'random(0.5, 2)',
    stagger: {
      repeat: -1,
      repeatRefresh: true,
      yoyo: true,
      each: 'random(0.5,3)',
      from: 'random',
    },
  })

  return t1
}
