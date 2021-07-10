import React from 'react'
import {motion} from 'framer-motion'
import Content from '../layouts/Content'
import ButtonSound from '../components/ButtonSound'

const textVariants = {
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

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 70,
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

const CallPolice = () => {
  return (
    <>
      <ButtonSound />
      <Content>
        <div className="scene-panel callpolice"
        >
          <div className="callpolice__content box-story">
            <motion.p
              className="box-story__text text-story"
              variants={textVariants}
              initial="hidden"
              animate="show"
            >
              คุณตกใจมาก โวยวายเสียงดัง!<br />แล้วรีบหยิบมือถือ โทรแจ้งตำรวจทันที
            </motion.p>
            <motion.div className="box-story__button"
              variants={buttonVariants}
              initial="hidden"
              animate="show"
            >
              <button type="button" className="button-call">
                <span className="button-call__wave-out" alt="Call Button"></span>
                <span className="button-call__wave-in"></span>
                <span className="button-call__button"></span>
                <span className="button-call__touch"></span>
              </button>
            </motion.div>
          </div>
        </div>
      </Content>
    </>
  )
}

export default CallPolice
