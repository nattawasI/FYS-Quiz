import React, {useState, createContext, useContext, useEffect} from 'react'
import {useRouteStateContext} from '../contexts/RouteContext'

// Button sound
import ClickAudio from '../assets/sounds/sound-click.mp3'
import SwitchAudio from '../assets/sounds/sound-switch.mp3'

// Scene sound
import startAudio from '../assets/sounds/bg-sound-start.mp3'

const SoundStateContext = createContext()
const SoundActionContext = createContext()

export const useSoundStateContext = () => {
  return useContext(SoundStateContext)
}

export const useSoundActionContext = () => {
  return useContext(SoundActionContext)
}

const SoundProvider = ({ children }) => {
  // Sounds
  const soundClick = new Audio(ClickAudio)
  const soundSwitch = new Audio(SwitchAudio)

  // context
  const {currentPageContext} = useRouteStateContext()

  // state
  const [muteContext, setMuteContext] = useState(false)

  // function
  // play click sound when click any Button
  const playClickSoundContext = () => {
    if (!muteContext) {
      soundClick.play()
    }
  }

  const playSwitchSoundContext = () => {
    if (!muteContext) {
      soundSwitch.play()
    }
  }

  const toggleMuteSoundContext = () => {
    playClickSoundContext()
    setMuteContext(!muteContext)
  }

  const autoPlay = (audio) => {
    const audioPromise = audio.play()
    if (audioPromise !== undefined) {
      audioPromise
        .then(_ => {
          // autoplay started
          setTimeout(() => {
            audio.play()
          }, 500)
        })
        .catch(err => {
          // catch dom exception
          console.log(err)
        })
    }
  }

  useEffect(() => {
    if (currentPageContext === 'Start') {
      const soundStart = new Audio(startAudio)
      autoPlay(soundStart)
    }
  }, [currentPageContext])

  const soundStateStore = { // use this pass to value
    muteContext,
  }

  const soundActionStore = { // use this pass to value
    playClickSoundContext,
    playSwitchSoundContext,
    toggleMuteSoundContext,
  }

  return (
    <>
      <SoundStateContext.Provider value={ soundStateStore }>
        <SoundActionContext.Provider value={ soundActionStore }>
          { children }
        </SoundActionContext.Provider>
      </SoundStateContext.Provider>
    </>
  )
}

export default SoundProvider