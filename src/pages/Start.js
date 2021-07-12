import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import UseWindowSmall from '../utilityhooks/useWindowSmall'
import Content from '../layouts/Content'
import ButtonSound from '../components/ButtonSound'
import ImgRibbonLeftMd from '../image/pages/start/img_ribbon_left_md.svg'
import ImgRibbonRightMd from '../image/pages/start/img_ribbon_right_md.svg'
import ImgRibbonLeftSm from '../image/pages/start/img_ribbon_left_sm.svg'
import ImgRibbonRightSm from '../image/pages/start/img_ribbon_right_sm.svg'
import ImgTitle from '../image/pages/start/img_title.svg'
import ImgHumanSleepMd from '../image/pages/start/img_human_sleep_md.svg'
import ImgHumanSleepSm from '../image/pages/start/img_human_sleep_sm.svg'

// Motion Variants
const sceneVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 1
    }
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1
    }
  }
}

const Start = () => {
  const isSmallWindow = UseWindowSmall()
  return (
    <>
      <ButtonSound />
      <div className="start-ribbon-left">
        <img src={isSmallWindow ? ImgRibbonLeftSm: ImgRibbonLeftMd} alt="Crime scene do not enter" />
      </div>
      <div className="start-ribbon-right">
        <img src={isSmallWindow ? ImgRibbonRightSm: ImgRibbonRightMd} alt="Crime scene do not enter" />
      </div>
      <Content>
        <motion.div className="scene-panel start-content"
          variants={sceneVariant}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <div className="start-content__heading">
            <h1 className="start-content__heading-title start-content__title">
              <img src={ImgTitle} alt="ฆาตกรบนโต๊ะอาหาร" />
            </h1>
            <Link to="/preface" className="start-content__heading-button start-content__button">
              <span className="start-content__button-text">เริ่ม</span>
            </Link>
          </div>
          <div className="start-content__human">
            <img src={isSmallWindow ? ImgHumanSleepSm: ImgHumanSleepMd} alt="เพื่อนนอนสลบอยู่บนโต๊ะกินข้าว" />
          </div>
        </motion.div>
      </Content>
    </>
  )
}

export default Start