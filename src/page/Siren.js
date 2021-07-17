import React, {useState} from 'react'
import {useRouteActionContext} from '../context/RouteContext'
import {motion, AnimatePresence} from 'framer-motion'
import {containerVariant} from '../variable/MotionVariant'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Content from '../layout/Content'
import ButtonSound from '../component/ButtonSound'
import ButtonNext from '../component/ButtonNext'

// Motion Variants
const textVariant = {
  hidden: {
    opacity: 0,
    y: 90
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.7,
      delay: 0.5,
    }
  },
}

const boxTextVariant = {
  hidden: {
    y: 0
  },
  show: {
    y: -170,
    transition: {
      ease: "easeInOut",
      duration: 0.7,
      delay: 1.5,
    }
  },
}

const bgVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.7,
      delay: 1.5,
    }
  }
}

const buttonVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.7,
      delay: 2.5,
    }
  }
}

const Siren = () => {
  const {changeCurrentPageContext} = useRouteActionContext()

  // utilityhook
  const isWindowSmall = UseWindowSmall()

  // state
  const [skipAnimate, setSkipAnimate] = useState(false)
  const [animateComplete, setAnimateComplete] = useState(false)

  // function
  const goToNextPage = () => {
    changeCurrentPageContext('Investigate')
  }

  const touchPanelSm = () => {
    if (isWindowSmall) {
      if (animateComplete) {
        goToNextPage()
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
        ? <div className="siren__background"></div>
        : <motion.div className="siren__background"
            variants={bgVariant}
            initial="hidden"
            animate="show"
            onAnimationComplete={ () => setAnimateComplete(true) }
          ></motion.div>
      )
    } else {
      return (
        <motion.div className="siren__background"
          variants={bgVariant}
          initial="hidden"
          animate="show"
        ></motion.div>
      )
    }
  }

  const renderText = () => {
    if (isWindowSmall) {
      return (
        skipAnimate
        ? <div className="siren__content siren__content--static box-story">
            <p className="box-story__text text-story">ตอนนี้ คุณตกเป็นผู้ต้องสงสัย<br />ในคดีการตายของเพื่อนสนิท</p>
          </div>
        : <AnimatePresence>
            <motion.div className="siren__content box-story"
              variants={boxTextVariant}
              initial="hidden"
              animate="show"
            >
              <motion.p className="box-story__text text-story"
                variants={textVariant}
                initial="hidden"
                animate="show"
              >
                ตอนนี้ คุณตกเป็นผู้ต้องสงสัย<br />ในคดีการตายของเพื่อนสนิท
              </motion.p>
            </motion.div>
          </AnimatePresence>
      )
    } else {
      return (
        <motion.div className="siren__content box-story"
          variants={boxTextVariant}
          initial="hidden"
          animate="show"
        >
          <motion.p className="box-story__text text-story"
            variants={textVariant}
            initial="hidden"
            animate="show"
          >
            ตอนนี้ คุณตกเป็นผู้ต้องสงสัย<br />ในคดีการตายของเพื่อนสนิท
          </motion.p>
          <motion.div className="box-story__button"
            variants={buttonVariant}
            initial="hidden"
            animate="show"
          >
            <ButtonNext />
          </motion.div>
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
        <div className="scene-panel siren" onClick={touchPanelSm}>
          {
            renderBackground()
          }
          {
            renderText()
          }
        </div>
      </Content>
    </motion.div>
  )
}

export default Siren
