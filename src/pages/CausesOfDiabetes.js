
import React, {useState, useRef, useEffect} from 'react'
import {useRouteActionContext} from '../contexts/RouteContext'
import {useUserStateContext, useUserActionContext} from '../contexts/UserContext'
import {useSoundActionContext} from '../contexts/SoundContext'
import {motion, AnimatePresence} from 'framer-motion'
import UseWindowSmall from '../hooks/useWindowSmall'
import Content from '../layout/Content'
import ButtonNext from '../components/ButtonNext'
import ButtonBack from '../components/ButtonBack'
import InputText from '../components/InputText'
import ImgHabit from '../assets/images/page/causes-of-diabetes/img-habit.svg'
import ImgDna from '../assets/images/page/causes-of-diabetes/img-dna.svg'
import ImgHabitDna from '../assets/images/page/causes-of-diabetes/img-habit-dna.svg'

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
      delay: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 1
    }
  }
}

const textVariant = {
  hidden: {
    opacity: 0,
    y: 70
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 1,
      delay: 1,
    },
  },
}

const listVariant = {
  hidden: {
    opacity: 0,
    y: 70
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 1,
      delay: 2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: 'tween',
      duration: 1
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
      delay: 2
    }
  },
}

const CausesOfDiabetes = () => {
  // context
  const {changeCurrentPageContext} = useRouteActionContext()
  const {symptomContext} = useUserStateContext()
  const {addCauseDiabetesContext, addSymptomDiabetesContext} = useUserActionContext()
  const {playClickSoundContext} = useSoundActionContext()

  // hooks
  const isWindowSmall = UseWindowSmall()

  // ref
  const inputRef = useRef(null)

  // state
  const [showScene1, setShowScene1] = useState(true)
  const [showScene2, setShowScene2] = useState(false)
  const [showScene3, setShowScene3] = useState(false)
  const [completedScene1, setCompletedScene1] = useState(false)
  const [completedScene2, setCompletedScene2] = useState(false)
  const [canGoNextPage, setCanGoNextPage] = useState(false)
  const [error, setError] = useState(false)

  // function
  const backToPrevPage = () => {
    playClickSoundContext()
    changeCurrentPageContext('VideoDoctor')
  }

  const goToNextPage = () => {
    playClickSoundContext()
    changeCurrentPageContext('Summary')
  }

  const changeToScene2 = () => {
    playClickSoundContext()
    setShowScene1(false)
    setShowScene2(true)
  }

  const changeToScene3 = () => {
    playClickSoundContext()
    setShowScene2(false)
    setShowScene3(true)
  }

  const handleClickCause = (cause) => {
    playClickSoundContext()
    addCauseDiabetesContext(cause)
    changeToScene2()
  }

  const submitSympton = (e) => {
    e.preventDefault()

    playClickSoundContext()

    const inputValue = inputRef.current.value
    if (inputValue) {
      addSymptomDiabetesContext(inputValue)
      changeToScene3()
    } else {
      setError(true)
    }
  }

  const touchPanelSm = () => {
    if (canGoNextPage) {
      goToNextPage()
    }
  }

  useEffect(() => {
    if (symptomContext) {
      setShowScene1(false)
      setShowScene2(false)
      setShowScene3(true)
    }

    return () => {
      setShowScene1(false)
      setShowScene2(false)
      setShowScene3(false)
    }
  }, [symptomContext])

  return (
    <>
      {
        showScene1 && <ButtonBack onClick={backToPrevPage} />
      }
      <Content bgColor="blue">
        <div className="scene-panel scene-panel--items-center scene-animate" onTouchStart={touchPanelSm}>
          <div className="box-story scene-animate__scene scene-animate__scene--1">
            <AnimatePresence>
              {
                showScene1
                && <motion.div className="box-story__text causes-of-diabetes"
                    variants={sceneVariant}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  >
                    <motion.p className="box-story__text text-story causes-of-diabetes__text"
                      variants={textVariant}
                      initial="hidden"
                      animate="show"
                    >คุณรู้ไหม<br /><span className="text-story--bigger">"โรคเบาหวาน"</span> <br className="sm-show" />เกิดจากอะไร?</motion.p>
                    <motion.ul className="causes-of-diabetes__list list-causes-of-diabetes"
                      variants={listVariant}
                      initial="hidden"
                      animate="show"
                    >
                      <li className="list-causes-of-diabetes__item">
                        <div className="list-causes-of-diabetes__card" onClick={() => handleClickCause('พฤติกรรมการใช้ชีวิตประจำวัน')}>
                          <figure className="list-causes-of-diabetes__image">
                            <img src={ImgHabit} alt="พฤติกรรมการใช้ชีวิตประจำวัน" />
                          </figure>
                          <div className="list-causes-of-diabetes__text">พฤติกรรม<br />การใช้ชีวิตประจำวัน</div>
                        </div>
                      </li>
                      <li className="list-causes-of-diabetes__item">
                        <div className="list-causes-of-diabetes__card" onClick={() => handleClickCause('พันธุกรรม')}>
                          <figure className="list-causes-of-diabetes__image">
                            <img src={ImgDna} alt="พันธุกรรม" />
                          </figure>
                          <div className="list-causes-of-diabetes__text">พันธุกรรม</div>
                        </div>
                      </li>
                      <li className="list-causes-of-diabetes__item">
                        <div className="list-causes-of-diabetes__card" onClick={() => handleClickCause('เป็นได้ทั้ง 2 อย่าง')}>
                          <figure className="list-causes-of-diabetes__image">
                            <img src={ImgHabitDna} alt="เป็นได้ทั้ง 2 อย่าง" />
                          </figure>
                          <div className="list-causes-of-diabetes__text">เป็นได้ทั้ง 2 อย่าง</div>
                        </div>
                      </li>
                    </motion.ul>
                  </motion.div>
              }
            </AnimatePresence>
          </div>
          <div className="box-story scene-animate__scene scene-animate__scene--3">
            <form onSubmit={submitSympton}>
              <AnimatePresence>
              {
                showScene2
                && <motion.div className="box-story__text symptoms"
                    variants={sceneVariant}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    onAnimationComplete={() => setCompletedScene1(true)}
                  >
                      <p className="text-story causes-of-diabetes__text">แล้วรู้ไหม<br /><span className="text-story--bigger">"โรคเบาหวาน"</span> <br className="sm-show" />มีอาการเป็นอย่างไร?</p>
                      <div className="symptoms__input">
                        <InputText
                          ref={inputRef}
                          isError={error}
                          value={symptomContext}
                          placeholder="ถ้าไม่รู้ลองพิมพ์เดาดูก่อนก็ได้..."
                          onlyText
                        />
                      </div>
                      {
                        showScene2
                        &&  <div className="symptoms__button">
                              <ButtonNext onClick={submitSympton} animateCompleted={completedScene1}/>
                            </div>
                      }
                  </motion.div>
                }
              </AnimatePresence>
            </form>
          </div>
          <div className="box-story scene-animate__scene scene-animate__scene--3">
            <AnimatePresence>
              {
                showScene3
                && <motion.p className="box-story__text text-story"
                  key="scene3-text"
                  variants={sceneVariant}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  onAnimationComplete={() => setCanGoNextPage(true)}
                >นอกจากนี้ ฆาตกรยังเป็น<br /><span className="text-story--bigger">”ความเครียด”</span> <br />ของเพื่อนคุณอีกด้วย</motion.p>
              }
              {
                !isWindowSmall && showScene3
                && <motion.div className="box-story__button"
                    key="scene3-button"
                    variants={buttonVariant}
                    initial="hidden"
                    animate="show"
                    onAnimationComplete={() => setCompletedScene2(true)}
                  >
                    <ButtonNext onClick={goToNextPage} animateCompleted={completedScene2} />
                  </motion.div>
              }
            </AnimatePresence>
          </div>
        </div>
      </Content>
    </>
  )
}

export default CausesOfDiabetes

