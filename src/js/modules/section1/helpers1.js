import {
  spotAnimation,
  spotAnimationNew,
  spotTimeline,
  spotLastTimeline,
} from './animations1'

// Broadcast Channel
const bc = new BroadcastChannel('test_channel')

// openTab - Function that opens a new tab depending on the url query params of the current tab
export function openTab(url, number) {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const pageNumber = parseInt(urlParams.get('number'))
  let urlQuery

  localStorage.setItem('window-' + pageNumber, 'back')

  if (pageNumber < number) {
    urlQuery = '?number=' + (pageNumber + 1)
    window.open(url + urlQuery, 'window-' + (pageNumber + 1))
  }
}

// closeTab - Function that closes changes the focus to the previous window and then closes originating tab
function closeTab(number) {
  let currentWindow = window.open('', 'window-' + number)
  let previousWindow = window.open('', 'window-' + (number - 1))

  // previousWindow.location.reload()
  previousWindow.focus()
  currentWindow.close()

  // bc.postMessage('update_direction')
}

// multiWindowAnimation - Function that runs certain scripts depending on the current page URL
export function multiWindowAnimation(target, url, number) {
  let currentUrl = window.location.pathname
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const pageNumber = parseInt(urlParams.get('number'))
  let animationForward = spotTimeline('#path--forward', openTab, url, number)
  let animationLast = spotLastTimeline(closeTab, number)
  let animationReverse = spotTimeline('#path--reverse', closeTab, number, url)
  localStorage.clear()
  console.log(localStorage)

  bc.onmessage = (messageEvent) => {
    if (messageEvent.data == 'update_page_direction') {
    }
  }

  // Is it the Home Page?
  if (currentUrl.includes(url)) {
    if (pageNumber == number) {
      animationLast.play()
    } else if (localStorage.getItem('window-' + pageNumber) == 'back') {
      animationReverse.play()
    } else {
      animationForward.play()
    }
  } else {
    const button = document.querySelector(target)
    button.addEventListener('click', (e) => {
      window.open(url + '?number=0')
    })
  }
}
