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

  // var player
  // function onYouTubeIframeAPIReady() {
  //   player = new YT.Player(id, {
  //     videoId: id,
  //     playerVars: {
  //       autoplay: 1,
  //       controls: 0,
  //       loop: 0,
  //       modestbranding: 1,
  //       playsinline: 0,
  //       mute: 0,
  //     },
  //     events: {
  //       onReady: onPlayerReady,
  //     },
  //   })
  // }

  // function onPlayerReady(event) {
  //   event.target.playVideo()
  // }
}
