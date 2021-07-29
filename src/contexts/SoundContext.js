import React, {useState, createContext, useContext} from 'react'
import effectClick from '../assets/sounds/sound-click.mp3'
import useSound from 'use-sound'

const SoundStateContext = createContext()
const SoundActionContext = createContext()

export const useSoundStateContext = () => {
  return useContext(SoundStateContext)
}

export const useSoundActionContext = () => {
  return useContext(SoundActionContext)
}

const SoundProvider = ({ children }) => {
  // useSound
  const [playClickSound] = useSound(effectClick)

  // state
  const [muteContext, setMuteContext] = useState(false)

  // action
  const toggleMuteSoundContext = () => {
    setMuteContext(!muteContext)
  }

  const playClickSoundContext = () => {
    if (!muteContext) {
      playClickSound()
    }
  }

  const soundStateStore = {
    muteContext,
  }

  const soundActionStore = {
    toggleMuteSoundContext,
    playClickSoundContext
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