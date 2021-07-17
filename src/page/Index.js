import React from 'react'
import {useRouteStateContext} from '../context/RouteContext'
import Start from './Start'
import Preface from './Preface'
import DarkRoom from './DarkRoom'
import FriendSleep from './FriendSleep'
import WakeFriendUp from './WakeFriendUp'
// import CallPolice from './CallPolice'
// import PoliceCame from './PoliceCame'
// import Siren from './Siren'
// import OpenSwitch from './OpenSwitch'

const listPages = ['start', 'preface', 'dark-room', 'friend-sleep', 'wake-friend-up', 'call-police', 'police-came', 'siren']

const Index = () => {
  const {currentPageContext} = useRouteStateContext()

  return (
    <div className="page-content">
      <WakeFriendUp />
    </div>
  )
}

export default Index
