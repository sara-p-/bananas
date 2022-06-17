import { animationSpace } from './animations'
import { resizeWindow } from './helpers'

export default function fullScript() {
  // animationSpace()
  const gem1 = document.querySelector('.gem1')

  gem1.addEventListener('click', (e) => {
    resizeWindow()
  })
}
