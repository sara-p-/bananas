import gsap from 'gsap'
import { multiWindowAnimationForward, directionBack } from './helpers1'
import { spotAnimation } from './animations1'

export default function section1() {
  // Multi box bouncing spot animation
  const button = document.querySelector('.button--test')
  const spot = document.querySelector('.spot__item')
  const pathReverse = document.querySelector('.spot__path--reverse')
  const animation = spotAnimation()

  gsap.set(spot, {
    motionPath: {
      path: pathReverse,
      align: pathReverse,
      alignOrigin: [0.5, 0.5],
    },
  })

  button.addEventListener('click', (e) => {
    animation.play()
  })
}
