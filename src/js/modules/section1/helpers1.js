import YouTubePlayer from 'youtube-player'

export function spotVideo(target, id) {
  let player

  player = YouTubePlayer(target, {
    // videoId: id,
    controls: 0,
    modestbranding: 1,
    mute: 1,
    autoplay: 1,
  })

  player.loadVideoById(id)
}

// randomNumberBetween - function to provide a random number between the min and max given
export function randomNumberBetween(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}
