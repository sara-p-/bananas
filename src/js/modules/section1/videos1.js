import YTPlayer from 'yt-player'
export function spotVideo(target, id) {
  const player = new YTPlayer(target, [
    'controls=0',
    'modestBranding=1',
    'mute=1',
    'autoplay=1',
  ])

  player.load(id)
  player.play()
}
