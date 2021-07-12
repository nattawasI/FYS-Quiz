
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'
import UseWindowSmall from '../utilityhooks/useWindowSmall'
import Content from '../layouts/Content'
import ButtonSound from '../components/ButtonSound'
import ButtonNext from '../components/ButtonNext'
import { v4 as uuidv4 } from 'uuid'

const CallPolice = ({nameFriend}) => {
  // motion Variant
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
      },
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

  const isWindowSmall = UseWindowSmall()
  const [showScene1, setShowScene1] = useState(true)
  const [showScene2, setShowScene2] = useState(false)
  const [showScene3, setShowScene3] = useState(false)

  const [endScene1, setEndScene1] = useState(false)
  const [endScene2, setEndScene2] = useState(false)

  const changeToScene2 = () => {
    setShowScene1(false)

    setTimeout(() => {
      setShowScene2(true)
    }, 300)
  }

  const changeToScene3 = () => {
    setShowScene2(false)

    setTimeout(() => {
      setShowScene3(true)
    }, 300)
  }

  const skipScene = () => {
    if (isWindowSmall) {
    //   if (endScene1) {
    //     setShowScene1(false)

    //     setTimeout(() => {
    //       setShowScene2(true)
    //     }, 300)
    //   } else if (endScene2) {
    //     setShowScene1(false)
    //     setShowScene2(false)

    //     setTimeout(() => {
    //       setShowScene3(true)
    //     }, 300)
    //   }
    }
  }

  return (
    <>
      <ButtonSound />
      <Content>
        <div className="scene-panel call-police" onClick={skipScene}>
          <div className="box-story">
            <AnimatePresence>
              {
                showScene1
                && <motion.p className="box-story__text text-story"
                  key={uuidv4()}
                  variants={textVariant}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  // onAnimationComplete={ () => setEndScene1(true) }
                >แต่กลับพบว่า<br />{nameFriend} ตัวเย็นเฉียบ<br />หน้าซีด และไม่หายใจ</motion.p>
              }
              {
                !isWindowSmall && showScene1
                && <motion.div className="box-story__button"
                    key={uuidv4()}
                    variants={buttonVariant}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    <ButtonNext onClick={changeToScene2} />
                  </motion.div>
              }
              {
                showScene2
                && <motion.p className="box-story__text text-story"
                  key={uuidv4()}
                  variants={textVariant}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  // onAnimationComplete={ () => setEndScene2(true) }
                >{nameFriend}<br />"เสียชีวิต"</motion.p>
              }
              {
                !isWindowSmall && showScene2
                && <motion.div className="box-story__button"
                    key={uuidv4()}
                    variants={buttonVariant}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    <ButtonNext onClick={changeToScene3} />
                  </motion.div>
              }
              {
                showScene3
                && <motion.p
                    key={uuidv4()}
                    className="box-story__text text-story"
                    variants={textVariant}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    คุณตกใจมาก โวยวายเสียงดัง!<br />แล้วรีบหยิบมือถือ โทรแจ้งตำรวจทันที
                  </motion.p>
              }
              {
                showScene3
                &&  <motion.div className="box-story__button" key="6"
                      variants={buttonVariant}
                      initial="hidden"
                      animate="show"
                    >
                      <button type="button" className="button-call">
                        <span className="button-call__btn button-call__btn--wave-out" alt="Call Button"></span>
                        <span className="button-call__btn button-call__btn--wave-in"></span>
                        <span className="button-call__btn button-call__btn--body"></span>
                        <span className="button-call__btn button-call__btn--touch"></span>
                      </button>
                    </motion.div>
              }
            </AnimatePresence>
          </div>
        </div>
      </Content>
    </>
  )
}

CallPolice.propTypes = {
  nameFriend: PropTypes.string.isRequired
}

export default CallPolice

