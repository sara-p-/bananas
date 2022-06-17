// Spot Animation Frames
export function createSpotFrame(index) {
  const spot = document.createElement('div')
  spot.classList.add('spot-animation__item', 'spot-animation__item--' + index)

  return spot
}
