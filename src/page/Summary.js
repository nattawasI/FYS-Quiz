import React, {useState, useEffect} from 'react'
import {useRouteActionContext} from '../context/RouteContext'
import {useUserStateContext} from '../context/UserContext'
import {motion} from 'framer-motion'
import {containerVariant} from '../variable/MotionVariant'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Content from '../layout/Content'
import ButtonSound from '../component/ButtonSound'
import ButtonNext from '../component/ButtonNext'
import ImgNoteMd from '../image/page/summary/img_note_md.svg'
import ImgNoteSm from '../image/page/summary/img_note_sm.svg'
import ImgRisk100Md from '../image/page/summary/img_risk_100_md.svg'
import ImgRisk100Sm from '../image/page/summary/img_risk_100_sm.svg'

// Motion Variants
const textVariant = {
  hidden: {
    opacity: 0,
    y: -90
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: "easeInOut",
      duration: 1,
      delay: 1,
    }
  }
}

const paperMdVariant = {
  hidden: {
    opacity: 0,
    y: -90
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: "easeInOut",
      duration: 1,
      delay: 1,
    }
  }
}

const noteVariant = {
  hidden: {
    opacity: 0,
    y: 90
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: "easeInOut",
      duration: 1,
      delay: 1,
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

const Summary = () => {
  // route context
  const {changeCurrentPageContext} = useRouteActionContext()
  const {choicesContext} = useUserStateContext()

  // utility hook
  const isWindowSmall = UseWindowSmall()

  // state
  const [animateComplete, setAnimateComplete] = useState(false)
  const [paperSmRender, setPaperSmRender] = useState(false)

  // function
  const goToNextPage = () => { 
    changeCurrentPageContext('ResultSymptoms')
  }

  const touchPanelSm = () => {
    if (isWindowSmall && animateComplete) {
      goToNextPage()
    }
  }

  useEffect(() => {
    if (isWindowSmall) {
      setTimeout(() => {
        setPaperSmRender(true)
      }, 1800);
    }
  }, [isWindowSmall, paperSmRender])

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ButtonSound />
      <Content bgColor="blue">
        <div className="scene-panel summary" onClick={touchPanelSm}>
          <motion.div className="summary__content"
            variants={textVariant}
            initial="hidden"
            animate="show"
            onAnimationComplete={ () => setAnimateComplete(true) }
          >
            <div className="text-summary">
              <div className="text-summary__title">สรุปจากการให้ปากคำของคุณ</div>
              <ul className="text-summary__list list-summary">
                <li className="list-summary__item">ออกกำลังกาย</li>
                <li className="list-summary__item">หิวมาก แวะหาอะไรกินต่อ</li>
                <li className="list-summary__item">เดือนละ 1 ครั้ง</li>
                <li className="list-summary__item">พากันไปหาของกินต่อ</li>
              </ul>
            </div>
          </motion.div>
          {
            isWindowSmall
            ? <div className={`summary__paper${paperSmRender? ' animate': ''}`}>
                <img src={ImgRisk100Sm} alt="" />
              </div>
            : <motion.div className="summary__paper"
                initial="hidden"
                animate="show"
                variants={paperMdVariant}
              >
                <img src={ImgRisk100Md} alt="" />
              </motion.div>
          }
          <motion.div className="summary__note"
            variants={noteVariant}
            initial="hidden"
            animate="show"
          >
            <img src={isWindowSmall? ImgNoteSm: ImgNoteMd} alt="" />
          </motion.div>
        </div>
      </Content>
      {
        !isWindowSmall
        && <motion.div className="button-fixed-right-bottom"
            variants={buttonVariant}
            initial="hidden"
            animate="show"
          >
            <ButtonNext onClick={goToNextPage} />
          </motion.div>
      }
    </motion.div>
  )
}

export default Summary
