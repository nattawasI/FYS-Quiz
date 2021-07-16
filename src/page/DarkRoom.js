import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {motion, AnimatePresence} from 'framer-motion'
import {containerVariant} from '../variable/MotionVariant'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Content from '../layout/Content'
import ButtonSound from '../component/ButtonSound'
import ButtonNext from '../component/ButtonNext'
import bgSceneMD from '../image/page/darkroom/bg_scene_01_md.svg'
import bgSceneSM from '../image/page/darkroom/bg_scene_01_sm.svg'

// Motion Variants
const textVariantMD = {
  hidden: {
    y: 0,
    opacity: 0,
  },
  show: {
    y: [0, 0, -300],
    opacity: [0, 1, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.5, 1]
    }
  },
}

const textVariantSM = {
  hidden: {
    y: 25,
    opacity: 0,
  },
  show: {
    y: [25, 0, 0, -300],
    opacity: [0, 1, 1, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.4, 0.7, 1]
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
      delay: 1,
      duration: 0.9,
      ease: "easeInOut",
    }
  },
}

const backgroundVariantSM = {
  hidden: {
    y: 0,
    opacity: 0,
  },
  show: {
    y: [196, 196, 196, 0],
    opacity: [0, 0, 0, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.4, 0.7, 1]
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
      delay: 2,
      duration: 1,
    }
  }
}

const DarkRoom = () => {
  const isWindowSmall = UseWindowSmall()
  const history = useHistory()

  // state
  const [skipAnimate, setSkipAnimate] = useState(false)
  const [animateComplete, setAnimateComplete] = useState(false)

  // function
  const touchPanelSm = () => {
    if (isWindowSmall) {
      if (animateComplete) {
        history.push('/friend-sleep')
      } else {
        if (!skipAnimate) {
          setAnimateComplete(true)
          setSkipAnimate(true)
        }
      }
    }
  }

  // function for rendering
  const renderBackground = () => {
    if (isWindowSmall) {
      return (
        skipAnimate
        ? <div className="dark-room__figure">
            <img className="dark-room__image dark-room__image--sm" src={bgSceneSM} alt="" />
          </div>
        : <AnimatePresence>
            <motion.div
              key="darkroom-figure-02"
              className="dark-room__figure"
              initial="hidden"
              animate="show"
              variants={backgroundVariantSM}
              onAnimationComplete={ () => setAnimateComplete(true) }
            >
              <img className="dark-room__image dark-room__image--sm" src={bgSceneSM} alt="" />
            </motion.div>
          </AnimatePresence>
      )
    } else {
      return (
        <motion.div
          key="darkroom-figure-01"
          className="dark-room__figure"
          variants={backgroundVariantMD}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <img className="dark-room__image dark-room__image--md" src={bgSceneMD} alt="" />
        </motion.div>
      )
    }
  }

  const renderText = () => {
    if (isWindowSmall) {
      return (
        skipAnimate
        ? <div className="dark-room__text dark-room__text--static text-story">
            คุณตื่นขึ้นมากลางดึก<br/>แล้วมีเเต่ความมืดสลัว
          </div>
        : <AnimatePresence>
            <motion.div
              key="darkroom-text-02"
              className="dark-room__text text-story"
              initial="hidden"
              animate="show"
              variants={textVariantSM}
            >
              คุณตื่นขึ้นมากลางดึก<br/>แล้วมีเเต่ความมืดสลัว
            </motion.div>
          </AnimatePresence>
      )
    } else {
      return (
        <>
          <motion.div
            key="darkroom-text-01"
            className="dark-room__text text-story"
            variants={textVariantMD}
            initial="hidden"
            animate="show"
          >
            คุณตื่นขึ้นมากลางดึก<br/>แล้วมีเเต่ความมืดสลัว
            <motion.div
              className="dark-room__button"
              variants={buttonVariant}
              initial="hidden"
              animate="show"
            >
              <ButtonNext to="/friend-sleep" />
            </motion.div>
          </motion.div>
        </>
      )
    }
  }

  return (
    <>
      <ButtonSound />
      <Content>
        <motion.div className="scene-panel dark-room" onClick={touchPanelSm}
          variants={containerVariant}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {
            renderBackground()
          }
          <div key="darkroom-02" className="dark-room__container">
            {
              renderText()
            }
          </div>
        </motion.div>
      </Content>
    </>
  )
}

export default DarkRoom
