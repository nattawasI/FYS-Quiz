import React, {useState, useEffect} from 'react'
import {useUserStateContext} from '../context/UserContext'
import {motion} from 'framer-motion'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Content from '../layout/Content'
import ButtonNext from '../component/ButtonNext'
import ModalFormFriend from '../component/ModalFormFriend'
import ImgHumanSleepMd from '../image/page/start/img_human_sleep_md.svg'
import ImgHumanSleepSm from '../image/page/start/img_human_sleep_sm.svg'

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
      delay: 1
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
      ease: 'easeIn',
      duration: 0.7,
      delay: 3
    }
  }
}

const FriendSleep = () => {
  const {friendInfoContext} = useUserStateContext()
  const isWindowSmall = UseWindowSmall()

  // state
  const [animateComplete, setAnimateComplete] = useState(false)
  const [showModal, setShowModal] = useState(false)

  // function
  const openModalFormFriend = () => {
    setShowModal(true)
  }

  const touchPanelSm = () => {
    if (isWindowSmall && animateComplete) {
      openModalFormFriend()
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
    <>
      <Content>
        <div className="scene-panel friend-sleep" onClick={touchPanelSm}>
          <div className="friend-sleep__text box-story">
            <motion.p className="box-story__text text-story"
              variants={textVariant}
              initial={friendInfoContext.name? false: "hidden"}
              animate="show"
            >
              หลังจากห้องสว่าง<br />คุณก็ได้พบกับเพื่อนสนิทของคุณ<br />หลับอยู่บนโต๊ะ
            </motion.p>
            {
              !isWindowSmall
              && <motion.div className="box-story__button"
                  variants={buttonVariant}
                  initial={friendInfoContext.name? false: "hidden"}
                  animate="show"
                >
                  <ButtonNext onClick={openModalFormFriend} />
                </motion.div>
            }
          </div>
          <motion.div className="friend-sleep__friend"
            variants={friendVariant}
            initial={friendInfoContext.name? false: "hidden"}
            animate="show"
            onAnimationComplete={() => setAnimateComplete(true)}
          >
            <img src={isWindowSmall ? ImgHumanSleepSm: ImgHumanSleepMd} alt="เพื่อนนอนสลบอยู่บนโต๊ะกินข้าว" />
          </motion.div>
        </div>
      </Content>
      {
        showModal && <ModalFormFriend />
      }
    </>
  )
}

export default FriendSleep
