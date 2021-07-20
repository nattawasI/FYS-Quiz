
import React, {useState} from 'react'
import {useRouteActionContext} from '../context/RouteContext'
import {motion, AnimatePresence} from 'framer-motion'
import {containerVariant} from '../variable/MotionVariant'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Content from '../layout/Content'
import ButtonBack from '../component/ButtonBack'
import ButtonSound from '../component/ButtonSound'
import ButtonNext from '../component/ButtonNext'
import ImgToilet from '../image/page/result-symptoms/img_toilet.svg'
import ImgWeightLoss from '../image/page/result-symptoms/img_weight_loss.svg'
import ImgTired from '../image/page/result-symptoms/img_tired.svg'
import ImgNumb from '../image/page/result-symptoms/img_numb.svg'
import ImgThirsty from '../image/page/result-symptoms/img_thirsty.svg'
import ImgSlowRecovery from '../image/page/result-symptoms/img_slow_recovery.svg'

// motion Variant
const sceneVariant = {
  hidden: {
    opacity: 0,
    y: 70
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      delay: 0.7,
      duration: 1
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 0.7
    }
  }
}

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
      delay: 0.7,
      duration: 1
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
      delay: 0.7,
      duration: 1,
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
      delay: 1.2,
      duration: 0.7
    }
  },
  exit: {
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 0.7
    }
  }
}

const ResultSymptoms = () => {
  const {changeCurrentPageContext} = useRouteActionContext()
  const isWindowSmall = UseWindowSmall()

  // state
  const [showScene1, setShowScene1] = useState(true)
  const [showScene2, setShowScene2] = useState(false)
  const [showScene3, setShowScene3] = useState(false)

  // function
  const goToPrevPage = () => {
    changeCurrentPageContext('CausesOfDiabetes')
  }

  const goToNextPage = () => {
    changeCurrentPageContext('Suggestion')
  }

  const changeToScene2 = () => {
    setShowScene1(false)
    setShowScene2(true)
  }

  const changeToScene3 = () => {
    setShowScene2(false)
    setShowScene3(true)
  }

  let nextScene = ''
  const skipScene = () => {
    if (isWindowSmall) {
      if (nextScene === 'scene2') {
        setShowScene1(false)
        setShowScene2(true)
      } else if (nextScene === 'scene3') {
        setShowScene1(false)
        setShowScene2(false)
        setShowScene3(true)
      } else if (nextScene === 'NextPage') {
        goToNextPage()
      }
    }
  }

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ButtonBack dark onClick={goToPrevPage} />
      <ButtonSound dark />
      <Content bgColor="white">
        <div className="scene-panel scene-animate" onClick={skipScene}>
          <div className="box-story scene-animate__scene scene-animate__scene--1">
            <AnimatePresence>
              {
                showScene1
                && <motion.p className="box-story__text text-story text-story--black"
                  key="scene1"
                  variants={sceneVariant}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  onAnimationComplete={ () => nextScene = 'scene2' }
                >นอกจากนี้ ฆาตกรยังเป็น<br /><span className="text-story--bigger">”ความเครียด”</span> <br className="sm-show" />ของเพื่อนคุณอีกด้วย</motion.p>
              }
              {
                !isWindowSmall && showScene1
                && <motion.div className="box-story__button"
                    key="buttonNextScene1"
                    variants={buttonVariant}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    <ButtonNext dark onClick={changeToScene2} />
                  </motion.div>
              }
            </AnimatePresence>
          </div>
          <div className="box-story scene-animate__scene scene-animate__scene--2">
            <AnimatePresence>
              {
                showScene2
                && <motion.p className="box-story__text text-story text-story--black"
                    key="scene2"
                    variants={sceneVariant}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    onAnimationComplete={ () => nextScene = 'scene3' }
                  >"จากการให้ปากคำ"<br /><span className="text-story--bigger">คุณเองก็มีความเสี่ยง <br className="sm-show" />”โรคเบาหวาน”</span> <br />เพราะพฤติกรรมของคุณบรอน <br className="sm-show" />คล้ายกับเพื่อนสนิท</motion.p>
              }
              {
                !isWindowSmall && showScene2
                && <motion.div className="box-story__button"
                    key="buttonNextScene1"
                    variants={buttonVariant}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    <ButtonNext dark onClick={changeToScene3} />
                  </motion.div>
              }
            </AnimatePresence>
          </div>
          {
            showScene3
            && <div className="risk-symptoms">
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
                    onAnimationComplete={ () => nextScene = 'NextPage' }
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
          }
        </div>
      </Content>
      {
        !isWindowSmall && showScene3
        && <AnimatePresence>
            <motion.div className="button-fixed-right-bottom"
              variants={buttonVariant}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <ButtonNext onClick={goToNextPage} />
            </motion.div>
          </AnimatePresence>
      }
    </motion.div>
  )
}

export default ResultSymptoms

