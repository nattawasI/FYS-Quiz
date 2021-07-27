import React, {useState} from 'react'
import {useRouteActionContext} from '../contexts/RouteContext'
import {useSoundStateContext} from '../contexts/SoundContext'
import {motionVariables} from '../variables/MotionVariant'
import {motion} from 'framer-motion'
import UseWindowSmall from '../hooks/useWindowSmall'
import Content from '../layout/Content'
import ButtonNext from '../components/ButtonNext'
import IconFingerprint from '../assets/images/icon/icon_fingerprint.svg'
import {playSoundClick} from '../variables/SoundMethods'

// Motion Variants
const sceneVariant = {
  hidden: {
    opacity: motionVariables.opacity.opacityZero,
  },
  show: {
    opacity: motionVariables.opacity.opacityOne,
    transition: {
      ease: 'easeInOut',
      duration: motionVariables.speed.speedOne,
    }
  },
  exit: {
    opacity: motionVariables.opacity.opacityZero,
    transition: {
      ease: 'easeInOut',
      duration: motionVariables.speed.speedOne
    }
  }
}

const textVariant = {
  hidden: {
    y: 70,
    opacity: motionVariables.opacity.opacityZero,
  },
  show: {
    y: 0,
    opacity: motionVariables.opacity.opacityOne,
    transition: {
      ease: 'easeInOut',
      duration: motionVariables.speed.speedOne
    }
  }
}

const buttonVariant = {
  hidden: {
    opacity: motionVariables.opacity.opacityZero,
  },
  show: {
    opacity: motionVariables.opacity.opacityOne,
    transition: {
      ease: 'easeInOut',
      duration: 0.7,
      delay: motionVariables.speed.speedOne
    }
  }
}

const Preface = () => {
  // context
  const {changeCurrentPageContext} = useRouteActionContext()
  const {muteContext} = useSoundStateContext()

  // utility
  const isWindowSmall = UseWindowSmall()

  // state
  const [showScene1, setShowScene1] = useState(true)
  const [showScene2, setShowScene2] = useState(false)
  const [completedScene, setCompletedScene] = useState(false)
  const [fingerPrintScene, setFingerPrintScene] = useState(false)

  // function
  const changeToScene2 = () => {
    setShowScene1(false)
    setShowScene2(true)
  }

  const goToNextPage = () => {
    changeCurrentPageContext('DarkRoom')
  }

  const handleCompletedScene = () => setCompletedScene(true)

  const handleTouchFingerPrint = () => {
    if (fingerPrintScene) {
      playSoundClick(muteContext)
      goToNextPage()
    }
  }

  console.log(completedScene);

  return (
    <>
      <Content bgColor="white">
        <div className="scene-panel scene-panel--items-center preface">
          <div className="preface__content box-story">
            {
              showScene1
              && <motion.div
                  className="preface__scene"
                  key="scene1"
                  variants={sceneVariant}
                  exit='exit'
                >
                  <motion.p className="box-story__text preface__text"
                    variants={textVariant}
                    initial="hidden"
                    animate="show"
                  >*เนื้อหาในเว็บนี้เป็นผลงาน<br />การออกแบบการสื่อสารผ่านการเล่าเรื่องราว<br />ให้ผู้เล่นมีส่วนร่วมด้วย<br />ไม่ใช่แบบสอบถามทางจิตวิทยาแต่อย่างใด</motion.p>
                  {
                    isWindowSmall
                    ? <motion.div className="box-story__button"
                        variants={buttonVariant}
                        initial="hidden"
                        animate="show"
                        onAnimationComplete={handleCompletedScene}
                      >
                        <ButtonNext dark onClick={changeToScene2} animateCompleted={completedScene} />
                      </motion.div>
                    : <motion.div className="box-story__button"
                        variants={buttonVariant}
                        initial="hidden"
                        animate="show"
                        onAnimationComplete={handleCompletedScene}
                      >
                        <ButtonNext dark onClick={goToNextPage} animateCompleted={completedScene}/>
                      </motion.div>
                  }
                </motion.div>
            }
            {
              showScene2
              &&  <motion.div className="preface__scene"
                    key="scene2"
                    variants={sceneVariant}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    onClick={handleTouchFingerPrint}
                    onAnimationComplete={ () => setFingerPrintScene(true) }
                  >
                    <div className="box-howto">
                      <i className="box-howto__icon">
                        <img src={IconFingerprint} alt="แตะหน้าจอเพื่อไปต่อ" />
                      </i>
                      <p className="box-howto__text">แตะหน้าจอเพื่อไปต่อ</p>
                    </div>
                </motion.div>
            }
          </div>
        </div>
      </Content>
    </>
  )
}

export default Preface
