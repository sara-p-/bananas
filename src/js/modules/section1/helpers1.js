// import { spotTimeline, spotLastTimeline } from './animations1'

// Variables

// Broadcast Channel
const bc = new BroadcastChannel('test_channel')

// openTab - Function that opens a new tab depending on the url query params of the current tab
export function openTab(url, number) {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const pageNumber = parseInt(urlParams.get('number'))
  let urlQuery

  if (pageNumber < number) {
    urlQuery = '?number=' + (pageNumber + 1)
    window.open(url + urlQuery, 'window-' + (pageNumber + 1), 'popup=yes')
  }
}

// closeTab - Function that closes changes the focus to the previous window and then closes originating tab
function closeTab(number) {
  let currentWindow = window.open('', 'window-' + number)
  let previous = number - 1
  let previousWindow = window.open('', 'window-' + previous)
  // let lastWindow = window.open('', 'window-first')
  previousWindow.focus()
  // currentWindow.close()

  if (number !== 0) {
    bc.postMessage('update_page_direction')
  }
}

export function directionBack(url) {
  bc.onmessage = (messageEvent) => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const pageNumber = parseInt(urlParams.get('number'))
    let animationReverse = spotTimeline('#path--reverse', closeTab, pageNumber)
    if (window.location.pathname.includes(url)) {
      if (messageEvent.data == 'update_page_direction') {
        if (pageNumber == 0) {
          console.log('last page, putting focus on home')
          window.opener.focus()
        } else {
          localStorage.setItem('direction', 'back')
          animationReverse.play()
        }
      }
    } else {
      return
    }
  }
}

// multiWindowAnimation - Function that runs certain scripts depending on the current page URL
export function multiWindowAnimationForward(target, url, number) {
  let currentUrl = window.location.pathname
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const pageNumber = parseInt(urlParams.get('number'))
  let animationForward = spotTimeline('#path--forward', openTab, url, number)
  let animationLast = spotLastTimeline(closeTab, number)
  localStorage.clear()

  // Is it the Home Page?
  if (currentUrl.includes(url)) {
    if (pageNumber == number) {
      animationLast.play()
    } else if (
      pageNumber !== number &&
      localStorage.getItem('direction') === null
    ) {
      animationForward.play()
    }
  } else {
    const button = document.querySelector(target)
    button.addEventListener('click', (e) => {
      window.open(url + '?number=0', 'window-0', 'popup=yes')
    })
  }
}
