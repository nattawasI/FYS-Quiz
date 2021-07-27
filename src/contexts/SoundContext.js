import React, {useState, createContext, useContext} from 'react'

const SoundStateContext = createContext()
const SoundActionContext = createContext()

export const useSoundStateContext = () => {
  return useContext(SoundStateContext)
}

export const useSoundActionContext = () => {
  return useContext(SoundActionContext)
}

const SoundProvider = ({ children }) => {
  // state
  const [muteContext, setMuteContext] = useState(false)

  // action
  const toggleMuteSoundContext = () => {
    setMuteContext(!muteContext)
  }

  const soundStateStore = {
    muteContext,
  }

  const soundActionStore = {
    toggleMuteSoundContext
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