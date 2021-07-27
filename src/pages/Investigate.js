import React, {useState, useEffect, useRef} from 'react'
import {useRouteActionContext} from '../contexts/RouteContext'
import {useUserStateContext, useUserActionContext} from '../contexts/UserContext'
import {useSoundStateContext} from '../contexts/SoundContext'
import {motion, AnimatePresence, useAnimation} from 'framer-motion'
import UseWindowSmall from '../hooks/useWindowSmall'
import UseCurrentDevice from '../hooks/useCurrentDevice'
import Content from '../layout/Content'
import Button from '../components/Button'
import ButtonBack from '../components/ButtonBack'
import ButtonNext from '../components/ButtonNext'
import FormYourName from '../components/FormYourName'
import ListCardActivity from '../components/ListCardActivity'
import ListQuiz from '../components/ListQuiz'
import FormYear from '../components/FormYear'
import ImgPoliceMd from '../assets/images/page/investigate/img_police_md.svg'
import ImgPoliceTb from '../assets/images/page/investigate/img_police_tb.svg'
import ImgPoliceSm from '../assets/images/page/investigate/img_police_sm.svg'
import ImgPhotoMd from '../assets/images/page/investigate/img_photo_md.svg'
import ImgPhotoSm from '../assets/images/page/investigate/img_photo_sm.svg'
import {QuizData} from '../variables/QuizData'
import {playSoundClick} from '../variables/SoundMethods'

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
      duration: 1,
    }
  },
}


