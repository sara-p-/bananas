import {
  spotAnimation,
  spotAnimationNew,
  spotTimeline,
  spot,
} from './animations1'

// openTab - Function that opens a new tab depending on the url query params of the current tab
export function openTab(url, number) {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const pageNumber = parseInt(urlParams.get('number'))
  // let openedWindow
  let urlQuery

  if (pageNumber < number) {
    urlQuery = '?number=' + (pageNumber + 1)
    window.open(url + urlQuery, 'window-' + (pageNumber + 1))
  }
}

// closeTab - Function that closes changes the focus to the previous window and then closes originating tab
function closeTab(number) {
  let currentWindow = window.open('', 'window-' + number)
  let previousWindow = window.open('', 'window-' + (number - 1))
  previousWindow.focus()
  currentWindow.close()
}

// multiWindowAnimation - Function that runs certain scripts depending on the current page URL
export function multiWindowAnimation(target, url, number) {
  let currentUrl = window.location.pathname
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const pageNumber = parseInt(urlParams.get('number'))
  let animationForward = spot('forwards', openTab, url, number)
  let animationLast = spot('last', closeTab, number)

  // Is it the Home Page?
  if (currentUrl.includes(url)) {
    // If not, is it the last page?
    if (pageNumber == number) {
      // If last page, change the direction after the animation completes
      animationLast.reverse()
    }
    animationForward.play()
    // spotAnimation(openTab, url, number)
  } else {
    const button = document.querySelector(target)
    button.addEventListener('click', (e) => {
      window.open(url + '?number=0')
    })
  }
}
