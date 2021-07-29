import React, {useState} from 'react'
import {useRouteActionContext} from '../contexts/RouteContext'
import {useSoundStateContext} from '../contexts/SoundContext'
import {motion, AnimatePresence} from 'framer-motion'
import UseWindowSmall from '../hooks/useWindowSmall'
import Content from '../layout/Content'
import ButtonNext from '../components/ButtonNext'
import bgSceneMD from '../assets/images/page/darkroom/bg_scene_01_md.svg'
import bgSceneSM from '../assets/images/page/darkroom/bg_scene_01_sm.svg'
import {playSoundClick} from '../variables/SoundMethods'

// Motion Variants
const textVariantMD = {
  hidden: {
    opacity: 0,
  },
  show: {
    y: ["0%", "0%", "-100%"],
    opacity: [
      0,
      1,
      1,
    ],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.6, 1],
      delay: 1
    }
  },
}

const textVariantSM = {
  hidden: {
    y: "5%",
    opacity: 0,
  },
  show: {
    y: ["5%", "0%", "0%", "-200%"],
    opacity: [
      0,
      1,
      1,
      1,
    ],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.4, 0.7, 1],
      delay: 1
    }
  }
}

const backgroundVariantMD = {
  hidden: {
    originY: 1,
    x: "-50%",
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 2,
      ease: "easeInOut",
    }
  },
}

const backgroundVariantSM = {
  hidden: {
    x: "-50%",
    y: 190,
    opacity: 0,
  },
  show: {
    y: [190, 190, 190, 0],
    opacity: [
      0,
      0,
      0,
      1,
    ],
    transition: {
      duration: 3,
      ease: "easeInOut",
      times: [0, 0.4, 0.7, 1],
    },
  },
}

const buttonVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 3
    }
  }
}

const DarkRoom = ({effectAudio}) => {
  // context
  const {changeCurrentPageContext} = useRouteActionContext()
  const {muteContext} = useSoundStateContext()

  // hooks
  const isWindowSmall = UseWindowSmall()

  // state
  const [completedScene, setCompletedScene] = useState(false)

  // function
  const goToNextPage = () => {
    effectAudio.play()
    if (completedScene) {
      changeCurrentPageContext('TurnOnLight')
    }
  }

  const touchPanelSm = () => {
    if (isWindowSmall && completedScene) {
      playSoundClick(muteContext)
      goToNextPage()
    }
  }

  // function for rendering
  const renderBackground = () => {
    if (isWindowSmall) {
      return (
        <AnimatePresence>
          <motion.div
            className="dark-room__figure"
            variants={ backgroundVariantSM }
            initial="hidden"
            animate="show"
            onAnimationComplete={() => setCompletedScene(true)}
          >
            <img className="dark-room__image dark-room__image--sm" src={ bgSceneSM } alt="dark room background" />
          </motion.div>
        </AnimatePresence>
      )
    } else {
      return (
        <motion.div
          className="dark-room__figure"
          variants={backgroundVariantMD}
          initial="hidden"
          animate="show"
        >
          <img className="dark-room__image dark-room__image--md" src={ bgSceneMD } alt="dark room background" />
        </motion.div>
      )
    }
  }

  return (
    <>
      <Content>
        <div className="scene-panel dark-room" onClick={touchPanelSm}>
          {
            renderBackground()
          }
          <div className="dark-room__container">
            <motion.div
              className="dark-room__text text-story"
              variants={ isWindowSmall ? textVariantSM : textVariantMD}
              initial="hidden"
              animate="show"
            >
              คุณตื่นขึ้นมากลางดึก<br/>แล้วมีเเต่ความมืดสลัว
              {
                !isWindowSmall &&
                <motion.div
                  className="dark-room__button"
                  variants={buttonVariant}
                  initial="hidden"
                  animate="show"
                  onAnimationComplete={() => setCompletedScene(true)}
                >
                  <ButtonNext onClick={goToNextPage} animateCompleted={completedScene} />
                </motion.div>
              }
            </motion.div>
          </div>
        </div>
      </Content>
    </>
  )
}

export default DarkRoom
