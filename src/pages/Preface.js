import React, {useState} from 'react'
import {useRouteActionContext} from '../contexts/RouteContext'
import {useSoundActionContext} from '../contexts/SoundContext'
import {motion} from 'framer-motion'
import UseWindowSmall from '../hooks/useWindowSmall'
import Content from '../layout/Content'
import ButtonNext from '../components/ButtonNext'
import ImgLogo from '../assets/images/logo/logo.svg'
import IconFingerprint from '../assets/images/icon/icon_fingerprint.svg'

const sceneVariant = {
  hidden: {
    y: 70,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1.5
    }
  }
}

const buttonVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.7,
      delay: 1.5
    }
  }
}

const Preface = () => {
  // context
  const {changeCurrentPageContext} = useRouteActionContext()
  const {playClickSoundContext} = useSoundActionContext()

  // utility
  const isWindowSmall = UseWindowSmall()

  // state
  const [showScene1, setShowScene1] = useState(true)
  const [showScene2, setShowScene2] = useState(false)
  const [completedScene, setCompletedScene] = useState(false)
  const [fingerPrintScene, setFingerPrintScene] = useState(false)

  // function
  const changeToScene2 = () => {
    playClickSoundContext()
    setShowScene1(false)
    setShowScene2(true)
  }

  const goToNextPage = () => {
    playClickSoundContext()
    changeCurrentPageContext('DarkRoom')
  }

  const handleCompletedScene = () => setCompletedScene(true)

  const handleTouchFingerPrint = () => {
    if (fingerPrintScene) {
      goToNextPage()
    }
  }

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
                >
                  <div className="preface__logo"><img src={ImgLogo} alt="For Your Sweetheart" /></div>
                  <p className="box-story__text preface__text">*เนื้อหาในเว็บนี้เป็นผลงานการออกแบบการสื่อสาร<br />ผ่านการเล่าเรื่องราวให้ผู้เล่นมีส่วนร่วมด้วย<br />ไม่ใช่แบบสอบถามทางจิตวิทยาแต่อย่างใด</p>
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
