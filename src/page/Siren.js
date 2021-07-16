import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {motion} from 'framer-motion'
import {containerVariant} from '../variable/MotionVariant'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Content from '../layout/Content'
import ButtonSound from '../component/ButtonSound'
import ButtonNext from '../component/ButtonNext'

// Motion Variants
const textVariant = {
  hidden: {
    opacity: 0,
    y: 50
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.7,
      delay: 0.7,
    }
  }
}

const bgVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
      delay: 0.7,
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
      delay: 1.5,
    }
  }
}

const Siren = () => {
  // router
  const history = useHistory()

  // utilityhook
  const isWindowSmall = UseWindowSmall()

  // state
  const [skipAnimate, setSkipAnimate] = useState(false)
  const [animateComplete, setAnimateComplete] = useState(false)

  // function
  const touchPanelSm = () => {
    if (isWindowSmall) {
      if (animateComplete) {
        history.push('/siren')
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
        ? <p className="box-story__text text-story">
            ตอนนี้ คุณตกเป็นผู้ต้องสงสัย<br />ในคดีการตายของเพื่อนสนิท
          </p>
        : <motion.p className="box-story__text text-story"
            variants={textVariant}
            initial="hidden"
            animate="show"
            onAnimationComplete={ () => setAnimateComplete(true) }
          >
            ตอนนี้ คุณตกเป็นผู้ต้องสงสัย<br />ในคดีการตายของเพื่อนสนิท
          </motion.p>
      )
    } else {
      return (
        <>
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
        </>
      )
    }
  }

  return (
    <>
      <ButtonSound />
      <Content>
        <motion.div className="scene-panel siren" onClick={touchPanelSm}
          variants={containerVariant}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {
            renderBackground()
          }
          <div className="siren__content box-story">
            {
              renderText()
            }
          </div>
        </motion.div>
      </Content>
    </>
  )
}

export default Siren
