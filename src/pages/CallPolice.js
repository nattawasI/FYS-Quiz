import React from 'react'
import {motion} from 'framer-motion'
import Content from '../layouts/Content'
import ButtonBack from '../components/ButtonBack'
import ButtonSound from '../components/ButtonSound'
import IconCall from '../image/pages/callpolice/icon_call.svg'

const CallPolice = () => {
  return (
    <>
      <ButtonBack />
      <ButtonSound />
      <Content>
        <motion.div className="scene-panel callpolice"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1}}
        >
          <div className="callpolice__content box-story">
            <motion.p
              className="box-story__text text-story"
              initial={{y: 20, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{duration: 1}}
            >
              คุณตกใจมาก โวยวายเสียงดัง!<br />แล้วรีบหยิบมือถือ โทรแจ้งตำรวจทันที
            </motion.p>
            <motion.div
              className="box-story__button"
              initial={{y: 20, opacity: 0}}
              animate={{y: 0, opacity: 1}}
              transition={{delay: 1, duration: 1}}
            >
              <button type="button" className="button-call">
                <img src={IconCall} alt="Call Button" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </Content>
    </>
  )
}

export default CallPolice
