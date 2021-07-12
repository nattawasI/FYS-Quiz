import React from 'react'
import {motion} from 'framer-motion'
import UseWindowSmall from '../utilityhooks/useWindowSmall'
import Content from '../layouts/Content'
import ButtonSound from '../components/ButtonSound'
import ButtonNext from '../components/ButtonNext'
import BgDeadManMd from '../image/pages/police-came/bg_deadman_md.svg'
import BgDeadManSm from '../image/pages/police-came/bg_deadman_sm.svg'

const PoliceCame = () => {
  // Motion Variants
  const bodyVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        delay: 0.5,
        duration: 1
      }
    }
  }

  const textVariant = {
    hidden: {
      opacity: 0,
      y: 50
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        delay: 0.5,
        duration: 1
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
        ease: "easeInOut",
        delay: 1.5,
        duration: 0.5
      }
    }
  }

  const isWindowSmall = UseWindowSmall()

  return (
    <>
      <ButtonSound />
      <Content>
        <div className="scene-panel police-came">
          <motion.div className="police-came__body"
            variants={bodyVariant}
            initial="hidden"
            animate="show"
          >
            <img src={isWindowSmall ? BgDeadManSm : BgDeadManMd} className="police-came__body-img" alt="ศพเพื่อนนอนตาย" />
          </motion.div>
          <div className="police-came__content box-story">
            <motion.p className="box-story__text text-story"
              variants={textVariant}
              initial="hidden"
              animate="show"
            >เมื่อตำรวจมาถึง ก็สำรวจที่เกิดเหตุทันที<br />แล้วขอเชิญคุณไปสอบสวน</motion.p>
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
        </div>
      </Content>
    </>
  )
}

export default PoliceCame
