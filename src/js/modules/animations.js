import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function animationSpace() {
  const space = document.querySelector('.background__image--space-fade')
  const section1 = document.querySelector('#section1')

  gsap.set(space, {
    top: '-100%',
  })

  gsap.to(space, {
    scrollTrigger: {
      trigger: section1,
      pin: true,
      start: 'top top',
      scrub: 1,
    },
    top: 0,
  })
}
