import React from 'react'
import Lottie from 'react-lottie'
import animateLoader from '../../assets/images/lottie/loader.json'

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animateLoader,
  }

  return (
    <div className="app-loading">
      <Lottie
	      options={defaultOptions}
        height={100}
        width={100}
      />
    </div>
  )
}

export default Loading
