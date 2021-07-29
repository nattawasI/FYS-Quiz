import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {useRouteActionContext} from '../contexts/RouteContext'
import {useSoundStateContext} from '../contexts/SoundContext'
import {motion, AnimatePresence} from 'framer-motion'
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
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    }
  },
  exit: {
    opacity: 0,
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
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.7,
      ease: 'easeInOut',
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
      ease: "easeInOut",
      duration: 1,
      delay: 1,
    }
  }
}

const evidenceVariant = {
  hidden: {
    y: 160,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
      type: 'tween',
    }
  }
}

const curveVariant = {
  hidden: {
    y: 120,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
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
  const [completedScene1, setCompletedScene1] = useState(false)
  const [completedScene2, setCompletedScene2] = useState(false)
  const [completedScene3, setCompletedScene3] = useState(false)

  const Evidences = [ Donut, Candy, Hamburger, BubbleTea, Whiskey ]

  // function
  const goToNextPage = () => {
    if (completedScene3) {
      changeCurrentPageContext('VideoDoctor')
    }
  }

  const changeToScene2 = () => {
    if (completedScene1) {
      setShowScene1(false)
      setShowScene2(true)
    }
  }

  const changeToScene3 = () => {
    if (completedScene2) {
      setShowScene2(false)
      setShowScene3(true)
    }
  }

  const touchPanelSm = () => {
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
                    onAnimationComplete={() => setCompletedScene1(true)}
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
                    onAnimationComplete={() => setCompletedScene2(true)}
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
                    onAnimationComplete={() => setCompletedScene3(true)}
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
                    <ButtonNext onClick={changeToScene2} animateCompleted={completedScene1} />
                  </motion.div>
                }
                {
                  showScene2 &&
                  <div className="evidence__button">
                    <ButtonNext onClick={changeToScene3} animateCompleted={completedScene2} />
                  </div>
                }
                {
                  showScene3 &&
                  <div className="evidence__button">
                    <ButtonNext onClick={goToNextPage} animateCompleted={completedScene3} />
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
  // soundPause: PropTypes.object.isRequired,
}

export default Evidence
