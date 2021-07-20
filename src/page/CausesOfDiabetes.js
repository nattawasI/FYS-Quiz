
import React, {useState, useRef, useEffect} from 'react'
import {useRouteActionContext} from '../context/RouteContext'
import {useUserStateContext, useUserActionContext} from '../context/UserContext'
import {motion, AnimatePresence} from 'framer-motion'
import {containerVariant} from '../variable/MotionVariant'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Content from '../layout/Content'
import ButtonSound from '../component/ButtonSound'
import ButtonNext from '../component/ButtonNext'
import ButtonBack from '../component/ButtonBack'
import InputText from '../component/InputText'
import ImgHabit from '../image/page/causes-of-diabetes/img-habit.svg'
import ImgDna from '../image/page/causes-of-diabetes/img-dna.svg'
import ImgHabitDna from '../image/page/causes-of-diabetes/img-habit-dna.svg'

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
      duration: 1,
      delay: 0.7,
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

const buttonVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.7,
      delay: 1.3,
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

const CausesOfDiabetes = () => {
  const {changeCurrentPageContext} = useRouteActionContext()
  const {symptomContext} = useUserStateContext()
  const {addSymptomContext} = useUserActionContext()
  const isWindowSmall = UseWindowSmall()

  // ref
  const inputRef = useRef(null)

  // state
  const [showScene1, setShowScene1] = useState(true)
  const [showScene2, setShowScene2] = useState(false)
  const [showScene3, setShowScene3] = useState(false)
  const [error, setError] = useState(false)

  // function
  const backToPrevPage = () => {
    changeCurrentPageContext('VideoDoctor')
  }

  const goToNextPage = () => {
    changeCurrentPageContext('ResultSymptoms')
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
  // const skipScene = () => {
  //   if (isWindowSmall) {
  //     if (nextScene === 'scene2') {
  //       setShowScene1(false)
  //       setShowScene2(true)
  //     } else if (nextScene === 'scene3') {
  //       setShowScene1(false)
  //       setShowScene2(false)
  //       setShowScene3(true)
  //     }
  //   }
  // }

  const submitSympton = (e) => {
    e.preventDefault()
    const inputValue = inputRef.current.value
    if (inputValue) {
      addSymptomContext(inputValue)
      changeToScene3()
    } else {
      setError(true)
    }
  }

  useEffect(() => {
    if (symptomContext) {
      setShowScene1(false)
      setShowScene2(false)
      setShowScene3(true)
    }
  }, [symptomContext])

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {
        showScene1 && <ButtonBack onClick={backToPrevPage} />
      }
      <ButtonSound />
      <Content bgColor="blue">
        <div className="scene-panel scene-panel--items-center scene-animate">
          <div className="box-story scene-animate__scene scene-animate__scene--1">
            <AnimatePresence>
              {
                showScene1
                && <motion.div className="box-story__text causes-of-diabetes"
                    key="scene1"
                    variants={sceneVariant}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    <motion.p className="box-story__text text-story causes-of-diabetes__text"
                      key="scene1"
                      variants={sceneVariant}
                      initial="hidden"
                      animate="show"
                    >คุณรู้ไหม<br /><span className="text-story--bigger">"โรคเบาหวาน"</span> <br className="sm-show" />เกิดจากอะไร?</motion.p>
                    <ul className="causes-of-diabetes__list list-causes-of-diabetes">
                      <li className="list-causes-of-diabetes__item">
                        <div className="list-causes-of-diabetes__card" onClick={changeToScene2}>
                          <figure className="list-causes-of-diabetes__image">
                            <img src={ImgHabit} alt="พฤติกรรมการใช้ชีวิตประจำวัน" />
                          </figure>
                          <div className="list-causes-of-diabetes__text">พฤติกรรม<br />การใช้ชีวิตประจำวัน</div>
                        </div>
                      </li>
                      <li className="list-causes-of-diabetes__item">
                        <div className="list-causes-of-diabetes__card" onClick={changeToScene2}>
                          <figure className="list-causes-of-diabetes__image">
                            <img src={ImgDna} alt="พันธุกรรม" />
                          </figure>
                          <div className="list-causes-of-diabetes__text">พันธุกรรม</div>
                        </div>
                      </li>
                      <li className="list-causes-of-diabetes__item">
                        <div className="list-causes-of-diabetes__card" onClick={changeToScene2}>
                          <figure className="list-causes-of-diabetes__image">
                            <img src={ImgHabitDna} alt="เป็นได้ทั้ง 2 อย่าง" />
                          </figure>
                          <div className="list-causes-of-diabetes__text">เป็นได้ทั้ง 2 อย่าง</div>
                        </div>
                      </li>
                    </ul>
                  </motion.div>
              }
            </AnimatePresence>
          </div>
          <div className="box-story scene-animate__scene scene-animate__scene--3">
            <form onSubmit={submitSympton}>
              {
                showScene2
                && <motion.div className="box-story__text symptoms"
                    key="scene2"
                    variants={sceneVariant}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                      <p className="text-story causes-of-diabetes__text">แล้วรู้ไหม<br /><span className="text-story--bigger">"โรคเบาหวาน"</span> <br className="sm-show" />มีอาการเป็นอย่างไร?</p>
                      <div className="symptoms__input">
                        <InputText
                          ref={inputRef}
                          isError={error}
                          value={symptomContext}
                          placeholder="ถ้าไม่รู้ลองพิมพ์เดาดูก่อนก็ได้..."
                        />
                      </div>
                      {
                        showScene2
                        &&  <div className="symptoms__button">
                              <ButtonNext onClick={submitSympton} />
                            </div>
                      }
                  </motion.div>
              }
            </form>
          </div>
          <div className="box-story scene-animate__scene scene-animate__scene--3">
            <AnimatePresence>
              {
                showScene3
                && <motion.p className="box-story__text text-story"
                  key="scene1"
                  variants={sceneVariant}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  onAnimationComplete={ () => nextScene = 'scene2' }
                >นอกจากนี้ ฆาตกรยังเป็น<br /><span className="text-story--bigger">”ความเครียด”</span> <br />ของเพื่อนคุณอีกด้วย</motion.p>
              }
              {
                !isWindowSmall && showScene3
                && <motion.div className="box-story__button"
                    key="buttonNextScene1"
                    variants={buttonVariant}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    <ButtonNext onClick={goToNextPage} />
                  </motion.div>
              }
            </AnimatePresence>
          </div>
        </div>
      </Content>
    </motion.div>
  )
}

export default CausesOfDiabetes

