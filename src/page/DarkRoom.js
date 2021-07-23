import React, {useState} from 'react'
import {useRouteActionContext} from '../context/RouteContext'
import {motion, AnimatePresence} from 'framer-motion'
import {containerVariant} from '../variable/MotionVariant'
import {MotionUtilities} from '../variable/MotionUtilities'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Content from '../layout/Content'
import ButtonSound from '../component/ButtonSound'
import ButtonNext from '../component/ButtonNext'
import bgSceneMD from '../image/page/darkroom/bg_scene_01_md.svg'
import bgSceneSM from '../image/page/darkroom/bg_scene_01_sm.svg'

// Motion Variants
const textVariantMD = {
  hidden: {
    opacity: 0,
  },
  show: {
    y: ["0%", "0%", "-100%"],
    opacity: [0, 1, 1],
    transition: {
      duration: MotionUtilities.speed.speedTwo,
      ease: "easeInOut",
      times: [0, 0.6, 1],
      delay: MotionUtilities.speed.speedOne
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
    opacity: [0, 1, 1, 1],
    transition: {
      duration: MotionUtilities.speed.speedTwo,
      ease: "easeInOut",
      times: [0, 0.4, 0.7, 1],
      delay: MotionUtilities.speed.speedOne
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
      duration: MotionUtilities.speed.speedOne,
      delay: MotionUtilities.speed.speedTwo,
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
    opacity: [0, 0, 0, 1],
    transition: {
      duration: MotionUtilities.speed.speedThree,
      ease: "easeInOut",
      times: [0, 0.4, 0.7, 1],
    },
  },
}

const buttonVariant = {
  hidden: {
    y: 50,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: MotionUtilities.speed.speedOne,
      delay: MotionUtilities.speed.speedThree
    }
  }
}

const DarkRoom = () => {
  const {changeCurrentPageContext} = useRouteActionContext()
  const isWindowSmall = UseWindowSmall()

  // state
  const [animateComplete, setAnimateComplete] = useState(false)

  // function
  const goToNextPage = () => {
    if (animateComplete) {
      changeCurrentPageContext('TurnOnLight')
    }
  }

  const completedAnimate = () => setAnimateComplete(true)

  const touchPanelSm = () => {
    if (isWindowSmall && animateComplete) {
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
            onAnimationComplete={completedAnimate}
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
          onAnimationComplete={completedAnimate}
        >
          <img className="dark-room__image dark-room__image--md" src={ bgSceneMD } alt="dark room background" />
        </motion.div>
      )
    }
  }

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ButtonSound />
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
                >
                  <ButtonNext onClick={goToNextPage} />
                </motion.div>
              }
            </motion.div>
          </div>
        </div>
      </Content>
    </motion.div>
  )
}

export default DarkRoom
