
import React, {useState} from 'react'
import {useRouteActionContext} from '../context/RouteContext'
import {motion, AnimatePresence} from 'framer-motion'
import {containerVariant} from '../variable/MotionVariant'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Content from '../layout/Content'
import ButtonSound from '../component/ButtonSound'
import ButtonNext from '../component/ButtonNext'

// motion Variant
const sceneVariant = {
  hidden: {
    opacity: 0,
    y: 70
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      delay: 0.5,
      duration: 1
    },
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: {
      type: 'tween',
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
      ease: 'easeInOut',
      delay: 1.5,
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    transition: {
      type: 'tween',
    }
  }
}

const Suggestion = () => {
  const {changeCurrentPageContext} = useRouteActionContext()
  const isWindowSmall = UseWindowSmall()

  // state
  const [showScene1, setShowScene1] = useState(true)
  const [showScene2, setShowScene2] = useState(false)

  // function
  const goToNextPage = () => {
    changeCurrentPageContext('Symptoms')
  }

  const changeToScene2 = () => {
    setShowScene1(false)
    setShowScene2(true)
  }

  let nextScene = ''
  const skipScene = () => {
    if (isWindowSmall) {
      if (nextScene === 'scene2') {
        setShowScene1(false)
        setShowScene2(true)
      }
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
      <Content bgColor="blue">
        <div className="scene-panel scene-animate" onClick={skipScene}>
          <div className="box-story scene-animate__scene scene-animate__scene--1">
            <AnimatePresence>
              {
                showScene1
                && <motion.p className="box-story__text text-story"
                  key="scene1"
                  variants={sceneVariant}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  onAnimationComplete={ () => nextScene = 'scene2' }
                >คุณรู้ไหม<br /><span className="text-story--bigger">"โรคเบาหวาน"</span> เกิดจากอะไร?</motion.p>
              }
              {
                !isWindowSmall && showScene1
                && <motion.div className="box-story__button"
                    key="buttonNextScene1"
                    variants={buttonVariant}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    <ButtonNext onClick={changeToScene2} />
                  </motion.div>
              }
            </AnimatePresence>
          </div>
          <div className="box-story scene-animate__scene scene-animate__scene--2">
            <AnimatePresence>
              {
                showScene2
                && <motion.div className="box-story__text"
                    key="scene2"
                    variants={sceneVariant}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    <p className="text-story">เกิดจาก</p>
                  </motion.div>
              }
              {
                !isWindowSmall && showScene2
                && <motion.div className="box-story__button"
                    key="buttonNextScene2"
                    variants={buttonVariant}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    <ButtonNext onClick={goToNextPage} />
                  </motion.div>
              }
            </AnimatePresence>
          </div>
        </div>
      </Content>
    </motion.div>
  )
}

export default Suggestion

