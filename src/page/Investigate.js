import React, {useState, useEffect} from 'react'
import {useRouteActionContext} from '../context/RouteContext'
import {useUserStateContext, useUserActionContext} from '../context/UserContext'
import {motion, AnimatePresence, useAnimation} from 'framer-motion'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import UseCurrentDevice from '../utilityhook/useCurrentDevice'
import Content from '../layout/Content'
import ButtonSound from '../component/ButtonSound'
import ButtonBack from '../component/ButtonBack'
import ButtonNext from '../component/ButtonNext'
import FormYourName from '../component/FormYourName'
import ListCardActivity from '../component/ListCardActivity'
import ListQuiz from '../component/ListQuiz'
import FormYear from '../component/FormYear'
import ImgPoliceMd from '../image/page/investigate/img_police_md.svg'
import ImgPoliceTb from '../image/page/investigate/img_police_tb.svg'
import ImgPoliceSm from '../image/page/investigate/img_police_sm.svg'
import ImgPhotoMd from '../image/page/investigate/img_photo_md.svg'
import ImgPhotoSm from '../image/page/investigate/img_photo_sm.svg'
import {QuizData} from '../variable/QuizData'

// Motion Variants
const policeVariant = {
  hidden: {
    opacity: 0,
    y: 80
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
      delay: 0.5
    }
  },
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
      ease: "easeInOut",
      duration: 0.7,
    }
  },
}

const buttonVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
      delay: 1,
    }
  },
}

const contentVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
    }
  },
  firstShow: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
      delay: 1,
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1
    }
  }
}

