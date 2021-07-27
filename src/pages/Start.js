import React from 'react'
import PropTypes from 'prop-types'
import {useRouteActionContext} from '../contexts/RouteContext'
import {useSoundStateContext} from '../contexts/SoundContext'
import {motion} from 'framer-motion'
import UseWindowSmall from '../hooks/useWindowSmall'
import Content from '../layout/Content'
import ImgRibbonLeftMd from '../assets/images/page/start/img_ribbon_left_md.svg'
import ImgRibbonRightMd from '../assets/images/page/start/img_ribbon_right_md.svg'
import ImgRibbonLeftSm from '../assets/images/page/start/img_ribbon_left_sm.svg'
import ImgRibbonRightSm from '../assets/images/page/start/img_ribbon_right_sm.svg'
import ImgTitle from '../assets/images/page/start/img_title.svg'
import ImgHumanSleepMd from '../assets/images/page/start/img_human_sleep_md.svg'
import ImgHumanSleepSm from '../assets/images/page/start/img_human_sleep_sm.svg'
import {playSoundClick} from '../variables/SoundMethods'

// Motion Variants
const ribbonVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1,
    }
  }
}

const Start = ({sounds}) => {
  // context
  const {changeCurrentPageContext} = useRouteActionContext()
  const {muteContext} = useSoundStateContext()

  // utility hook
  const isWindowSmall = UseWindowSmall()

  const goToNextPage = () => {
    playSoundClick(muteContext)
    sounds[0].play()
    changeCurrentPageContext('Preface')
  }

  return (
    <>
      <motion.div className="start-ribbon-left"
        variants={ribbonVariant}
        initial="hidden"
        animate="show"
      >
        <img src={isWindowSmall ? ImgRibbonLeftSm: ImgRibbonLeftMd} alt="Crime scene do not enter" />
      </motion.div>
      <motion.div className="start-ribbon-right"
        variants={ribbonVariant}
        initial="hidden"
        animate="show"
      >
        <img src={isWindowSmall ? ImgRibbonRightSm: ImgRibbonRightMd} alt="Crime scene do not enter" />
      </motion.div>
      <Content>
        <div className="scene-panel start-content">
          <div className="start-content__heading">
            <h1 className="start-content__heading-title start-content__title">
              <img src={ImgTitle} alt="ฆาตกรบนโต๊ะอาหาร" />
            </h1>
            {
              isWindowSmall
              && <button type="button" className="start-content__heading-button start-content__button" onClick={goToNextPage}>
                  <span className="start-content__button-text">เริ่ม</span>
                </button>
            }
          </div>
          <div className="start-content__human">
            {
              !isWindowSmall
              && <div className="start-content__human-button">
                  <button type="button" className="start-content__button" onClick={goToNextPage}>
                    <span className="start-content__button-text">เริ่ม</span>
                  </button>
                </div>
            }
            <img src={isWindowSmall ? ImgHumanSleepSm: ImgHumanSleepMd} alt="เพื่อนนอนสลบอยู่บนโต๊ะกินข้าว" />
          </div>
        </div>
      </Content>
    </>
  )
}

Start.propTypes = {
  sounds: PropTypes.array.isRequired,
}

export default Start