import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useRouteActionContext} from '../contexts/RouteContext'
import {motion} from 'framer-motion'
import Content from '../layout/Content'
import ButtonNext from '../components/ButtonNext'

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

const VideoDoctor = ({soundPlay}) => {
  // context
  const {changeCurrentPageContext} = useRouteActionContext()

  // state
  const [completedScene, setCompletedScene] = useState(false)

  // function
  const goToNextPage = () => {
    soundPlay.play()
    changeCurrentPageContext('CausesOfDiabetes')
  }

  return (
    <>
      <Content bgColor="blue">
        <div className="scene-panel scene-panel--items-center video-doctor">
          <div className="video-doctor__heading text-story">กดเพื่อรับชมวิดิโอ</div>
          <div className="video-doctor__video video-wrap">
            <div className="video-box">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/cgT9cwJVkLw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </Content>
      <motion.div className="button-fixed-right-bottom"
        variants={buttonVariant}
        initial="hidden"
        animate="show"
        onAnimationComplete={() => setCompletedScene(true)}
      >
        <ButtonNext onClick={goToNextPage} animateCompleted={completedScene} />
      </motion.div>
    </>
  )
}

VideoDoctor.propTypes = {
  soundPlay: PropTypes.object.isRequired,
}

export default VideoDoctor
