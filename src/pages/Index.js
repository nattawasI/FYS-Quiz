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

const bgAudio = new Audio()
bgAudio.volume = 0.3
bgAudio.loop = true

const Index = () => {
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
      return <CallPolice />
    } else if (currentPageContext === 'PoliceCame') {
      return <PoliceCame />
    } else if (currentPageContext === 'Siren') {
      return <Siren />
    } else if (currentPageContext === 'Investigate') {
      return <Investigate />
    } else if (currentPageContext === 'DeadBody') {
      return <DeadBody />
    } else if (currentPageContext === 'Murder') {
      return <Murder />
    } else if (currentPageContext === 'Evidence') {
      return <Evidence />
    } else if (currentPageContext === 'VideoDoctor') {
      return <VideoDoctor />
    } else if (currentPageContext === 'CausesOfDiabetes') {
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
