import React, {useState} from 'react'
import {useRouteActionContext} from '../context/RouteContext'
import {motion, AnimatePresence} from 'framer-motion'
import {containerVariant} from '../variable/MotionVariant'
import {MotionUtilities} from '../variable/MotionUtilities'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Content from '../layout/Content'
import ButtonSound from '../component/ButtonSound'
import ButtonNext from '../component/ButtonNext'
import Donut from '../image/page/evidence/img_donut.png'
import Candy from '../image/page/evidence/img_candy.png'
import Whiskey from '../image/page/evidence/img_whiskey.png'
import BubbleTea from '../image/page/evidence/img_bubbletea.png'
import Hamburger from '../image/page/evidence/img_hamburger.png'

// Motion Variants
const firstTextVariant = {
  hidden: {
    y: 0,
    opacity: MotionUtilities.opacity.opacityZero,
  },
  show: {
    opacity: MotionUtilities.opacity.opacityOne,
    transition: {
      duration: MotionUtilities.speed.speedOne,
      ease: "easeInOut",
    }
  },
  exit: {
    opacity: MotionUtilities.opacity.opacityZero,
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
      type: 'tween',
    }
  }
}

const textVariant = {
  hidden: {
    y: 120,
    opacity: MotionUtilities.opacity.opacityZero,
  },
  show: {
    y: 0,
    opacity: MotionUtilities.opacity.opacityOne,
    transition: {
      duration: MotionUtilities.speed.speedOne,
      ease: "easeInOut",
    }
  },
  exit: {
    opacity: MotionUtilities.opacity.opacityZero,
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
      type: 'tween',
    }
  }
}

const buttonVariant = {
  hidden: {
    opacity: MotionUtilities.opacity.opacityZero
  },
  show: {
    opacity: MotionUtilities.opacity.opacityOne,
    transition: {
      ease: "easeInOut",
      duration: MotionUtilities.speed.speedOne,
      delay: MotionUtilities.speed.speedOne,
    }
  }
}

const evidenceVariant = {
  hidden: {
    y: 160,
    opacity: MotionUtilities.opacity.opacityZero,
  },
  show: {
    y: 0,
    opacity: MotionUtilities.opacity.opacityOne,
    transition: {
      duration: MotionUtilities.speed.speedOne,
      ease: "easeInOut",
    }
  },
  exit: {
    opacity: MotionUtilities.opacity.opacityZero,
    transition: {
      duration: MotionUtilities.speed.speedOne,
      type: 'tween',
    }
  }
}

const Investigate = () => {
  // route context
  const {changeCurrentPageContext} = useRouteActionContext()

  // utility hook
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
        goToNextPage()
      } else {
        if(showScene1 && animateComplete) {
          changeToScene2()
        } else if (showScene2 && animateComplete) {
          changeToScene3()
        }
      }
    }
  }

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ height: "100%" }}
    >
      <ButtonSound dark />
      <Content bgColor="white">
        <div className="scene-panel scene-panel--items-center evidence" onClick={touchPanelSm}>
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
            <div className="evidence__curve"></div>
          </div>
        </div>
      </Content>
    </motion.div>
  )
}

export default Investigate
