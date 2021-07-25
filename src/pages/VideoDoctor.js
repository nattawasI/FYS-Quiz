import React, {useRef, useState} from 'react'
import {useRouteActionContext} from '../contexts/RouteContext'
import {motion} from 'framer-motion'
import Content from '../layout/Content'
import ButtonNext from '../components/ButtonNext'
import VideoDoctorMp4 from '../assets/images/page/video-doctor/doctor.mp4'
import ImgPosterDoctor from '../assets/images/page/video-doctor/img_poster_doctor.svg'

// Motion Variants
const buttonVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.2
    }
  }
}

const VideoDoctor = () => {
  // route context
  const {changeCurrentPageContext} = useRouteActionContext()

  // ref
  const videoRef = useRef(null)

  // state
  const [isPlaying, setIsplaying] = useState(false)

  // function
  const goToNextPage = () => {
    changeCurrentPageContext('CausesOfDiabetes')
  }

  const handlePlay = () => {
    setTimeout(() => {
      setIsplaying(true)
    }, 1000)
  }

  return (
    <>
      <Content bgColor="blue">
        <div className="scene-panel scene-panel--items-center video-doctor">
          <div className="video-box">
            <video
              ref={videoRef}
              controls
              poster={ImgPosterDoctor}
              onPlaying={handlePlay}
              playsInline
            >
              <source src={VideoDoctorMp4} type="video/mp4" />
            </video>
          </div>
        </div>
      </Content>
      {
        isPlaying
        && <motion.div className="button-fixed-right-bottom"
            variants={buttonVariant}
            initial="hidden"
            animate="show"
          >
            <ButtonNext onClick={goToNextPage} />
          </motion.div>
      }
    </>
  )
}

export default VideoDoctor
