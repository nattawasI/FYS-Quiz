
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {useRouteActionContext} from '../contexts/RouteContext'
import {useSoundStateContext} from '../contexts/SoundContext'
import {motion, AnimatePresence} from 'framer-motion'
import {useUserStateContext} from '../contexts/UserContext'
import UseWindowSmall from '../hooks/useWindowSmall'
import Content from '../layout/Content'
import ButtonNext from '../components/ButtonNext'
import PhoneAudio from '../assets/sounds/sound-phone.mp3'
import {playSoundClick, playSoundBGM} from '../variables/SoundMethods'

// Audio
const soundPhone = new Audio(PhoneAudio)

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
      duration: 0.7
    }
  },
  exit: {
    opacity: 0,
    transition: {
      type: 'tween',
    }
  }
}

const CallPolice = ({sounds}) => {
  // context
  const {changeCurrentPageContext} = useRouteActionContext()
  const {friendInfoContext} = useUserStateContext()
  const {muteContext} = useSoundStateContext()

  // hooks
  const isWindowSmall = UseWindowSmall()

  // state
  const [showScene1, setShowScene1] = useState(true)
  const [showScene2, setShowScene2] = useState(false)
  const [showScene3, setShowScene3] = useState(false)
  const [animateComplete, setAnimateComplete] = useState(false)
  const [calling, setCalling] = useState(false)

  // function
  const goToNextPage = () => {
    changeCurrentPageContext('PoliceCame')
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

  const skipScene = () => {
    if (isWindowSmall) {
      if(showScene1 && animateComplete) {
        playSoundClick(muteContext)
        changeToScene2()
      } else if (showScene2 && animateComplete) {
        playSoundClick(muteContext)
        changeToScene3()
      }
    }
  }

  const handleCalling = () => {
    const timer = muteContext? 2000: 5000

    if (!muteContext) {
      soundPhone.play()
    }

    setCalling(true)
    setTimeout(() => {
      playSoundBGM(sounds[0], sounds[1])
      goToNextPage()
    }, timer)
  }

  // useEffect
  useEffect(() => {
    if (muteContext) {
      soundPhone.muted = true
    } else {
      soundPhone.muted = false
    }
  }, [muteContext])

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
                  onAnimationComplete={completeAnimated}
                >แต่กลับพบว่า<br />{friendInfoContext.name} ตัวเย็นเฉียบ<br />หน้าซีด และไม่หายใจ</motion.p>
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
                && <motion.p className="box-story__text text-story"
                  key="textScene2"
                  variants={textVariant}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  onAnimationComplete={completeAnimated}
                >{friendInfoContext.name}<br />"เสียชีวิต"</motion.p>
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
                    <ButtonNext onClick={changeToScene3} />
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
                  onAnimationComplete={completeAnimated}
                >
                  คุณตกใจมาก โวยวายเสียงดัง!<br />แล้วรีบหยิบมือถือ โทรแจ้งตำรวจทันที
                </motion.p>
            }
            {
              showScene3
              &&  <motion.div className="box-story__button"
                    variants={buttonVariant}
                    initial="hidden"
                    animate="show"
                  >
                    <button type="button" className="button-call" onClick={handleCalling}>
                      <span className={`button-call__btn button-call__btn--wave-out${calling? ' animate': ''}`}></span>
                      <span className={`button-call__btn button-call__btn--wave-in${calling? ' animate': ''}`}></span>
                      <span className="button-call__btn button-call__btn--body"></span>
                      <span className={`button-call__btn button-call__btn--touch${calling? ' animate': ''}`}></span>
                    </button>
                  </motion.div>
            }
          </div>
        </div>
      </Content>
    </>
  )
}

CallPolice.propTypes = {
  sounds: PropTypes.array.isRequired,
}

export default CallPolice

