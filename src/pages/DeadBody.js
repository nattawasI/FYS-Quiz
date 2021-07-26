import React, {useState} from 'react'
import {useRouteActionContext} from '../contexts/RouteContext'
import {useUserStateContext} from '../contexts/UserContext'
import {useSoundActionContext} from '../contexts/SoundContext'
import {motion} from 'framer-motion'
import {motionVariables} from '../variables/MotionVariant'
import UseWindowSmall from '../utilityhooks/useWindowSmall'
import Content from '../layout/Content'
import ButtonNext from '../components/ButtonNext'
import DeadbodyMaleMD from '../assets/images/page/dead-body/img_deadbody_male_md.svg'
import DeadbodyMaleSM from '../assets/images/page/dead-body/img_deadbody_male_sm.svg'
import DeadbodyFemaleMD from '../assets/images/page/dead-body/img_deadbody_female_md.svg'
import DeadbodyFemaleSM from '../assets/images/page/dead-body/img_deadbody_female_sm.svg'


// Motion Variants
const textVariant = {
  hidden: {
    y: 120,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: motionVariables.speed.speedOne,
    }
  },
}

const buttonVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: motionVariables.speed.speedOne,
      delay: motionVariables.speed.speedOne,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: motionVariables.speed.speedOne,
      type: 'tween',
    }
  },
}

const bodyVariant = {
  hidden: {
    y: 80,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: motionVariables.speed.speedOne,
    }
  },
}

const DeadBody = () => {
  // route context
  const {changeCurrentPageContext} = useRouteActionContext()
  const {playClickSoundContext} = useSoundActionContext()

  // context
  const {friendInfoContext} = useUserStateContext()

  // utility hook
  const isWindowSmall = UseWindowSmall()

  // state
  const [showScene1, setShowScene1] = useState(true)
  const [showScene2, setShowScene2] = useState(false)
  const [showScene3, setShowScene3] = useState(false)
  const [animateComplete, setAnimateComplete] = useState(false)

  // function
  const goToNextPage = () => {
    if (animateComplete) {
      changeCurrentPageContext('Murder')
    }
  }

  const changeToScene2 = () => {
    if (animateComplete) {
      setShowScene1(false)
      setShowScene2(true)
      setAnimateComplete(false)
      playClickSoundContext()
    }
  }

  const changeToScene3 = () => {
    if (animateComplete) {
      setShowScene2(false)
      setShowScene3(true)
      setAnimateComplete(false)
      playClickSoundContext()
    }
  }

  const completeAnimated = () => setAnimateComplete(true)

  const touchPanelSm = () => {
    if (isWindowSmall && showScene3) {
      playClickSoundContext()
      goToNextPage()
    }
  }

  const renderScene1 = () => {
    if (showScene1) {
      if (isWindowSmall) {
        return (
          <div className="dead-body__content" onClick={changeToScene2}>
            <motion.p
              className="dead-body__text text-story"
              variants={textVariant}
              initial="hidden"
              animate="show"
              exit="exit"
              onAnimationComplete={completeAnimated}
            >
              สรุปก็คือ<br/>เพื่อนของคุณถูก<br/>
              <span className="text-story--bigger">"ฆาตกรรม"</span>
            </motion.p>
          </div>
        )
      } else {
        return (
          <div className="dead-body__content">
            <motion.p
              className="dead-body__text text-story"
              variants={textVariant}
              initial="hidden"
              animate="show"
              exit="exit"
              onAnimationComplete={completeAnimated}
            >
              สรุปก็คือ<br/>เพื่อนของคุณถูก<br/>
              <span className="text-story--bigger">"ฆาตกรรม"</span>
              <motion.span
                className="dead-body__button"
                variants={buttonVariant}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <ButtonNext onClick={changeToScene2} />
              </motion.span>
            </motion.p>
          </div>
        )
      }
    }
  }

  const renderScene2 = () => {
    if (showScene2) {
      if (isWindowSmall) {
        return (
          <div className="dead-body__content" onClick={changeToScene3}>
            <motion.p
              className="dead-body__text text-story"
              variants={textVariant}
              initial="hidden"
              animate="show"
              exit="exit"
              onAnimationComplete={completeAnimated}
            >
              และเราพบคนร้าย... ในที่เกิดเหตุ
            </motion.p>
          </div>
        )
      } else {
        return (
          <div className="dead-body__content">
            <motion.p
              className="dead-body__text text-story"
              variants={textVariant}
              initial="hidden"
              animate="show"
              exit="exit"
              onAnimationComplete={completeAnimated}
            >
              เราพบคนร้าย<br/>ในที่เกิดเหตุ
              <motion.span
                className="dead-body__button"
                variants={buttonVariant}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <ButtonNext onClick={changeToScene3} />
              </motion.span>
            </motion.p>
          </div>
        )
      }
    }
  }

  const renderScene3 = () => {
    if (showScene3) {
      if (isWindowSmall) {
        return (
          <div className="dead-body__content" onClick={goToNextPage}>
            <motion.p
              className="dead-body__text text-story"
              variants={textVariant}
              initial="hidden"
              animate="show"
              exit="exit"
              onAnimationComplete={completeAnimated}
            >
              แต่ว่า... ไม่ใช่คุณ
            </motion.p>
          </div>
        )
      } else {
        return (
          <div className="dead-body__content">
            <motion.p
              className="dead-body__text text-story"
              variants={textVariant}
              initial="hidden"
              animate="show"
              exit="exit"
              onAnimationComplete={completeAnimated}
            >
              แต่ว่า...<br/>ไม่ใช่คุณ
              <motion.span
                className="dead-body__button"
                variants={buttonVariant}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <ButtonNext onClick={goToNextPage} />
              </motion.span>
            </motion.p>
          </div>
        )
      }
    }
  }

  friendInfoContext.gender = 'male'

  return (
    <>
      <Content>
        <div className="scene-panel scene-panel--items-center dead-body" onClick={touchPanelSm}>
          <div className="dead-body__container">
            {
              renderScene1()
            }
            {
              renderScene2()
            }
            {
              renderScene3()
            }
            {
              friendInfoContext.gender === 'male' &&
              <motion.div
                className="dead-body__body"
                variants={bodyVariant}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <object className="dead-body__body-image" data={ isWindowSmall ? DeadbodyMaleSM : DeadbodyMaleMD } type="image/svg+xml">
                  {/* <img src="yourfallback.jpg" /> */}
                </object>
              </motion.div>
            }
            {
              friendInfoContext.gender === 'female' &&
              <motion.div
                className="dead-body__body"
                variants={bodyVariant}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <object className="dead-body__body-image" data={ isWindowSmall ? DeadbodyFemaleSM : DeadbodyFemaleMD } type="image/svg+xml">
                  {/* <img src="yourfallback.jpg" /> */}
                </object>
              </motion.div>
            }
          </div>
        </div>
      </Content>
    </>
  )
}

export default DeadBody
