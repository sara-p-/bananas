// Opening the window
export let windowObject

export function openWindow(url, features) {
  windowObject = window.open(url, '_blank', features)
}

// Forced Window Resize
export function resizeWindow() {
  window.resizeTo(window.screen.availWidth / 2, window.screen.availHeight / 2)
}
