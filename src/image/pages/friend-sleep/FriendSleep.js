import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {motion} from 'framer-motion'
import UseWindowSmall from '../utilityhooks/useWindowSmall'
import Content from '../layouts/Content'
import ButtonNext from '../components/ButtonNext'

// Motion Variants
const sceneVariant = {
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

const FriendSleep = () => {
  const isWindowSmall = UseWindowSmall()
  const history = useHistory()

  const linkToNextPage = () => {
    // history.push('/call-police')
  }

  return (
    <>
      <Content bgColor="white">
        <div className="scene-panel friend-sleep" onClick={linkToNextPage}>
          <div className="friend-sleep__content box-story">

              <motion.div
                  className="friend-sleep__scene"
                  key="scene1"
                  variants={sceneVariant}
                  exit='exit'
                >
                  <motion.p className="box-story__text friend-sleep__text"
                    variants={textVariant}
                    initial="hidden"
                    animate="show"
                  >หลังจากห้องสว่าง<br />คุณก็ได้พบกับเพื่อนสนิทของคุณ<br />หลับอยู่บนโต๊ะ</motion.p>
                  {
                    isWindowSmall
                    && <motion.div className="box-story__button"
                        variants={buttonVariant}
                        initial="hidden"
                        animate="show"
                      >
                        <ButtonNext />
                      </motion.div>
                  }
                </motion.div>
          </div>
        </div>
      </Content>
    </>
  )
}

export default FriendSleep
