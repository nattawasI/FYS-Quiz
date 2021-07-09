import React from 'react'
import {motion} from 'framer-motion'
import UseWindowSmall from '../utilityhooks/useWindowSmall'
import Content from '../layouts/Content'
import ButtonSound from '../components/ButtonSound'
import ButtonNext from '../components/ButtonNext'
import BgDeadManMd from '../image/pages/frienddead/bg_deadman_md.svg'
import BgDeadManSm from '../image/pages/frienddead/bg_deadman_sm.svg'

// Motion Variants
const bodyVariants = {
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

const textVariants = {
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

const buttonVariants = {
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

const FriendDead = () => {
  const isWindowSmall = UseWindowSmall()

  return (
    <>
      <ButtonSound />
      <Content>
        <div className="scene-panel frienddead">
          <motion.div className="frienddead__body"
            variants={bodyVariants}
            initial="hidden"
            animate="show"
          >
            <img src={isWindowSmall ? BgDeadManSm : BgDeadManMd} className="frienddead__body-img" alt="ศพเพื่อนนอนตาย" />
          </motion.div>
          <div className="frienddead__content box-story">
            <motion.p className="box-story__text text-story"
              variants={textVariants}
              initial="hidden"
              animate="show"
            >เมื่อตำรวจมาถึง ก็สำรวจที่เกิดเหตุทันที<br />แล้วขอเชิญคุณไปสอบสวน</motion.p>
            {
              !isWindowSmall
              && <motion.div className="box-story__button"
                  variants={buttonVariants}
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

export default FriendDead
