import React, {useState} from 'react'
import {useRouteActionContext} from '../contexts/RouteContext'
import {useSoundActionContext} from '../contexts/SoundContext'
import {motion} from 'framer-motion'
import UseWindowSmall from '../utilityhooks/useWindowSmall'
import Content from '../layout/Content'
import MurderImage from '../assets/images/page/murder/img_murder.svg'
import PointerIcon from '../assets/images/icon/icon_pointer.svg'

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
  // context
  const {changeCurrentPageContext} = useRouteActionContext()
  const {playClickSoundContext} = useSoundActionContext()

  // utility hook
  const isWindowSmall = UseWindowSmall()

  // state
  const [animateComplete, setAnimateComplete] = useState(false)

  // function
  const goToNextPage = () => {
    if (animateComplete) {
      playClickSoundContext()
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
    <>
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
              className="murder__evidance"
              variants={evidenceVariant}
              initial="hidden"
              animate="show"
              exit="exit"
              onAnimationComplete={completeAnimated}
            >
              <motion.div
                className="murder__figure"
                whileHover={{ y: -20 }}
                onClick={goToNextPage}
              >
                <motion.object
                  className="murder__image"
                  data={ MurderImage }
                  type="image/svg+xml"
                >
                  {/* <img src="yourfallback.jpg" /> */}
                </motion.object>
              </motion.div>
              <img className="murder__icon" src={PointerIcon} alt="" />
            </motion.div>
          </div>
        </div>
      </Content>
    </>
  )
}

export default Investigate
