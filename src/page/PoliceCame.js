import React, {useState} from 'react'
import {useUserStateContext} from '../context/UserContext'
import {motion, AnimatePresence} from 'framer-motion'
import {containerVariant} from '../variable/MotionVariant'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Content from '../layout/Content'
import ButtonSound from '../component/ButtonSound'
import ButtonNext from '../component/ButtonNext'
import BgDeadManMd from '../image/page/police-came/bg_deadman_md.svg'
import BgDeadManSm from '../image/page/police-came/bg_deadman_sm.svg'
import BgDeadWomenMd from '../image/page/police-came/bg_deadwomen_md.svg'
import BgDeadWomenSm from '../image/page/police-came/bg_deadwomen_sm.svg'

// Motion Variants
const bodyVariant = {
  hidden: {
    y: 70,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.7,
      delay: 0.5,
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
      ease: "easeInOut",
      duration: 0.7,
      delay: 0.5,
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
      duration: 0.7,
      delay: 1.5,
    }
  }
}

const PoliceCame = () => {
  // context
  const {friendInfoContext} = useUserStateContext()

  // utilityhook
  const isWindowSmall = UseWindowSmall()

  // state
  const [skipAnimate, setSkipAnimate] = useState(false)
  const [animateComplete, setAnimateComplete] = useState(false)


  // function
  const touchPanelSm = () => {
    if (isWindowSmall) {
      if (animateComplete) {
        //
      } else {
        if (!skipAnimate) {
          setAnimateComplete(true)
          setSkipAnimate(true)
        }
      }
    }
  }

  // function for rendering
  const renderBody = () => {
    if (isWindowSmall) {
      return (
        skipAnimate
        ? <div className="police-came__body">
            {
              friendInfoContext.gender === 'male'
              ? <img src={isWindowSmall ? BgDeadManSm : BgDeadManMd} className="police-came__body-img" alt="ศพเพื่อนนอนตาย" />
              : <img src={isWindowSmall ? BgDeadWomenSm : BgDeadWomenMd} className="police-came__body-img" alt="ศพเพื่อนนอนตาย" />
            }
          </div>
        : <AnimatePresence>
            <motion.div className="police-came__body"
              variants={bodyVariant}
              initial="hidden"
              animate="show"
            >
              {
                friendInfoContext.gender === 'male'
                ? <img src={isWindowSmall ? BgDeadManSm : BgDeadManMd} className="police-came__body-img" alt="ศพเพื่อนนอนตาย" />
                : <img src={isWindowSmall ? BgDeadWomenSm : BgDeadWomenMd} className="police-came__body-img" alt="ศพเพื่อนนอนตาย" />
              }
            </motion.div>
          </AnimatePresence>
      )
    } else {
      return (
        <motion.div className="police-came__body"
          variants={bodyVariant}
          initial="hidden"
          animate="show"
        >
          {
            friendInfoContext.gender === 'male'
            ? <img src={isWindowSmall ? BgDeadManSm : BgDeadManMd} className="police-came__body-img" alt="ศพเพื่อนนอนตาย" />
            : <img src={isWindowSmall ? BgDeadWomenSm : BgDeadWomenMd} className="police-came__body-img" alt="ศพเพื่อนนอนตาย" />
          }
        </motion.div>
      )
    }
  }

  const renderText = () => {
    if (isWindowSmall) {
      return (
        skipAnimate
        ? <p className="box-story__text text-story">เมื่อตำรวจมาถึง ก็สำรวจที่เกิดเหตุทันที<br />แล้วขอเชิญคุณไปสอบสวน</p>
        : <AnimatePresence>
            <motion.p className="box-story__text text-story"
              variants={textVariant}
              initial="hidden"
              animate="show"
              onAnimationComplete={ () => setAnimateComplete(true) }
            >เมื่อตำรวจมาถึง ก็สำรวจที่เกิดเหตุทันที<br />แล้วขอเชิญคุณไปสอบสวน</motion.p>
          </AnimatePresence>
      )
    } else {
      return (
        <>
          <motion.p className="box-story__text text-story"
            variants={textVariant}
            initial="hidden"
            animate="show"
            onAnimationComplete={ () => setAnimateComplete(true) }
          >เมื่อตำรวจมาถึง ก็สำรวจที่เกิดเหตุทันที<br />แล้วขอเชิญคุณไปสอบสวน</motion.p>
          <motion.div className="box-story__button"
            variants={buttonVariant}
            initial="hidden"
            animate="show"
          >
            <ButtonNext to="siren" />
          </motion.div>
        </>
      )
    }
  }

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ButtonSound />
      <Content>
        <div className="scene-panel police-came" onClick={touchPanelSm}>
          {
            renderBody()
          }
          <div className="police-came__content box-story">
            {
              renderText()
            }
          </div>
        </div>
      </Content>
    </motion.div>
  )
}

export default PoliceCame
