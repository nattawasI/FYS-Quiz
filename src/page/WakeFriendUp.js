import React from 'react'
import {useHistory} from 'react-router-dom'
import {motion} from 'framer-motion'
import { useUserStateContext } from '../context/UserContext'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Content from '../layout/Content'
import ButtonBack from '../component/ButtonBack'
import ButtonNext from '../component/ButtonNext'
import ButtonSound from '../component/ButtonSound'
import ImgFriendSleepMd from '../image/page/friend-sleep/img_friend_sleep_md.svg'
import ImgFriendSleepSm from '../image/page/friend-sleep/img_friend_sleep_sm.svg'
import ImgArmMd from '../image/page/wake-friend-up/img_arm_md.svg'

// Motion Variants
const containerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1
    }
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1
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

const wakeVariant = {
  animate: {
    y: [-30, 0, -30, 0],
    transition: {
      type: 'tween',
      duration: 1,
      delay: 3
    }
  },
}

const buttonVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1,
      delay: 4
    }
  }
}

const WakeFriendUp = () => {
  const { friendInfoContext } = useUserStateContext()
  const isWindowSmall = UseWindowSmall()
  const history = useHistory()
  let allowLinkToNext = false

  const linkToNextPage = () => {
    if (isWindowSmall && allowLinkToNext) {
      history.push('/call-police')
    }
  }

  return (
    <>
      <ButtonBack to="/friend-sleep" />
      <ButtonSound />
      <Content>
        <motion.div className="scene-panel friend-sleep"
          variants={containerVariant}
          initial="hidden"
          animate="show"
          exit="exit"
          onClick={linkToNextPage}
        >
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
                >
                  <ButtonNext to="/call-police" />
                </motion.div>
            }
          </div>
          <div className="friend-sleep__friend">
            <img src={isWindowSmall ? ImgFriendSleepSm: ImgFriendSleepMd} alt="เพื่อนนอนสลบอยู่บนโต๊ะกินข้าว" />
          </div>
          <motion.div
            className="friend-sleep__arm"
            variants={armVariant}
            initial="hidden"
            animate="show"
          >
            <motion.img
              src={ImgArmMd}
              alt="แขน"
              variants={wakeVariant}
              animate="animate"
              onAnimationComplete={ () => allowLinkToNext = true }
            />
          </motion.div>
        </motion.div>
      </Content>
    </>
  )
}

export default WakeFriendUp
