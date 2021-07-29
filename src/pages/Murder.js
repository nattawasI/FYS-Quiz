import React, {useState} from 'react'
import {useRouteActionContext} from '../contexts/RouteContext'
import {motion} from 'framer-motion'
import UseWindowSmall from '../hooks/useWindowSmall'
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
      duration: 1.5,
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
      duration: 1.5,
    }
  },
}

const Investigate = () => {
  // context
  const {changeCurrentPageContext} = useRouteActionContext()

  // hooks
  const isWindowSmall = UseWindowSmall()

  // state
  const [completedScene, setCompletedScene] = useState(false)

  // function
  const goToNextPage = () => {
    if (completedScene) {
      changeCurrentPageContext('Evidence')
    }
  }

  const touchPanelSm = () => {
    if (isWindowSmall && completedScene) {
      goToNextPage()
    }
  }

  return (
    <>
      <Content>
        <div className="scene-panel scene-panel--items-center murder" onTouchStart={touchPanelSm}>
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
              onAnimationComplete={() => setCompletedScene(true)}
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
                  aria-labelledby="murder-object-alt"
                >
                  <span id="murder-object-alt">Murderd body</span>
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