const Investigate = () => {
  // route context
  const {changeCurrentPageContext} = useRouteActionContext()

  // user context
  const {friendInfoContext, userNameContext} = useUserStateContext()
  const {removeChoicesContext} = useUserActionContext()

  // utility hook
  const isWindowSmall = UseWindowSmall()
  const currentDevice = UseCurrentDevice()

  // useAnimation Motion
  const boxQuizControl = useAnimation()

  // state
  // const [skipAnimate, setSkipAnimate] = useState(false)
  // const [animateComplete, setAnimateComplete] = useState(false)
  const [animateTable, setAnimateTable] = useState(false)
  const [fadePhoto, setFadePhoto] = useState(false)
  const [hidePhoto, setHidePhoto] = useState(false)
  const [sceneYourName, setSceneYourName] = useState(true)
  const [sceneMurder, setSceneMurder] = useState(false)
  const [sceneAskCooperation, setSceneAskCooperation] = useState(false)
  const [sceneActivityOften, setSceneActivityOften] = useState(false)
  const [sceneQuiz, setSceneQuiz] = useState(false)
  const [sceneFormYear, setSceneFormYear] = useState(false)
  const [sceneActivityToday, setSceneActivityToday] = useState(false)
  const [sceneThankYou, setSceneThankYou] = useState(false)
  const [sceneCause, setSceneCause] = useState(false)
  const [activityOften, setActivityOften] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)

  // motion
  const formNameVariant = {
    hidden: {
      opacity: 0,
      y: 70
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1,
        delay: userNameContext? 0: 2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1
      }
    }
  }

  // function
  const goToNextPage = () => {
    changeCurrentPageContext('DeadBody')
  }

  const toggleAnimateTable = () => {
    if (!animateTable) {
      setFadePhoto(true)
      setTimeout(() => {
        setHidePhoto(true)
      }, 700)
    } else {
      setHidePhoto(false)
      setTimeout(() => {
        setFadePhoto(false)
      }, 700)
    }
  }

  let nextScene = ''
  const touchPanelSm = () => {
    if (isWindowSmall) {
      if (nextScene === 'sceneAskCooperation') {
        changeToSceneAskCooperation()
      } else if (nextScene === 'sceneActivityOften') {
        changeToSceneActivityOften()
      } else if (nextScene === 'sceneThankYou') {
        changeToSceneThankYou()
      } else if (nextScene === 'sceneCause') {
        changeToSceneCause()
      } else if (nextScene === 'nextPage') {
        goToNextPage()
      }
    }
  }

  const backToSceneYourName = () => {
    setSceneMurder(false)
    setSceneAskCooperation(false)
    setSceneYourName(true)
  }

  const changeToSceneMurder = () => {
    setSceneYourName(false)
    setSceneMurder(true)
  }

  const changeToSceneAskCooperation = () => {
    setSceneMurder(false)
    setSceneAskCooperation(true)
  }

  const changeToSceneActivityOften = () => {
    toggleAnimateTable()
    setSceneAskCooperation(false)
    setSceneActivityOften(true)
  }

  const changeToSceneQuiz = () => {
    setSceneActivityOften(false)
    setSceneQuiz(true)
  }

  const changeToSceneFormYear = () => {
    setSceneQuiz(false)
    setSceneFormYear(true)
  }

  const backToSceneQuiz = () => {
    removeChoicesContext()
    setSceneFormYear(false)
    setSceneQuiz(true)
  }

  const changeToSceneActivityToday = () => {
    setSceneFormYear(false)
    setSceneActivityToday(true)
  }

  const backToSceneFormYear = () => {
    setSceneActivityToday(false)
    setSceneFormYear(true)
  }

  const changeToSceneThankYou = () => {
    toggleAnimateTable()
    setSceneActivityToday(false)
    setSceneThankYou(true)
  }

  const backToSceneActivityToday = () => {
    setSceneThankYou(false)
    setSceneActivityToday(true)
  }

  const changeToSceneCause = () => {
    setSceneThankYou(false)
    setSceneCause(true)
  }

  const chooseActivityOften = (activity) => {
    setActivityOften(activity)
  }

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
  }

  const prevQuestion = () => {
    removeChoicesContext()

    if (currentQuestion > 0) {
      boxQuizControl.start('hidden')
      setTimeout(() => {
        setCurrentQuestion(currentQuestion - 1)
        boxQuizControl.start('show')
      }, 1000)
    } else {
      setSceneQuiz(false)
      setSceneActivityOften(true)
    }
  }

  const buttonBackHandleClick = () => {
    if (sceneMurder || sceneAskCooperation) {
      backToSceneYourName()
    } else if (sceneQuiz) {
      prevQuestion()
    } else if (sceneFormYear) {
      backToSceneQuiz()
    } else if (sceneActivityToday) {
      backToSceneFormYear()
    } else if (sceneThankYou) {
      backToSceneActivityToday()
    }
  }

  useEffect(() => {
    if (sceneActivityOften || sceneActivityToday) {
      setAnimateTable(true)
    } else if (sceneThankYou) {
      setAnimateTable(false)
    }
  }, [sceneActivityOften, sceneActivityToday, sceneThankYou])

  return (
    <>
      {
        (sceneMurder || sceneAskCooperation || sceneQuiz || sceneFormYear || sceneActivityToday || sceneThankYou)
        && <ButtonBack onClick={buttonBackHandleClick}
            variants={buttonVariant}
            exit="exit"
          />
      }
      <ButtonSound />
      <Content>
        <motion.div className="investigate" onClick={touchPanelSm}
          variants={policeVariant}
          initial="hidden"
          animate="show"
        >
          <div className="investigate__police"
          >
            {
              currentDevice === 'smartphone'
              && <img src={ImgPoliceSm} alt="ตำรวจ" />
            }
            {
              currentDevice === 'tablet'
              && <img src={ImgPoliceTb} alt="ตำรวจ" />
            }
            {
              currentDevice === 'desktop'
              && <img src={ImgPoliceMd} alt="ตำรวจ" />
            }
          </div>
          <div className={`investigate__space${animateTable? ' animate': ''}`}>
            <div className={`investigate__photo${fadePhoto? " fade-out": ''}${hidePhoto? " hidden": ''}`}>
              <img src={isWindowSmall ? ImgPhotoSm: ImgPhotoMd} alt="รูปถ่าย" />
            </div>
            <div className="investigate__content">
              <AnimatePresence exitBeforeEnter>
                {
                  sceneYourName
                  && <motion.div
                      key="scene-your-name"
                      className="investigate__your-name"
                      variants={formNameVariant}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                    >
                      <FormYourName changeScene={changeToSceneMurder} />
                    </motion.div>
                }
                {
                  sceneMurder
                  && <motion.div
                      key="scene-murdur"
                      className="investigate__story"
                      variants={contentVariant}
                      exit="exit"
                    >
                      <div className="box-story">
                        <motion.p className="box-story__text text-story"
                          variants={textVariant}
                          initial="hidden"
                          animate="show"
                          exit="exit"
                          onAnimationComplete={ () => nextScene = 'sceneAskCooperation' }
                        >ตอนนี้เรากำลังสงสัยว่านี่คือ<br />"คดีฆาตกรรม"</motion.p>
                        {
                          !isWindowSmall
                          && <motion.div className="box-story__button"
                              key="buttonNextScene1"
                              variants={buttonVariant}
                              initial="hidden"
                              animate="show"
                              exit="exit"
                              onClick={changeToSceneAskCooperation}
                            >
                              <ButtonNext />
                            </motion.div>
                        }
                      </div>
                    </motion.div>
                }
                {
                  sceneAskCooperation
                  && <motion.div
                      key="scene-ask-cooperation"
                      className="investigate__story"
                      variants={contentVariant}
                      exit="exit"
                    >
                      <div className="box-story">
                        <motion.p className="box-story__text text-story"
                          variants={textVariant}
                          initial="hidden"
                          animate="show"
                          exit="exit"
                          onAnimationComplete={ () => nextScene = 'sceneActivityOften' }
                        >ขอความร่วมมือ คุณ{userNameContext}<br />ในการให้ปากคำด้วยนะครับ</motion.p>
                        {
                          !isWindowSmall
                          && <motion.div className="box-story__button"
                              key="buttonNextScene1"
                              variants={buttonVariant}
                              initial="hidden"
                              animate="show"
                              exit="exit"
                            >
                              <ButtonNext onClick={changeToSceneActivityOften} />
                            </motion.div>
                        }
                      </div>
                    </motion.div>
                }
                {
                  sceneActivityOften
                  && <motion.div
                      key="scene-activity-often"
                      className="investigate__activity form-activity"
                      variants={contentVariant}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                    >
                      <div className="text-story form-activity__title">เริ่มจากก่อนเกิดเหตุ กิจกรรมระหว่างคุณ<br />กับคุณ {friendInfoContext.name} ที่ทำบ่อย ๆ คืออะไร? </div>
                      <div className="form-activity__list">
                        <ListCardActivity type="often" changeScene={changeToSceneQuiz} chooseActivity={chooseActivityOften} />
                      </div>
                    </motion.div>
                }
                {
                  sceneQuiz
                  && <motion.div
                      key="scene-quiz"
                      className="investigate__quiz"
                      variants={contentVariant}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                    >
                      {
                        activityOften === 'game'
                        && <ListQuiz
                            changeScene={changeToSceneFormYear}
                            listQuiz={QuizData.game}
                            nextQuestion={nextQuestion}
                            currentQuestion= {currentQuestion}
                            boxQuizControl={boxQuizControl}
                          />
                      }
                      {
                        activityOften === 'food'
                        && <ListQuiz
                            changeScene={changeToSceneFormYear}
                            listQuiz={QuizData.food}
                            nextQuestion={nextQuestion}
                            currentQuestion= {currentQuestion}
                            boxQuizControl={boxQuizControl}
                          />
                      }
                      {
                        activityOften === 'exercise'
                        && <ListQuiz
                            changeScene={changeToSceneFormYear}
                            listQuiz={QuizData.exercise}
                            nextQuestion={nextQuestion}
                            currentQuestion= {currentQuestion}
                            boxQuizControl={boxQuizControl}
                          />
                      }
                    </motion.div>
                }
                {
                  sceneFormYear
                  && <motion.div
                      key="scene-year"
                      className="investigate__year"
                      variants={contentVariant}
                      exit="exit"
                    >
                      <FormYear changeScene={changeToSceneActivityToday} />
                    </motion.div>
                }
                {
                  sceneActivityToday
                  && <motion.div
                      className="investigate__activity form-activity"
                      key="scene-activity-today"
                      variants={contentVariant}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                    >
                      <div className="text-story form-activity__title">กิจกรรมสุดท้ายที่รู้สึกว่า<br />ได้ทำร่วมกับเพื่อนสนิท ในวันเกิดเหตุ?</div>
                      <div className="form-activity__list">
                        <ListCardActivity type="today"  changeScene={changeToSceneThankYou} />
                      </div>
                    </motion.div>
                }
                {
                  sceneThankYou
                  && <motion.div
                      key="scene-thank-you"
                      className="investigate__story"
                      variants={contentVariant}
                      exit="exit"
                    >
                    <div className="box-story">
                      <motion.p className="box-story__text text-story"
                        variants={textVariant}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        onAnimationComplete={ () => nextScene = 'sceneCause' }
                      >ขอบคุณในการให้ปากคำ</motion.p>
                      {
                        !isWindowSmall
                        && <motion.div className="box-story__button"
                            key="buttonNextScene1"
                            variants={buttonVariant}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                          >
                            <ButtonNext onClick={changeToSceneCause} />
                          </motion.div>
                      }
                    </div>
                  </motion.div>
                }
                {
                  sceneCause
                  && <motion.div
                        key="scene-cause"
                        className="investigate__story"
                        variants={contentVariant}
                        exit="exit"
                      >
                        <div className="box-story">
                          <motion.p className="box-story__text text-story text-thankyou"
                            variants={textVariant}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            onAnimationComplete={ () => nextScene = 'nextPage' }
                          >ตอนนี้เราได้ทราบ<br className="sm-show" />สาเหตุการเสียชีวิตแล้ว</motion.p>
                          {
                            !isWindowSmall
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
                        </div>
                      </motion.div>
                }
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </Content>
    </>
  )
}

export default Investigate
