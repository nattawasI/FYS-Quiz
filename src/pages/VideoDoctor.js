import React, {useState, useRef, useEffect} from 'react'
import {useRouteActionContext} from '../contexts/RouteContext'
import {useSoundActionContext} from '../contexts/SoundContext'
import {motion} from 'framer-motion'
import UseWindowSmall from '../hooks/useWindowSmall'
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
      duration: 0.7,
      delay: 3
    }
  }
}

const VideoDoctor = () => {
  // context
  const {changeCurrentPageContext} = useRouteActionContext()
  const {playClickSoundContext} = useSoundActionContext()

  // hooks
  const isWindowSmall = UseWindowSmall()

  // ref
  const titleRef = useRef(null)

  // state
  const [completedScene, setCompletedScene] = useState(false)
  const [marginTop, setMarginTop] = useState(0)

  // function
  const goToNextPage = () => {
    playClickSoundContext()
    changeCurrentPageContext('CausesOfDiabetes')
  }

  useEffect(() => {
    if (isWindowSmall) {
      setMarginTop((titleRef.current.offsetHeight/2) * -1)
    }
  }, [isWindowSmall])

  return (
    <>
      <Content bgColor="blue">
        <div className="scene-panel scene-panel--items-center video-doctor" style={{ marginTop: `${marginTop}px`}}>
          <div ref={titleRef} className="video-doctor__heading text-story">กดเพื่อรับชมวิดิโอ</div>
          <div className="video-doctor__video video-wrap">
            <div className="video-box">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Q_1bBPd9V0I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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

export default VideoDoctor
