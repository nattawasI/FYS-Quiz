import React from 'react'
import {motion} from 'framer-motion'
import Content from '../layouts/Content'
import ButtonSound from '../components/ButtonSound'

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
      duration: 1.5
    }
  }
}

const buttonVariant = {
  hidden: {
    opacity: 0,
    y: 90,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      delay: 0.6,
      duration: 1.5
    }
  }
}

const CallPolice = () => {
  return (
    <>
      <ButtonSound />
      <Content>
        <div className="scene-panel call-police"
        >
          <div className="call-police__content box-story">
            <motion.p
              className="box-story__text text-story"
              variants={textVariant}
              initial="hidden"
              animate="show"
            >
              คุณตกใจมาก โวยวายเสียงดัง!<br />แล้วรีบหยิบมือถือ โทรแจ้งตำรวจทันที
            </motion.p>
            <motion.div className="box-story__button"
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
          </div>
        </div>
      </Content>
    </>
  )
}

export default CallPolice
