
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'
import UseWindowSmall from '../utilityhooks/useWindowSmall'
import Content from '../layouts/Content'
import ButtonSound from '../components/ButtonSound'
import ButtonNext from '../components/ButtonNext'

const textVariant = {
  hidden: {
    opacity: 0,
    y: 70
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      delay: 0.5,
      duration: 1
    }
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: {
      type: 'tween',
    }
  }
}

const buttonVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      type: 'tween',
      ease: "easeInOut",
      delay: 1.5,
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    transition: {
      type: 'tween',
      delay: 0
    }
  }
}

const FriendDead = ({nameFriend}) => {
  const isWindowSmall = UseWindowSmall()
  const [showText1, setShowText1] = useState(true)
  const [showText2, setShowText2] = useState(false)

  const changeToText2 = () => {
    setShowText1(false)

    setTimeout(() => {
      setShowText2(true)
    }, 300)
  }

  return (
    <>
      <ButtonSound />
      <Content>
        <div className="scene-panel friend-dead">
          <div className="box-story">
            <AnimatePresence exitBeforeEnter>
              {
                showText1
                && <motion.p className="box-story__text text-story"
                  variants={textVariant}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >แต่กลับพบว่า<br />{nameFriend} ตัวเย็นเฉียบ<br />หน้าซีด และไม่หายใจ</motion.p>
              }
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
              {
                !isWindowSmall && showText1
                && <motion.div className="box-story__button"
                    variants={buttonVariant}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    <ButtonNext onClick={changeToText2} />
                  </motion.div>
              }
            </AnimatePresence>
            <AnimatePresence exitBeforeEnter>
              {
                showText2
                && <motion.p className="box-story__text text-story"
                  variants={textVariant}
                  initial="hidden"
                  animate="show"
                >{nameFriend}<br />"เสียชีวิต"</motion.p>
              }
              {
                !isWindowSmall && showText2
                && <motion.div className="box-story__button"
                    variants={buttonVariant}
                    initial="hidden"
                    animate="show"
                  >
                    <ButtonNext />
                  </motion.div>
              }
            </AnimatePresence>
          </div>
        </div>
      </Content>
    </>
  )
}

FriendDead.propTypes = {
  nameFriend: PropTypes.string.isRequired
}

export default FriendDead

