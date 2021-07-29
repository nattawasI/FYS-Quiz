import React, {useEffect} from 'react'
import {useRouteStateContext} from '../contexts/RouteContext'
import {useSoundStateContext} from '../contexts/SoundContext'
import Start from './Start'
import Preface from './Preface'
import DarkRoom from './DarkRoom'
import TurnOnLight from './TurnOnLight'
import FriendSleep from './FriendSleep'
import WakeFriendUp from './WakeFriendUp'
import CallPolice from './CallPolice'
import PoliceCame from './PoliceCame'
import Siren from './Siren'
import Investigate from './Investigate'
import DeadBody from './DeadBody'
import Murder from './Murder'
import Evidence from './Evidence'
import VideoDoctor from './VideoDoctor'
import CausesOfDiabetes from './CausesOfDiabetes'
import Summary from './Summary'
import ResultSymptoms from './ResultSymptoms'
import Suggestion from './Suggestion'
import End from './End'

// Audio
import SirenAudio from '../assets/sounds/bg-sound-siren.mp3'
import InvestigationAudio from '../assets/sounds/bg-sound-investigation.mp3'
import SunshineAudio from '../assets/sounds/bg-sound-sunshine.mp3'

const Index = () => {
  const bgAudio = new Audio()
  bgAudio.volume = 0.3
  bgAudio.loop = true

  const effectAudio = new Audio()

  // context
  const {currentPageContext} = useRouteStateContext()
  const {muteContext} = useSoundStateContext()

  // function
  const renderPage = () => {
    if (currentPageContext === 'Start') {
      return <Start bgAudio={bgAudio} />
    } else if (currentPageContext === 'Preface') {
      return <Preface />
    } else if (currentPageContext === 'DarkRoom') {
      return <DarkRoom />
    } else if (currentPageContext === 'TurnOnLight') {
      return <TurnOnLight />
    } else if (currentPageContext === 'FriendSleep') {
      return <FriendSleep />
    } else if (currentPageContext === 'WakeFriendUp') {
      return <WakeFriendUp />
    } else if (currentPageContext === 'CallPolice') {
      // return <CallPolice soundPause={bgSoundStart} soundPlay={SirenAudio} />
      return <CallPolice bgAudio={bgAudio} soundPause={StartAudio} soundPlay={SirenAudio} />
    } else if (currentPageContext === 'PoliceCame') {
      return <PoliceCame />
    } else if (currentPageContext === 'Siren') {
      // return <Siren soundPause={bgSoundSiren} soundPlay={bgSoundInvestigation} />
      return <Siren />
    } else if (currentPageContext === 'Investigate') {
      return <Investigate />
    } else if (currentPageContext === 'DeadBody') {
      return <DeadBody />
    } else if (currentPageContext === 'Murder') {
      return <Murder />
    } else if (currentPageContext === 'Evidence') {
      // return <Evidence soundPause={bgSoundInvestigation} />
      return <Evidence />
    } else if (currentPageContext === 'VideoDoctor') {
      // return <VideoDoctor soundPlay={bgSoundSunshine} />
      return <VideoDoctor />
    } else if (currentPageContext === 'CausesOfDiabetes') {
      // return <CausesOfDiabetes soundPause={bgSoundSunshine} />
      return <CausesOfDiabetes />
    } else if (currentPageContext === 'Summary') {
      return <Summary />
    } else if (currentPageContext === 'ResultSymptoms') {
      return <ResultSymptoms />
    } else if (currentPageContext === 'Suggestion') {
      return <Suggestion />
    } else if (currentPageContext === 'End') {
      return <End />
    }
  }


  // useEffect
  useEffect(() => {
    if (muteContext) {
      // bgSoundStart.muted = true
      // bgSoundSiren.muted = true
      // bgSoundInvestigation.muted = true
      // bgSoundSunshine.muted = true
    } else {
      // bgSoundStart.muted = false
      // bgSoundSiren.muted = false
      // bgSoundInvestigation.muted = false
      // bgSoundSunshine.muted = false
    }
  }, [muteContext])

  return (
    <>
      {
        renderPage()
      }
    </>
  )
}

export default Index
