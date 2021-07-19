import React, {useState} from 'react'
import {useRouteActionContext} from '../context/RouteContext'
import {motion} from 'framer-motion'
import {containerVariant} from '../variable/MotionVariant'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Content from '../layout/Content'
import ButtonSound from '../component/ButtonSound'
import ButtonNext from '../component/ButtonNext'
import DeadbodyMaleMD from '../image/page/dead-body/img_deadbody_male_md.svg'
import DeadbodyMaleSM from '../image/page/dead-body/img_deadbody_male_sm.svg'
import DeadbodyFemaleMD from '../image/page/dead-body/img_deadbody_female_md.svg'
import DeadbodyFemaleSM from '../image/page/dead-body/img_deadbody_female_sm.svg'


// Motion Variants
const textVariant = {
  hidden: {
    opacity: 0,
    y: 120
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.7,
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
      duration: 0.7,
      delay: 0.7,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.7,
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
      duration: 0.7,
    }
  },
}

const DeadBody = () => {
  // route context
  const {changeCurrentPageContext} = useRouteActionContext()

  // utility hook
  const isWindowSmall = UseWindowSmall()

  // state
  const [showScene1, setShowScene1] = useState(true)
  const [showScene2, setShowScene2] = useState(false)
  const [showScene3, setShowScene3] = useState(false)
  const [animateComplete, setAnimateComplete] = useState(false)
  let gender = 'Female'

  // function
  const goToNextPage = () => {
    changeCurrentPageContext('Murder')
  }

  const changeToScene2 = () => {
    setShowScene1(false)
    setShowScene2(true)
  }

  const changeToScene3 = () => {
    setShowScene2(false)
    setShowScene3(true)
  }

  const touchPanelSm = () => {
    if (isWindowSmall) {
      if (animateComplete) {
        goToNextPage()
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
            </motion.p>
            <motion.div
              className="dead-body__button"
              variants={buttonVariant}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <ButtonNext onClick={changeToScene2} />
            </motion.div>
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
            </motion.p>
            <motion.div
              className="dead-body__button"
              variants={buttonVariant}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <ButtonNext onClick={changeToScene3} />
            </motion.div>
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
              onAnimationComplete={ () => setAnimateComplete(true) }
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
            </motion.p>
            <motion.div
              className="dead-body__button"
              variants={buttonVariant}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <ButtonNext onClick={goToNextPage} />
            </motion.div>
          </div>
        )
      }
    }
  }

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ButtonSound />
      <Content>
        <div className="scene-panel dead-body" onClick={touchPanelSm}>
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
              gender === 'Male' &&
              <motion.img
                className="dead-body__body"
                src={ isWindowSmall ? DeadbodyMaleSM : DeadbodyMaleMD }
                alt="dead body"
                variants={bodyVariant}
                initial="hidden"
                animate="show"
                exit="exit"
              />
            }
            {
              gender === 'Female' &&
              <motion.img
                className="dead-body__body"
                src={ isWindowSmall ? DeadbodyFemaleSM : DeadbodyFemaleMD }
                alt="dead body"
                variants={bodyVariant}
                initial="hidden"
                animate="show"
                exit="exit"
              />
            }
          </div>
        </div>
      </Content>
    </motion.div>
  )
}

export default DeadBody
