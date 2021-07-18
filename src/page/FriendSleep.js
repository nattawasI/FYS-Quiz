import React, {useState, useEffect} from 'react'
import {useUserStateContext} from '../context/UserContext'
import {motion, AnimatePresence} from 'framer-motion'
import {containerVariant} from '../variable/MotionVariant'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Content from '../layout/Content'
import ButtonNext from '../component/ButtonNext'
import ButtonSound from '../component/ButtonSound'
import ModalFormFriend from '../component/ModalFormFriend'
import ImgFriendSleepMd from '../image/page/friend-sleep/img_friend_sleep_md.svg'
import ImgFriendSleepSm from '../image/page/friend-sleep/img_friend_sleep_sm.svg'

// Motion Variants
const textVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1,
      delay: 0.5
    }
  }
}

const friendVariant = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
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
      delay: 3
    }
  }
}

const FriendSleep = () => {
  const { friendInfoContext } = useUserStateContext()
  const isWindowSmall = UseWindowSmall()

  // state
  const [skipAnimate, setSkipAnimate] = useState(false)
  const [animateComplete, setAnimateComplete] = useState(false)
  const [showModal, setShowModal] = useState(false)

  // function
  const openModalFormFriend = () => {
    setShowModal(true)
  }

  const touchPanelSm = () => {
    if (isWindowSmall) {
      if (animateComplete) {
        openModalFormFriend()
      }
      // else {
      //   if (!skipAnimate) {
      //     setAnimateComplete(true)
      //     setSkipAnimate(true)
      //   }
      // }
    }
  }

  // function for rendering
  const renderBackground = () => {
    if (isWindowSmall) {
      return (
        skipAnimate
        ? <div className="friend-sleep__friend">
            <img src={isWindowSmall ? ImgFriendSleepSm: ImgFriendSleepMd} alt="เพื่อนนอนสลบอยู่บนโต๊ะกินข้าว" />
          </div>
        : <AnimatePresence>
            <motion.div className="friend-sleep__friend"
              variants={friendVariant}
              initial="hidden"
              animate="show"
              onAnimationComplete={ () => setAnimateComplete(true) }
            >
              <img src={isWindowSmall ? ImgFriendSleepSm: ImgFriendSleepMd} alt="เพื่อนนอนสลบอยู่บนโต๊ะกินข้าว" />
            </motion.div>
          </AnimatePresence>
      )
    } else {
      return (
        <motion.div className="friend-sleep__friend"
          variants={friendVariant}
          initial="hidden"
          animate="show"
        >
          <img src={isWindowSmall ? ImgFriendSleepSm: ImgFriendSleepMd} alt="เพื่อนนอนสลบอยู่บนโต๊ะกินข้าว" />
        </motion.div>
      )
    }
  }

  const renderText = () => {
    if (isWindowSmall) {
      return (
        skipAnimate
        ? <p className="box-story__text text-story stt">
            หลังจากห้องสว่าง<br />คุณก็ได้พบกับเพื่อนสนิทของคุณ<br />หลับอยู่บนโต๊ะ
          </p>
        : <AnimatePresence>
            <motion.p className="box-story__text text-story"
              variants={textVariant}
              initial="hidden"
              animate="show"
            >
              หลังจากห้องสว่าง<br />คุณก็ได้พบกับเพื่อนสนิทของคุณ<br />หลับอยู่บนโต๊ะ
            </motion.p>
          </AnimatePresence>
      )
    } else {
      return (
        <>
          <motion.p className="box-story__text text-story"
            variants={textVariant}
            initial="hidden"
            animate="show"
          >
            หลังจากห้องสว่าง<br />คุณก็ได้พบกับเพื่อนสนิทของคุณ<br />หลับอยู่บนโต๊ะ
          </motion.p>
          <motion.div className="box-story__button"
            variants={buttonVariant}
            initial="hidden"
            animate="show"
          >
            <ButtonNext onClick={openModalFormFriend} />
          </motion.div>
        </>
      )
    }
  }

  useEffect(() => {
    if (friendInfoContext.name) {
      setShowModal(true)
    } else {
      setShowModal(false)
    }
  }, [friendInfoContext])

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ButtonSound />
      <Content>
        <div className="scene-panel friend-sleep" onClick={touchPanelSm}>
          <div className="friend-sleep__text box-story">
            {
              renderText()
            }
          </div>
          {
            renderBackground()
          }
        </div>
      </Content>
      {
        showModal && <ModalFormFriend />
      }
    </motion.div>
  )
}

export default FriendSleep
