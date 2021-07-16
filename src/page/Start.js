import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {homeVariant} from '../variable/MotionVariant'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Content from '../layout/Content'
import ButtonSound from '../component/ButtonSound'
import ImgRibbonLeftMd from '../image/page/start/img_ribbon_left_md.svg'
import ImgRibbonRightMd from '../image/page/start/img_ribbon_right_md.svg'
import ImgRibbonLeftSm from '../image/page/start/img_ribbon_left_sm.svg'
import ImgRibbonRightSm from '../image/page/start/img_ribbon_right_sm.svg'
import ImgTitle from '../image/page/start/img_title.svg'
import ImgHumanSleepMd from '../image/page/start/img_human_sleep_md.svg'
import ImgHumanSleepSm from '../image/page/start/img_human_sleep_sm.svg'

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

const Start = () => {
  const isWindowSmall = UseWindowSmall()

  return (
    <motion.div
      variants={homeVariant}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ButtonSound />
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
            <Link to="/preface" className="start-content__heading-button start-content__button">
              <span className="start-content__button-text">เริ่ม</span>
            </Link>
          </div>
          <div className="start-content__human">
            <img src={isWindowSmall ? ImgHumanSleepSm: ImgHumanSleepMd} alt="เพื่อนนอนสลบอยู่บนโต๊ะกินข้าว" />
          </div>
        </div>
      </Content>
    </motion.div>
  )
}

export default Start