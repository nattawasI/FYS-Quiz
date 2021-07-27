import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useRouteActionContext} from '../contexts/RouteContext'
import {useSoundStateContext} from '../contexts/SoundContext'
import {motion, AnimatePresence} from 'framer-motion'
import {motionVariables} from '../variables/MotionVariant'
import UseWindowSmall from '../hooks/useWindowSmall'
import Content from '../layout/Content'
import ButtonNext from '../components/ButtonNext'
import Donut from '../assets/images/page/evidence/img_donut.png'
import Candy from '../assets/images/page/evidence/img_candy.png'
import Whiskey from '../assets/images/page/evidence/img_whiskey.png'
import BubbleTea from '../assets/images/page/evidence/img_bubbletea.png'
import Hamburger from '../assets/images/page/evidence/img_hamburger.png'
import {playSoundClick} from '../variables/SoundMethods'

// Motion Variants
const firstTextVariant = {
  hidden: {
    y: 0,
    opacity: motionVariables.opacity.opacityZero,
  },
  show: {
    opacity: motionVariables.opacity.opacityOne,
    transition: {
      duration: motionVariables.speed.speedOne,
      ease: "easeInOut",
    }
  },
  exit: {
    opacity: motionVariables.opacity.opacityZero,
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
      type: 'tween',
    }
  }
}

const textVariant = {
  hidden: {
    y: '70%',
    opacity: motionVariables.opacity.opacityZero,
  },
  show: {
    y: 0,
    opacity: motionVariables.opacity.opacityOne,
    transition: {
      duration: motionVariables.speed.speedOne,
      ease: "easeInOut",
    }
  },
  exit: {
    opacity: motionVariables.opacity.opacityZero,
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
      type: 'tween',
    }
  }
}

const buttonVariant = {
  hidden: {
    opacity: motionVariables.opacity.opacityZero
  },
  show: {
    opacity: motionVariables.opacity.opacityOne,
    transition: {
      ease: "easeInOut",
      duration: motionVariables.speed.speedOne,
      delay: motionVariables.speed.speedOne,
    }
  }
}

const evidenceVariant = {
  hidden: {
    y: 160,
    opacity: motionVariables.opacity.opacityZero,
  },
  show: {
    y: 0,
    opacity: motionVariables.opacity.opacityOne,
    transition: {
      duration: motionVariables.speed.speedOne,
      ease: "easeInOut",
    }
  },
  exit: {
    opacity: motionVariables.opacity.opacityZero,
    transition: {
      duration: motionVariables.speed.speedOne,
      type: 'tween',
    }
  }
}

const curveVariant = {
  hidden: {
    y: 120,
    opacity: motionVariables.opacity.opacityZero,
  },
  show: {
    y: 0,
    opacity: motionVariables.opacity.opacityOne,
    transition: {
      duration: motionVariables.speed.speedOne,
      ease: "easeInOut",
    }
  },
  exit: {
    opacity: motionVariables.opacity.opacityZero,
    transition: {
      duration: motionVariables.speed.speedOne,
      type: 'tween',
    }
  }
}

const Evidence = ({soundPause}) => {
  // context
  const {changeCurrentPageContext} = useRouteActionContext()
  const {muteContext} = useSoundStateContext()

  // hooks
  const isWindowSmall = UseWindowSmall()

  // state
  const [showScene1, setShowScene1] = useState(true)
  const [showScene2, setShowScene2] = useState(false)
  const [showScene3, setShowScene3] = useState(false)
  const [animateComplete, setAnimateComplete] = useState(false)

  const Evidences = [ Donut, Candy, Hamburger, BubbleTea, Whiskey ]

  // function
  const goToNextPage = () => {
    if (animateComplete) {
      soundPause.pause()
      changeCurrentPageContext('VideoDoctor')
    }
  }

  const completeAnimated = () => setAnimateComplete(true)

  const changeToScene2 = () => {
    if (animateComplete) {
      setShowScene1(false)
      setShowScene2(true)
      setAnimateComplete(false)
    }
  }

  const changeToScene3 = () => {
    if (animateComplete) {
      setShowScene2(false)
      setShowScene3(true)
      setAnimateComplete(false)
    }
  }

  const touchPanelSm = () => {
    if (isWindowSmall) {
      if (showScene3 && animateComplete) {
        playSoundClick(muteContext)
        goToNextPage()
      } else {
        if(showScene1 && animateComplete) {
          playSoundClick(muteContext)
          changeToScene2()
        } else if (showScene2 && animateComplete) {
          playSoundClick(muteContext)
          changeToScene3()
        }
      }
    }
  }

  return (
    <>
      <Content bgColor="white">
        <div className="scene-panel evidence" onClick={touchPanelSm}>
          <div className="evidence__container">
            <div className="evidence__content">
              <AnimatePresence exitBeforeEnter>
                {
                  showScene1 &&
                  <motion.p
                    key="evidence-text-01"
                    className="evidence__text text-story text-story--black"
                    variants={firstTextVariant}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    onAnimationComplete={completeAnimated}
                  >
                    สำหรับคดีนี้ฆาตกร ก็คือ<br/><b>เหล่าหลักฐานในที่เกิดเหตุ</b>
                  </motion.p>
                }
                {
                  showScene2 &&
                  <motion.div
                    key="evidence-text-02"
                    className="evidence__text text-story text-story--black"
                    variants={textVariant}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    onAnimationComplete={completeAnimated}
                  >
                    คุณอาจสงสัยว่าทำไม?
                  </motion.div>
                }
                {
                  showScene3 &&
                  <motion.div
                    key="evidence-text-03"
                    className="evidence__text text-story text-story--black"
                    variants={textVariant}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    onAnimationComplete={completeAnimated}
                  >
                    ผมจะให้หมอมาช่วยอธิบาย<br/>ให้เข้าใจมากขึ้นครับ
                  </motion.div>
                }
              </AnimatePresence>
            </div>
            <div className="evidence__list suspect">
              <motion.div
                className="suspect__list"
                variants={evidenceVariant}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                {
                  Evidences.map((item, index) => (
                    <motion.div key={`suspect-key-${index}`} className="suspect__item">
                      <img className="suspect__image" src={item} alt={item} />
                    </motion.div>
                    )
                  )
                }
              </motion.div>
            </div>
            {
              !isWindowSmall &&
              <>
                {
                  showScene1 &&
                  <motion.div
                    className="evidence__button"
                    variants={buttonVariant}
                    initial="hidden"
                    animate="show"
                  >
                    <ButtonNext onClick={changeToScene2}/>
                  </motion.div>
                }
                {
                  showScene2 &&
                  <div className="evidence__button">
                    <ButtonNext onClick={changeToScene3}/>
                  </div>
                }
                {
                  showScene3 &&
                  <div className="evidence__button">
                    <ButtonNext onClick={goToNextPage}/>
                  </div>
                }
              </>
            }
            <motion.div
              className="evidence__curve"
              variants={curveVariant}
              initial="hidden"
              animate="show"
              exit="exit"
            ></motion.div>
          </div>
        </div>
      </Content>
    </>
  )
}

Evidence.propTypes = {
  soundPause: PropTypes.object.isRequired,
}

export default Evidence
