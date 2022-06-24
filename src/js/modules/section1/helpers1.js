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
