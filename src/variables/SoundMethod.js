import ClickAudio from '../assets/sounds/sound-click.mp3'

export const playClick = (mute) => {
  const soundClick = new Audio(ClickAudio)
  if (!mute) {
    soundClick.play()
  }
}