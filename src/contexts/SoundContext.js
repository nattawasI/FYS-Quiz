import React, { useState, createContext, useContext } from 'react'
import ClickAudio from '../assets/sounds/sound-click.mp3'

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

  // state
  const [muteContext, setMuteContext] = useState(false)

  // function
  // play click sound when click any Button
  const playClickSoundContext = () => {
    if (!muteContext) {
      soundClick.play()
    }
  }

  const toggleMuteSoundContext = () => {
    playClickSoundContext()
    setMuteContext(!muteContext)
  }

  const soundStateStore = { // use this pass to value
    muteContext,
  }

  const soundActionStore = { // use this pass to value
    playClickSoundContext,
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