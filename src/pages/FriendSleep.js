import React from 'react'
import {useHistory} from 'react-router-dom'
import {motion} from 'framer-motion'
import UseWindowSmall from '../utilityhooks/useWindowSmall'
import Content from '../layouts/Content'
import ButtonNext from '../components/ButtonNext'
import ImgFriendSleepMd from '../image/pages/friend-sleep/img_friend_sleep_md.svg'
import ImgFriendSleepSm from '../image/pages/friend-sleep/img_friend_sleep_sm.svg'

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
      duration: 1
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
      duration: 1,
      delay: 1
    }
  }
}

const friendVariant = {
  hidden: {
    y: 70,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1
    }
  }
}

const FriendSleep = () => {
  const isWindowSmall = UseWindowSmall()
  const history = useHistory()

  const linkToNextPage = () => {
    // history.push('/call-police')
  }

  return (
    <>
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
            >หลังจากห้องสว่าง<br />คุณก็ได้พบกับเพื่อนสนิทของคุณ<br />หลับอยู่บนโต๊ะ</motion.p>
            {
              !isWindowSmall
              && <motion.div className="box-story__button"
                  variants={buttonVariant}
                  initial="hidden"
                  animate="show"
                >
                  <ButtonNext />
                </motion.div>
            }
          </div>
          <div className="friend-sleep__friend">
            <img src={isWindowSmall ? ImgFriendSleepSm: ImgFriendSleepMd} alt="เพื่อนนอนสลบอยู่บนโต๊ะกินข้าว" />
          </div>
        </motion.div>
      </Content>
    </>
  )
}

export default FriendSleep
