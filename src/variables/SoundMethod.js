import ClickAudio from '../assets/sounds/sound-click.mp3'

export const playSoundClick = (mute) => {
  const soundClick = new Audio(ClickAudio)
  if (!mute) {
    soundClick.play()
  }
}