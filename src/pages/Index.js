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
import bgmStart from '../assets/sounds/bg-sound-start.mp3'
import bgmSiren from '../assets/sounds/bg-sound-siren.mp3'
import bgmInvestigation from '../assets/sounds/bg-sound-investigation.mp3'
import bgmSunshine from '../assets/sounds/bg-sound-sunshine.mp3'

// Effect
import effectClick from '../assets/sounds/sound-click.mp3'

const bgAudio = new Audio()
  bgAudio.volume = 0.3
  bgAudio.loop = true

const effectAudio = new Audio()
effectAudio.src = effectClick

const Index = () => {
  // context
  const {currentPageContext} = useRouteStateContext()
  const {muteContext} = useSoundStateContext()

  // function
  const renderPage = () => {
    if (currentPageContext === 'Start') {
      return <Start bgAudio={bgAudio} effectAudio={effectAudio} />
    } else if (currentPageContext === 'Preface') {
      return <Preface effectAudio={effectAudio} />
    } else if (currentPageContext === 'DarkRoom') {
      return <DarkRoom effectAudio={effectAudio} />
    } else if (currentPageContext === 'TurnOnLight') {
      return <TurnOnLight effectAudio={effectAudio} />
    } else if (currentPageContext === 'FriendSleep') {
      return <FriendSleep effectAudio={effectAudio} />
    } else if (currentPageContext === 'WakeFriendUp') {
      return <WakeFriendUp effectAudio={effectAudio} />
    } else if (currentPageContext === 'CallPolice') {
      return <CallPolice bgAudio={bgAudio} effectAudio={effectAudio} />
    } else if (currentPageContext === 'PoliceCame') {
      return <PoliceCame effectAudio={effectAudio} />
    } else if (currentPageContext === 'Siren') {
      return <Siren effectAudio={effectAudio} />
    } else if (currentPageContext === 'Investigate') {
      return <Investigate effectAudio={effectAudio}  />
    } else if (currentPageContext === 'DeadBody') {
      return <DeadBody effectAudio={effectAudio} />
    } else if (currentPageContext === 'Murder') {
      return <Murder effectAudio={effectAudio} />
    } else if (currentPageContext === 'Evidence') {
      return <Evidence effectAudio={effectAudio} />
    } else if (currentPageContext === 'VideoDoctor') {
      return <VideoDoctor effectAudio={effectAudio} />
    } else if (currentPageContext === 'CausesOfDiabetes') {
      return <CausesOfDiabetes effectAudio={effectAudio} />
    } else if (currentPageContext === 'Summary') {
      return <Summary effectAudio={effectAudio} />
    } else if (currentPageContext === 'ResultSymptoms') {
      return <ResultSymptoms effectAudio={effectAudio} />
    } else if (currentPageContext === 'Suggestion') {
      return <Suggestion effectAudio={effectAudio} />
    } else if (currentPageContext === 'End') {
      return <End effectAudio={effectAudio} />
    }
  }


  // useEffect
  useEffect(() => {
    if (muteContext) {
      bgAudio.muted = true
    } else {
      bgAudio.muted = false
    }
  }, [muteContext])

  useEffect(() => {
    if (currentPageContext === 'Start') {
      bgAudio.src = bgmStart
    } else if (currentPageContext === 'PoliceCame') {
      bgAudio.pause()
      bgAudio.src = bgmSiren
      bgAudio.play()
    } else if (currentPageContext === 'Investigate') {
      bgAudio.pause()
      bgAudio.src = bgmInvestigation
      bgAudio.play()
    } else if (currentPageContext === 'VideoDoctor') {
      bgAudio.pause()
    } else if (currentPageContext === 'CausesOfDiabetes') {
      bgAudio.src = bgmSunshine
      bgAudio.play()
    }
  }, [currentPageContext])

  return (
    <>
      {
        renderPage()
      }
    </>
  )
}

export default Index
