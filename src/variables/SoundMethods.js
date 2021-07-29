export const playSoundClick = (audio, mute) => {
  if (!mute) {
    audio.currentTime = 0
    audio.play()
  }
}