import React, {useState, createContext, useContext} from 'react'

// Effect sound
import ClickAudio from '../assets/sounds/sound-click.mp3'
import SwitchAudio from '../assets/sounds/sound-switch.mp3'
import DialingPhoneAudio from '../assets/sounds/sound-dialing-phone.mp3'
import PhoneCallAudio from '../assets/sounds/sound-phone-call.mp3'
import CardAudio from '../assets/sounds/sound-card.mp3'

// BG sound
import StartAudio from '../assets/sounds/bg-sound-start.mp3'
import HorrowAudio from '../assets/sounds/bg-sound-spooky-horror.mp3'
import SirenAudio from '../assets/sounds/bg-sound-siren.mp3'
import InvestigationAudio from '../assets/sounds/bg-sound-investigation.mp3'
import SunshineAudio from '../assets/sounds/bg-sound-sunshine.mp3'

const SoundStateContext = createContext()
const SoundActionContext = createContext()

export const useSoundStateContext = () => {
  return useContext(SoundStateContext)
}

export const useSoundActionContext = () => {
  return useContext(SoundActionContext)
}

// Effect Sounds
const soundClick = new Audio(ClickAudio)
const soundSwitch = new Audio(SwitchAudio)
const soundDialingPhone = new Audio(DialingPhoneAudio)
const soundPhoneCall = new Audio(PhoneCallAudio)
const soundCard = new Audio(CardAudio)

// Bg Sounds
const bgmDuration = 1000
const soundStart = new Audio(StartAudio)
const soundHorrow = new Audio(HorrowAudio)
const soundSiren = new Audio(SirenAudio)
const soundInvestigation = new Audio(InvestigationAudio)
const soundSunshine = new Audio(SunshineAudio)

// set loop
soundStart.loop = true
soundHorrow.loop = true
soundSiren.loop = true
soundInvestigation.loop = true
soundSunshine.loop = true

const SoundProvider = ({ children }) => {
  // state
  const [muteContext, setMuteContext] = useState(false)

  // action
  const toggleMuteSoundContext = () => {
    playClickSoundContext()

    console.log(muteContext);

    if (muteContext) {
      soundStart.muted = false
      soundHorrow.muted = false
      soundSiren.muted = false
      soundInvestigation.muted = false
      soundSunshine.muted = false
      setMuteContext(false)
    } else {
      soundStart.muted = true
      soundHorrow.muted = true
      soundSiren.muted = true
      soundInvestigation.muted = true
      soundSunshine.muted = true
      setMuteContext(true)
    }
  }

  // Effect Sound
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

  const playDailingSoundContext = () => {
    if (!muteContext) {
      soundDialingPhone.play()

      setTimeout(() => {
        soundDialingPhone.pause()
      }, 550);
    }
  }

  const playPhoneCallSoundContext = () => {
    if (!muteContext) {
      soundPhoneCall.play()

      setTimeout(() => {
        soundPhoneCall.pause()
      }, 2000)
    }
  }

  const playCardSoundContext = () => {
    if (!muteContext) {
      soundCard.play()
    }
  }

  // BG Sound
  const playStartSoundContext = () => {
    if (!muteContext) {
      soundClick.play()

      setTimeout(() => {
        soundStart.play()
      }, bgmDuration);
    }
  }

  const playHorrowSoundContext = () => {
    if (!muteContext) {
      soundStart.pause()

      setTimeout(() => {
        soundHorrow.play()
      }, bgmDuration);
    }
  }

  const playSirenSoundContext = () => {
    if (!muteContext) {
      soundHorrow.pause()

      setTimeout(() => {
        soundSiren.play()
      }, bgmDuration);
    }
  }

  const playInvestigationSoundContext = () => {
    if (!muteContext) {
      soundSiren.pause()

      setTimeout(() => {
        soundInvestigation.play()
      }, bgmDuration);
    }
  }

  const playSunshineSoundContext = () => {
    if (!muteContext) {
      soundInvestigation.pause()

      setTimeout(() => {
        soundSunshine.play()
      }, bgmDuration);
    }
  }

  const soundStateStore = { // use this pass to value
    muteContext,
  }

  const soundActionStore = { // use this pass to value
    toggleMuteSoundContext,

    // Effect Sound
    playClickSoundContext,
    playSwitchSoundContext,
    playDailingSoundContext,
    playPhoneCallSoundContext,
    playCardSoundContext,

    // BG Sound
    playStartSoundContext,
    playHorrowSoundContext,
    playSirenSoundContext,
    playInvestigationSoundContext,
    playSunshineSoundContext
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