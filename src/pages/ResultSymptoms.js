
import React, {useState} from 'react'
import {useRouteActionContext} from '../contexts/RouteContext'
import {motion} from 'framer-motion'
import UseWindowSmall from '../utilityhooks/useWindowSmall'
import Content from '../layout/Content'
import ButtonNext from '../components/ButtonNext'
import ImgToilet from '../assets/images/page/result-symptoms/img_toilet.svg'
import ImgWeightLoss from '../assets/images/page/result-symptoms/img_weight_loss.svg'
import ImgTired from '../assets/images/page/result-symptoms/img_tired.svg'
import ImgNumb from '../assets/images/page/result-symptoms/img_numb.svg'
import ImgThirsty from '../assets/images/page/result-symptoms/img_thirsty.svg'
import ImgSlowRecovery from '../assets/images/page/result-symptoms/img_slow_recovery.svg'

// motion Variant
const titleRiskSymptomsVariant = {
  hidden: {
    opacity: 0,
    y: 50
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1,
      delay: 0.7
    }
  }
}

const listRiskSymptomsVariant = {
  hidden: {
    opacity: 0,
    y: 70
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1,
      delay: 0.7
    }
  }
}

const bgRiskSymptomsVariant = {
  hidden: {
    opacity: 0,
    y: 70
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1,
      delay: 0.7
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
      ease: 'easeInOut',
      duration: 0.7,
      delay: 1.2,
    }
  },
}

const ResultSymptoms = () => {
  const {changeCurrentPageContext} = useRouteActionContext()
  const isWindowSmall = UseWindowSmall()

  // state
  const [animateComplete, setAnimateComplete] = useState(false)

  // function
  const goToNextPage = () => {
    changeCurrentPageContext('Suggestion')
  }

  const touchPanelSm = () => {
    if (isWindowSmall && animateComplete) {
      goToNextPage()
    }
  }

  return (
    <>
      <Content bgColor="white">
        <div className="scene-panel scene-animate" onClick={touchPanelSm}>
          <div className="risk-symptoms">
            <motion.p className="text-story text-story--black risk-symptoms__title"
              variants={titleRiskSymptomsVariant}
              initial="hidden"
              animate="show"
            >
              คุณเองก็เช็กความเสี่ยงโรคเบาหวาน<br />ได้จากอาการเหล่านี้
            </motion.p>
            <motion.div className="risk-symptoms__list"
              variants={listRiskSymptomsVariant}
              initial="hidden"
              animate="show"
            >
              <motion.div className="risk-symptoms__curve"
                variants={bgRiskSymptomsVariant}
                initial="hidden"
                animate="show"
                onAnimationComplete={() => setAnimateComplete(true)}
              ></motion.div>
              <ul className="list-risk-symptoms">
                <li className="list-risk-symptoms__item">
                  <div className="list-risk-symptoms__card">
                    <figure className="list-risk-symptoms__image">
                      <img src={ImgToilet} alt="กลางคืนปัสสาวะบ่อย" />
                    </figure>
                    <div className="list-risk-symptoms__text">กลางคืนปัสสาวะบ่อย</div>
                  </div>
                </li>
                <li className="list-risk-symptoms__item">
                  <div className="list-risk-symptoms__card">
                    <figure className="list-risk-symptoms__image">
                      <img src={ImgWeightLoss} alt="น้ำหนักลดไม่มีสาเหตุ" />
                    </figure>
                    <div className="list-risk-symptoms__text">น้ำหนักลดไม่มีสาเหตุ</div>
                  </div>
                </li>
                <li className="list-risk-symptoms__item">
                  <div className="list-risk-symptoms__card">
                    <figure className="list-risk-symptoms__image">
                      <img src={ImgTired} alt="เหนื่อยง่าย" />
                    </figure>
                    <div className="list-risk-symptoms__text">เหนื่อยง่าย</div>
                  </div>
                </li>
                <li className="list-risk-symptoms__item">
                  <div className="list-risk-symptoms__card">
                    <figure className="list-risk-symptoms__image">
                      <img src={ImgNumb} alt="มือเท้ามีอาการชา" />
                    </figure>
                    <div className="list-risk-symptoms__text">มือเท้ามีอาการชา</div>
                  </div>
                </li>
                <li className="list-risk-symptoms__item">
                  <div className="list-risk-symptoms__card">
                    <figure className="list-risk-symptoms__image">
                      <img src={ImgThirsty} alt="หิวน้ำตลอดเวลา" />
                    </figure>
                    <div className="list-risk-symptoms__text">หิวน้ำตลอดเวลา</div>
                  </div>
                </li>
                <li className="list-risk-symptoms__item">
                  <div className="list-risk-symptoms__card">
                    <figure className="list-risk-symptoms__image">
                      <img src={ImgSlowRecovery} alt="แผลหายช้า" />
                    </figure>
                    <div className="list-risk-symptoms__text">แผลหายช้า</div>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
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
    </>
  )
}

export default ResultSymptoms

