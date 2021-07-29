import React, {useState} from 'react'
import {useRouteActionContext} from '../contexts/RouteContext'
import {useUserStateContext} from '../contexts/UserContext'
import {useSoundActionContext} from '../contexts/SoundContext'
import {motion} from 'framer-motion'
import UseWindowSmall from '../hooks/useWindowSmall'
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
      duration: 1.5,
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
      duration: 1,
      delay: 1,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
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
      duration: 1.5,
    }
  },
}

const DeadBody = () => {
  // context
  const {changeCurrentPageContext} = useRouteActionContext()
  const {friendInfoContext} = useUserStateContext()
  const {playClickSoundContext} = useSoundActionContext()

  // hooks
  const isWindowSmall = UseWindowSmall()

  // state
  const [showScene1, setShowScene1] = useState(true)
  const [showScene2, setShowScene2] = useState(false)
  const [showScene3, setShowScene3] = useState(false)
  const [completedScene1, setCompletedScene1] = useState(false)
  const [completedScene2, setCompletedScene2] = useState(false)
  const [completedScene3, setCompletedScene3] = useState(false)

  // function
  const goToNextPage = () => {
    if (completedScene3) {
      playClickSoundContext()
      changeCurrentPageContext('Murder')
    }
  }

  const changeToScene2 = () => {
    if (completedScene1) {
      playClickSoundContext()
      setShowScene1(false)
      setShowScene2(true)
    }
  }

  const changeToScene3 = () => {
    if (completedScene2) {
      playClickSoundContext()
      setShowScene2(false)
      setShowScene3(true)
    }
  }

  const touchPanelSm = () => {
    if (isWindowSmall) {
      if (showScene3 && completedScene3) {
        goToNextPage()
      } else {
        if(showScene1 && completedScene1) {
          changeToScene2()
        } else if (showScene2 && completedScene2) {
          changeToScene3()
        }
      }
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
              onAnimationComplete={() => setCompletedScene1(true)}
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
            >
              สรุปก็คือ<br/>เพื่อนของคุณถูก<br/>
              <span className="text-story--bigger">"ฆาตกรรม"</span>
              <motion.span
                className="dead-body__button"
                variants={buttonVariant}
                initial="hidden"
                animate="show"
                exit="exit"
                onAnimationComplete={() => setCompletedScene1(true)}
              >
                <ButtonNext onClick={changeToScene2} animateCompleted={completedScene1} />
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
              onAnimationComplete={() => setCompletedScene2(true)}
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
            >
              เราพบคนร้าย<br/>ในที่เกิดเหตุ
              <motion.span
                className="dead-body__button"
                variants={buttonVariant}
                initial="hidden"
                animate="show"
                exit="exit"
                onAnimationComplete={() => setCompletedScene2(true)}
              >
                <ButtonNext onClick={changeToScene3} animateCompleted={completedScene2} />
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
              onAnimationComplete={() => setCompletedScene3(true)}
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
            >
              แต่ว่า...<br/>ไม่ใช่คุณ
              <motion.span
                className="dead-body__button"
                variants={buttonVariant}
                initial="hidden"
                animate="show"
                exit="exit"
                onAnimationComplete={() => setCompletedScene3(true)}
              >
                <ButtonNext onClick={goToNextPage} animateCompleted={completedScene3} />
              </motion.span>
            </motion.p>
          </div>
        )
      }
    }
  }

  return (
    <>
      <Content>
        <div className="scene-panel scene-panel--items-center dead-body" onTouchStart={touchPanelSm}>
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
