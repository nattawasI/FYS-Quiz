import React, {useState} from 'react'
import {useRouteActionContext} from '../context/RouteContext'
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
    y: [0, 0, -270],
    opacity: [0, 1, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.5, 1],
      delay: 0.5
    }
  },
}

const textVariantSM = {
  hidden: {
    y: 25,
    opacity: 0,
  },
  show: {
    y: [25, 0, 0, -200],
    opacity: [0, 1, 1, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      times: [0, 0.4, 0.7, 1],
      delay: 0.5
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
      ease: "easeInOut",
      delay: 1.5,
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
      times: [0, 0.4, 0.7, 1],
      delay: 0.5
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
      duration: 0.7,
      delay: 2.5
    }
  }
}

const DarkRoom = () => {
  const {changeCurrentPageContext} = useRouteActionContext()
  const isWindowSmall = UseWindowSmall()

  // state
  const [skipAnimate, setSkipAnimate] = useState(false)
  const [animateComplete, setAnimateComplete] = useState(false)

  // function
  const goToNextPage = () => {
    changeCurrentPageContext('TurnOnLight')
  }

  const touchPanelSm = () => {
    if (isWindowSmall) {
      if (animateComplete) {
        goToNextPage()
      }
      // else {
      //   if (!skipAnimate) {
      //     setAnimateComplete(true)
      //     setSkipAnimate(true)
      //   }
      // }
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
              <ButtonNext onClick={goToNextPage} />
            </motion.div>
          </motion.div>
        </>
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
          <div key="darkroom-02" className="dark-room__container">
            {
              renderText()
            }
          </div>
        </div>
      </Content>
    </motion.div>
  )
}

export default DarkRoom
