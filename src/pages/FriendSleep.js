import React, {useState, useEffect} from 'react'
import {useUserStateContext} from '../contexts/UserContext'
import {useSoundActionContext} from '../contexts/SoundContext'
import {motion} from 'framer-motion'
import UseWindowSmall from '../hooks/useWindowSmall'
import Content from '../layout/Content'
import ButtonNext from '../components/ButtonNext'
import ModalFormFriend from '../components/ModalFormFriend'
import ImgHumanSleepMd from '../assets/images/page/start/img_human_sleep_md.svg'
import ImgHumanSleepSm from '../assets/images/page/start/img_human_sleep_sm.svg'

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
  // context
  const {friendInfoContext} = useUserStateContext()
  const {playClickSoundContext} = useSoundActionContext()

  // hooks
  const isWindowSmall = UseWindowSmall()

  // state
  const [completedScene, setCompletedScene] = useState(false)
  const [showModal, setShowModal] = useState(false)

  // function
  const openModalFormFriend = () => {
    playClickSoundContext()
    setShowModal(true)
  }

  const touchPanelSm = () => {
    if (isWindowSmall && completedScene) {
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
      {
        showModal && <ModalFormFriend />
      }
      <Content>
        <div className="scene-panel friend-sleep" onTouchStart={touchPanelSm}>
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
                  onAnimationComplete={ () => setCompletedScene(true) }
                >
                  <ButtonNext onClick={openModalFormFriend} animateCompleted={completedScene} />
                </motion.div>
            }
          </div>
          <motion.div className="friend-sleep__friend"
            variants={friendVariant}
            initial={friendInfoContext.name? false: "hidden"}
            animate="show"
            onAnimationComplete={() => setCompletedScene(true)}
          >
            <img src={isWindowSmall ? ImgHumanSleepSm: ImgHumanSleepMd} alt="เพื่อนนอนสลบอยู่บนโต๊ะกินข้าว" />
          </motion.div>
        </div>
      </Content>
    </>
  )
}

export default FriendSleep
