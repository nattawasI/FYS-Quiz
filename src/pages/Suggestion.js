
import React, {useState} from 'react'
import {useRouteActionContext} from '../contexts/RouteContext'
import {useSoundStateContext} from '../contexts/SoundContext'
import {motion, AnimatePresence} from 'framer-motion'
import UseWindowSmall from '../hooks/useWindowSmall'
import Content from '../layout/Content'
import ButtonNext from '../components/ButtonNext'
import {playSoundClick} from '../variables/SoundMethods'

// motion Variant
const textVariant = {
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
  // context
  const {changeCurrentPageContext} = useRouteActionContext()
  const {muteContext} = useSoundStateContext()

  // utility
  const isWindowSmall = UseWindowSmall()

  // state
  const [showScene1, setShowScene1] = useState(true)
  const [showScene2, setShowScene2] = useState(false)
  const [showScene3, setShowScene3] = useState(false)
  const [animateComplete, setAnimateComplete] = useState(false)
  const [completedScene1, setCompletedScene1] = useState(false)
  const [completedScene2, setCompletedScene2] = useState(false)
  const [completedScene3, setCompletedScene3] = useState(false)

  // function
  const goToNextPage = () => {
    changeCurrentPageContext('End')
  }

  const completeAnimated = () => setAnimateComplete(true)

  const changeToScene2 = () => {
    if (completedScene1) {
      setShowScene1(false)
      setShowScene2(true)
      setAnimateComplete(false)
    }
  }

  const changeToScene3 = () => {
    if (completedScene2) {
      setShowScene2(false)
      setShowScene3(true)
      setAnimateComplete(false)
    }
  }

  const skipScene = () => {
    if (isWindowSmall) {
      if (showScene3 && completedScene3) {
        playSoundClick(muteContext)
        goToNextPage()
      } else {
        if(showScene1 && completedScene1) {
          playSoundClick(muteContext)
          changeToScene2()
        } else if (showScene2 && completedScene2) {
          playSoundClick(muteContext)
          changeToScene3()
        }
      }
    }
  }

  return (
    <>
      <Content>
        <div className="scene-panel scene-panel--items-center scene-animate" onClick={skipScene}>
          <div className="box-story scene-animate__scene scene-animate__scene--1">
            <AnimatePresence>
              {
                showScene1
                && <motion.p className="box-story__text text-story"
                  key="textScene1"
                  variants={textVariant}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  onAnimationComplete={() => setCompletedScene1(true)}
                >หากพบอาการเหล่านี้<br />ให้รีบไปพบแพทย์เพื่อเช็กทันที</motion.p>
              }
              {
                !isWindowSmall && showScene1
                && <motion.div className="box-story__button"
                    key="buttonNextScene1"
                    variants={buttonVariant}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    onAnimationComplete={() => setCompletedScene1(true)}
                  >
                    <ButtonNext onClick={changeToScene2} animateCompleted={completedScene1}/>
                  </motion.div>
              }
            </AnimatePresence>
          </div>
          <div className="box-story scene-animate__scene scene-animate__scene--2">
            <AnimatePresence>
              {
                showScene2
                && <motion.p className="box-story__text text-story"
                  key="textScene2"
                  variants={textVariant}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  onAnimationComplete={() => setCompletedScene2(true)}
                >แต่ถ้าไม่มีอาการ<br /><span className="text-story--bigger">คุณยังโชคดี</span></motion.p>
              }
              {
                !isWindowSmall && showScene2
                && <motion.div className="box-story__button"
                    key="buttonNextScene2"
                    variants={buttonVariant}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    onAnimationComplete={() => setCompletedScene2(true)}
                  >
                    <ButtonNext onClick={changeToScene3} animateCompleted={completedScene2} />
                  </motion.div>
              }
            </AnimatePresence>
          </div>
          <div className="box-story scene-animate__scene scene-animate__scene--3">
            {
              showScene3
              && <motion.p
                  className="box-story__text text-story"
                  variants={textVariant}
                  initial="hidden"
                  animate="show"
                  onAnimationComplete={() => setCompletedScene3(true)}
                >
                  และควรดูแลตัวเองต่อไป<br />ให้ห่างไกล <span className="text-story--bigger">”ฆาตกร"</span> <br className="sm-show" />ที่ทำให้เป็นโรคเบาหวาน
                </motion.p>
            }
            {
              !isWindowSmall && showScene3
              &&  <motion.div className="box-story__button"
                    key="buttonNextScene2"
                    variants={buttonVariant}
                    initial="hidden"
                    animate="show"
                    onAnimationComplete={() => setCompletedScene3(true)}
                  >
                    <ButtonNext onClick={goToNextPage} animateCompleted={completedScene3} />
                  </motion.div>
            }
          </div>
        </div>
      </Content>
    </>
  )
}

export default Suggestion

