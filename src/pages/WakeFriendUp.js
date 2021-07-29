import React, {useState} from 'react'
import {useRouteActionContext} from '../contexts/RouteContext'
import {motion} from 'framer-motion'
import {useUserStateContext} from '../contexts/UserContext'
import UseWindowSmall from '../hooks/useWindowSmall'
import UseCurrentDevice from '../hooks/useCurrentDevice'
import Content from '../layout/Content'
import ButtonBack from '../components/ButtonBack'
import ButtonNext from '../components/ButtonNext'
import ImgHumanSleepMd from '../assets/images/page/start/img_human_sleep_md.svg'
import ImgHumanSleepSm from '../assets/images/page/start/img_human_sleep_sm.svg'
import ImgArmMd from '../assets/images/page/friend-sleep/img_arm_md.svg'
import ImgArmSm from '../assets/images/page/friend-sleep/img_arm_sm.svg'

// Motion Variants
const friendVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1,
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
      duration: 1,
      delay: 1,
    }
  }
}

const armVariant = {
  hidden: {
    x: '50%',
    y: '100%',
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1,
      delay: 2
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
      duration: 0.7,
      delay: 3.5
    }
  }
}

const WakeFriendUp = () => {
  // context
  const {changeCurrentPageContext} = useRouteActionContext()
  const {friendInfoContext} = useUserStateContext()

  // hooks
  const isWindowSmall = UseWindowSmall()
  const currentDevice = UseCurrentDevice()

  const armKeyFrame = () => {
    if (currentDevice === 'desktop' || currentDevice === 'tablet') {
      return [0, 0, 0, 30, 0, 30]
    } else {
      return [0, 0, 0, 20, 0, 20]
    }
  }

  // motion variant which has dynamic
  const wakeVariant = {
    animate: {
      y: armKeyFrame(),
      transition: {
        type: 'tween',
        duration: 1,
        delay: 2.5
      }
    },
  }

  // state
  const [animateComplete, setAnimateComplete] = useState(false)
  const [completedScene, setCompletedScene] = useState(false)

  // function
  const goToPrevPage = () => {
    changeCurrentPageContext('FriendSleep')
  }

  const goToNextPage = () => {
    changeCurrentPageContext('CallPolice')
  }

  const touchPanelSm = () => {
    if (isWindowSmall && animateComplete) {
      goToNextPage()
    }
  }

  return (
    <>
      <ButtonBack onClick={goToPrevPage} />
      <Content>
        <div className="scene-panel friend-sleep" onTouchStart={touchPanelSm}>
          <div className="friend-sleep__text box-story">
            <motion.p className="box-story__text text-story"
              variants={textVariant}
              initial="hidden"
              animate="show"
            >คุณพยายามปลุก { friendInfoContext.name }<br />ให้ไปนอนบนที่นอน</motion.p>
            {
              !isWindowSmall
              && <motion.div className="box-story__button"
                  variants={buttonVariant}
                  initial="hidden"
                  animate="show"
                  onAnimationComplete={ () => setCompletedScene(true)}
                >
                  <ButtonNext onClick={goToNextPage} animateCompleted={completedScene} />
                </motion.div>
            }
          </div>
          <motion.div
            className="friend-sleep__arm"
            variants={armVariant}
            initial="hidden"
            animate="show"
          >
            <motion.img
              src={isWindowSmall? ImgArmSm: ImgArmMd}
              alt="แขน"
              variants={wakeVariant}
              animate="animate"
              onAnimationComplete={ () => setAnimateComplete(true) }
            />
          </motion.div>
          <motion.div className="friend-sleep__friend"
            variants={friendVariant}
            initial="hidden"
            animate="show"
          >
            <img src={isWindowSmall ? ImgHumanSleepSm: ImgHumanSleepMd} alt="เพื่อนนอนสลบอยู่บนโต๊ะกินข้าว" />
          </motion.div>
        </div>
      </Content>
    </>
  )
}

export default WakeFriendUp
