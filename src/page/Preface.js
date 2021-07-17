import React, {useState} from 'react'
import {motion} from 'framer-motion'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Content from '../layout/Content'
import ButtonNext from '../component/ButtonNext'
import IconFingerprint from '../image/icon/icon_fingerprint.svg'

// Motion Variants
const sceneVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.7,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.7
    }
  }
}

const textVariant = {
  hidden: {
    y: 70,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.7
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
      duration: 1,
      delay: 1
    }
  }
}

const Preface = () => {
  const isWindowSmall = UseWindowSmall()

  // state
  const [showScene1, setShowScene1] = useState(true)
  const [showScene2, setShowScene2] = useState(false)

  // function
  const changeToScene2 = () => {
    setShowScene1(false)
    setShowScene2(true)
  }

  const linkToNextPage = () => {
    if (isWindowSmall && showScene2) {
      // 
    }
  }

  return (
    <>
      <Content bgColor="white">
        <div className="scene-panel preface" onClick={linkToNextPage}>
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
                  >*เนื้อหาในเว็บนี้เป็นผลงาน<br />การออกแบบการสื่อสารผ่านการเล่าเรื่องราว<br />ให้ผู้เล่นมีส่วนร่วมด้วย<br />ไม่ใช่แบบสอบถามทางจิตวิทยาแต่อย่างใด<br />ในคดีการตายของเพื่อนสนิท</motion.p>
                  {
                    isWindowSmall
                    ? <motion.div className="box-story__button"
                        variants={buttonVariant}
                        initial="hidden"
                        animate="show"
                      >
                        <ButtonNext dark onClick={changeToScene2} />
                      </motion.div>
                    : <motion.div className="box-story__button"
                        variants={buttonVariant}
                        initial="hidden"
                        animate="show"
                      >
                        <ButtonNext dark to="dark-room" />
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
