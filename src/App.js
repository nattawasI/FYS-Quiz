import React from 'react'
import './style/App.scss'
import FriendDead from './pages/FriendDead'
// import CallPolice from './pages/CallPolice'
// import PoliceCame from './pages/PoliceCame'
// import Siren from './pages/Siren'


const App = () => {
  return (
    <div className="App">
      <FriendDead nameFriend="ปิยะบุตร" />
      {/* <CallPolice /> */}
      {/* <PoliceCame /> */}
      {/* <Siren /> */}
    </div>
  );
}

export default App;
