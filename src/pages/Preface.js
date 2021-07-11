import React, {useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import UseWindowSmall from '../utilityhooks/useWindowSmall'
import Content from '../layouts/Content'
import ButtonNext from '../components/ButtonNext'
import IconTouchNext from '../image/icon/icon_touch_next.svg'

// Motion Variants
const sceneVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1
    }
  },
  exit: {
    type: 'tween',
    opacity: 0
  }
}

const Preface = () => {
  const isWindowSmall = UseWindowSmall()
  const [showScene1, setShowScene1] = useState(true)
  const [showScene2, setShowScene2] = useState(false)

  const changeToScene2 = () => {
    setShowScene1(false)

    setTimeout(() => {
      setShowScene2(true)
    }, 300);
  }

  return (
    <>
      <Content bgColor="white">
        <div className="scene-panel preface">
          <div className="preface__content box-story">
            <AnimatePresence>
              {
                showScene1
                && <motion.div
                    key="scene1"
                    variants={sceneVariant}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    <p className="box-story__text preface__text">*เนื้อหาในเว็บนี้เป็นผลงาน<br />การออกแบบการสื่อสารผ่านการเล่าเรื่องราว<br />ให้ผู้เล่นมีส่วนร่วมด้วย<br />ไม่ใช่แบบสอบถามทางจิตวิทยาแต่อย่างใด<br />ในคดีการตายของเพื่อนสนิท</p>
                    {
                      isWindowSmall
                      ? <div className="box-story__button">
                          <ButtonNext dark onClick={changeToScene2} />
                        </div>
                      : <div className="box-story__button">
                          <ButtonNext dark path="/call-police" />
                        </div>
                    }
                  </motion.div>
              }
              {
                showScene2
                && <motion.div className="preface__icon-touch"
                    key="scene2"
                    variants={sceneVariant}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    <img src={IconTouchNext} alt="แตะหน้าจอเพื่อไปต่อ" />
                  </motion.div>
              }
            </AnimatePresence>
          </div>
        </div>
      </Content>
    </>
  )
}

export default Preface
