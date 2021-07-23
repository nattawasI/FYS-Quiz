import React, {useState} from 'react'
import {useRouteActionContext} from '../context/RouteContext'
import {motion} from 'framer-motion'
import {containerVariant} from '../variable/MotionVariant'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Content from '../layout/Content'
import ButtonSound from '../component/ButtonSound'
import MurderImage from '../image/page/murder/img_murder.svg'
import PointerIcon from '../image/icon/icon_pointer.svg'

// Motion Variants
const textVariant = {
  hidden: {
    opacity: 0,
    y: 180,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    }
  },
}

const evidenceVariant = {
  hidden: {
    opacity: 0,
    y: 180,
    scale: 0.5,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
    }
  },
}

const Investigate = () => {
  // route context
  const {changeCurrentPageContext} = useRouteActionContext()

  // utility hook
  const isWindowSmall = UseWindowSmall()

  // state
  const [animateComplete, setAnimateComplete] = useState(false)

  // function
  const goToNextPage = () => {
    if (animateComplete) {
      changeCurrentPageContext('Evidence')
    }
  }

  const completeAnimated = () => setAnimateComplete(true)

  const touchPanelSm = () => {
    if (isWindowSmall && animateComplete) {
      goToNextPage()
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
        <div className="scene-panel scene-panel--items-center murder" onClick={touchPanelSm}>
          <div className="murder__container">
            <motion.div
              className="murder__content"
              variants={textVariant}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <p className="murder__text text-story">คุณอาจสงสัยว่าใครคือ</p>
              <p className="murder__text text-story--bigger">"ฆาตกร"</p>
              <p className="murder__text murder__text--pointing text-story text-story--small">ลองดูนี่</p>
            </motion.div>
            <motion.div
              className="murder__figure"
              variants={evidenceVariant}
              initial="hidden"
              animate="show"
              exit="exit"
              onAnimationComplete={completeAnimated}
            >
              <motion.img
                className="murder__image"
                src={MurderImage}
                alt="murder evidence"
                whileHover={{ y: -20 }}
                onClick={goToNextPage}
              />
              <img className="murder__icon" src={PointerIcon} alt="" />
            </motion.div>
          </div>
        </div>
      </Content>
    </motion.div>
  )
}

export default Investigate