const boxVariant = {
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
    }
  },
  exitFade: {
    opacity: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
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
  // context
  const {changeCurrentPageContext} = useRouteActionContext()
  const {friendInfoContext, userInfoContext} = useUserStateContext()
  const {addUserGenderContext, removeChoicesContext} = useUserActionContext()
  const {muteContext} = useSoundStateContext()

  // hooks
  const isWindowSmall = UseWindowSmall()
  const currentDevice = UseCurrentDevice()

  // useAnimation Motion
  const boxQuizControl = useAnimation()

  // ref
  const spaceRef = useRef(null)

  // state
  const [animateTable, setAnimateTable] = useState(false)
  const [heightHidden, setHeightHidden] = useState(null)
  const [fadePhoto, setFadePhoto] = useState(false)
  const [hidePhoto, setHidePhoto] = useState(false)
  const [sceneYourName, setSceneYourName] = useState(true)
  const [sceneMurder, setSceneMurder] = useState(false)
  const [sceneYourGender, setSceneYourGender] = useState(false)
  const [sceneAskCooperation, setSceneAskCooperation] = useState(false)
  const [sceneActivityOften, setSceneActivityOften] = useState(false)
  const [sceneQuiz, setSceneQuiz] = useState(false)
  const [sceneFormYear, setSceneFormYear] = useState(false)
  const [sceneActivityToday, setSceneActivityToday] = useState(false)
  const [sceneThankYou, setSceneThankYou] = useState(false)
  const [sceneCause, setSceneCause] = useState(false)
  const [activityOften, setActivityOften] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [startInvestigate, setStartInvestigate] = useState(false)
  const [murderSuspect, setMurderSuspect] = useState(false)
  const [askCooperation, setAskCooperation] = useState(false)
  const [checkedYear, setCheckedYear] = useState(false)
  const [thankYou, setThankYou] = useState(false)
  const [completedScene, setCompletedScene] = useState(false)

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
        delay: userInfoContext.name? 0: 2
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
    const percentForExpand = isWindowSmall? 24: 33.33
    if (!animateTable) {
      setFadePhoto(true)

      setTimeout(() => {
        setHidePhoto(true)
      }, 700)

      const winHeight = window.innerHeight
      const heightForHidden = Math.ceil((winHeight*percentForExpand)/100)
      const spaceHeight = spaceRef.current.offsetHeight
      setHeightHidden(spaceHeight + heightForHidden)
    } else {
      setHidePhoto(false)

      setTimeout(() => {
        setFadePhoto(false)
      }, 700)

      const winHeight = window.innerHeight
      const heightForHidden = Math.ceil((winHeight*percentForExpand)/100)
      const spaceHeight = spaceRef.current.offsetHeight
      setHeightHidden(spaceHeight - heightForHidden)
    }
  }

  let nextScene = ''
  const touchPanelSm = () => {
    if (isWindowSmall) {
      if (nextScene === 'sceneMurder') {
        changeToSceneMurder()
      } else if (nextScene === 'sceneAskCooperation') {
        playSoundClick(muteContext)
        changeToSceneAskCooperation()
      } else if (nextScene === 'sceneActivityOften') {
        playSoundClick(muteContext)
        changeToSceneActivityOften()
      } else if (nextScene === 'sceneThankYou') {
        changeToSceneThankYou()
      } else if (nextScene === 'sceneCause') {
        playSoundClick(muteContext)
        changeToSceneCause()
      } else if (nextScene === 'nextPage') {
        playSoundClick(muteContext)
        goToNextPage()
      }
    }
  }

  const backToSceneYourName = () => {
    setSceneYourGender(false)
    setSceneYourName(true)
  }

  const changeToSceneYourGender = () => {
    setSceneYourName(false)
    setSceneYourGender(true)
  }

  const changeToSceneMurder = () => {
    setSceneYourGender(false)
    setSceneMurder(true)
  }

  const backToSceneYourGender = () => {
    setSceneMurder(false)
    setSceneYourGender(true)
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
    setSceneActivityToday(false)
    setSceneThankYou(true)
    toggleAnimateTable()
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
    if (sceneYourGender) {
      backToSceneYourName()
    } else if (sceneMurder) {
      backToSceneYourGender()
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

  const chooseGender = (gender) => {
    addUserGenderContext(gender)
    changeToSceneMurder()
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
        (sceneYourGender || sceneMurder || sceneAskCooperation || sceneQuiz || sceneFormYear || sceneActivityToday || sceneThankYou)
        && <ButtonBack onClick={buttonBackHandleClick}
            variants={buttonVariant}
            exit="exit"
          />
      }
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
          <div ref={spaceRef} className={`investigate__space${animateTable? ' animate': ''}`} style={{ height: `${heightHidden}px` }}>
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
                      onAnimationComplete={ () => setStartInvestigate(true) }
                    >
                      <FormYourName changeScene={changeToSceneYourGender} checkAnimate={startInvestigate} />
                    </motion.div>
                }
                {
                  sceneYourGender
                  && <motion.div
                      key="scene-your-gender"
                      className="investigate__your-gender"
                      variants={boxVariant}
                      initial="hidden"
                      animate="show"
                      exit="exitFade"
                      onAnimationComplete={ () => nextScene = 'sceneMurder' }
                    >
                      <div className="box-your-gender">
                        <p className="box-your-gender__text text-story">ระบุเพศของคุณ</p>
                        <ul className="box-your-gender__list list-gender-button">
                          <li className="list-gender-button__item">
                            <Button
                              color="blue"
                              onClick={() => chooseGender('male')}
                            >ชาย</Button>
                          </li>
                          <div className="list-gender-button__item">
                            <Button
                              color="pink"
                              onClick={() => chooseGender('female')}
                            >หญิง</Button>
                          </div>
                        </ul>
                      </div>
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
                              onAnimationComplete={ () => setMurderSuspect(true)}
                            >
                              <ButtonNext onClick={changeToSceneAskCooperation} animateCompleted={murderSuspect}/>
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
                        >ขอความร่วมมือ คุณ{userInfoContext.name}<br />ในการให้ปากคำด้วยนะครับ</motion.p>
                        {
                          !isWindowSmall
                          && <motion.div className="box-story__button"
                              key="buttonNextScene1"
                              variants={buttonVariant}
                              initial="hidden"
                              animate="show"
                              exit="exit"
                              onAnimationComplete={() => setAskCooperation(true)}
                            >
                              <ButtonNext onClick={changeToSceneActivityOften} animateCompleted={askCooperation} />
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
                      onAnimationComplete={() => setCheckedYear(true)}
                    >
                      <FormYear changeScene={changeToSceneActivityToday} checkAnimate={checkedYear} />
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
                            onAnimationComplete={() => setThankYou(true)}
                          >
                            <ButtonNext onClick={changeToSceneCause} animateCompleted={thankYou}/>
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
                                onAnimationComplete={() => setCompletedScene(true)}
                              >
                                <ButtonNext onClick={goToNextPage} animateCompleted={completedScene} />
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
