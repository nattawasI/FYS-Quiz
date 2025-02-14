import React, {useState, useEffect, useRef} from 'react'
import {useRouteActionContext} from '../contexts/RouteContext'
import {useUserStateContext, useUserActionContext} from '../contexts/UserContext'
import {useSoundActionContext} from '../contexts/SoundContext'
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
      duration: 0.7,
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
  const {playClickSoundContext} = useSoundActionContext()

  // hooks
  const isWindowSmall = UseWindowSmall()
  const currentDevice = UseCurrentDevice()

  // useAnimation Motion
  const boxQuizControl = useAnimation()

  // ref
  const spaceRef = useRef(null)

  // state of animate
  const [animateTable, setAnimateTable] = useState(false)
  const [heightHidden, setHeightHidden] = useState(null)
  const [spaceHeightAndroid, setSpaceHeightAndroid] = useState(null)
  const [fadePhoto, setFadePhoto] = useState(false)
  const [hidePhoto, setHidePhoto] = useState(false)

  // state show scene
  const [sceneYourName, setSceneYourName] = useState(true) // start from this scene
  const [sceneYourGender, setSceneYourGender] = useState(false)
  const [sceneMurder, setSceneMurder] = useState(false)
  const [sceneAskCooperation, setSceneAskCooperation] = useState(false)
  const [sceneActivityOften, setSceneActivityOften] = useState(false)
  const [sceneQuiz, setSceneQuiz] = useState(false)
  const [sceneFormYear, setSceneFormYear] = useState(false)
  const [sceneActivityToday, setSceneActivityToday] = useState(false)
  const [sceneThankYou, setSceneThankYou] = useState(false)
  const [sceneCause, setSceneCause] = useState(false)

  // state quiz
  const [currentQuestion, setCurrentQuestion] = useState(0)

  // // state complete animation scene
  const [completeSceneStart, setCompleteSceneStart] = useState(false)
  const [completeSceneMurder, setCompleteSceneMurder] = useState(false)
  const [completeSceneAsk, setCompleteSceneAsk] = useState(false)
  const [completeSceneYear, setCompleteSceneYear] = useState(false)
  const [completeThankYou, setCompleteSceneThankYou] = useState(false)
  const [completedSceneCause, setCompletedSceneCause] = useState(false)
  const [completedSceneActivityOften, setCompletedSceneActivityOften] = useState(false)
  const [completedSceneActivityToday, setCompletedSceneActivityToday] = useState(false)

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
        delay: userInfoContext.name? 0: 1.5
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
    playClickSoundContext()
    changeCurrentPageContext('DeadBody')
  }

  const toggleAnimateTable = () => {
    const winHeight = window.innerHeight
    const percentForExpandMd = winHeight <= 864? 36: 34
    const percentForExpandSm = winHeight <= 667? 28: 25
    const heightForHidden = isWindowSmall? Math.ceil((winHeight*percentForExpandSm)/100): Math.ceil((winHeight*percentForExpandMd)/100)

    if (!animateTable) {
      setFadePhoto(true)

      setTimeout(() => {
        setHidePhoto(true)
      }, 700)

      const spaceHeight = spaceRef.current.offsetHeight
      setHeightHidden(spaceHeight + heightForHidden)
      setSpaceHeightAndroid(spaceHeight + heightForHidden)
    } else {
      setHidePhoto(false)

      setTimeout(() => {
        setFadePhoto(false)
      }, 700)

      const spaceHeight = spaceRef.current.offsetHeight
      setHeightHidden(spaceHeight - heightForHidden)
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
    playClickSoundContext()
    setSceneYourGender(false)
    setSceneYourName(true)
  }

  const changeToSceneYourGender = () => {
    playClickSoundContext()
    setSceneYourName(false)
    setSceneYourGender(true)
  }

  const backToSceneYourGender = () => {
    playClickSoundContext()
    setSceneMurder(false)
    setSceneYourGender(true)
  }

  const changeToSceneMurder = () => {
    playClickSoundContext()
    setSceneYourGender(false)
    setSceneMurder(true)
  }

  const backToSceneMurder = () => {
    playClickSoundContext()
    setSceneAskCooperation(false)
    setSceneMurder(true)
  }

  const changeToSceneAskCooperation = () => {
    playClickSoundContext()
    setSceneMurder(false)
    setSceneAskCooperation(true)
  }

  const changeToSceneActivityOften = () => {
    playClickSoundContext()
    toggleAnimateTable()
    setSceneAskCooperation(false)
    setSceneActivityOften(true)
  }

  const changeToSceneQuiz = () => {
    setSceneActivityOften(false)
    setSceneQuiz(true)
  }

  const changeToSceneFormYear = () => {
    playClickSoundContext()
    setSceneQuiz(false)
    setSceneFormYear(true)
  }

  const backToSceneQuiz = () => {
    playClickSoundContext()
    removeChoicesContext()
    setSceneFormYear(false)
    setSceneQuiz(true)
  }

  const changeToSceneActivityToday = () => {
    playClickSoundContext()
    setSceneFormYear(false)
    setSceneActivityToday(true)

    if (checkIsAndriod()) {
      setHeightHidden(spaceHeightAndroid)
    }
  }

  const backToSceneFormYear = () => {
    playClickSoundContext()
    setSceneActivityToday(false)
    setSceneFormYear(true)
  }

  const changeToSceneThankYou = () => {
    playClickSoundContext()
    setSceneActivityToday(false)
    setSceneThankYou(true)
    toggleAnimateTable()
  }

  const backToSceneActivityToday = () => {
    playClickSoundContext()
    toggleAnimateTable()
    setSceneThankYou(false)
    setSceneActivityToday(true)
    setCompletedSceneActivityToday(false)
  }

  const changeToSceneCause = () => {
    playClickSoundContext()
    setSceneThankYou(false)
    setSceneCause(true)
  }

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1)
  }

  const prevQuestion = () => {
    playClickSoundContext()
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
      setCompletedSceneActivityOften(false)
    }
  }

  const buttonBackHandleClick = () => {
    if (sceneYourGender) {
      backToSceneYourName()
    } else if (sceneMurder) {
      backToSceneYourGender()
    } else if (sceneAskCooperation) {
      backToSceneMurder()
    }  else if (sceneQuiz) {
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
    if (nextScene === 'sceneMurder') {
      playClickSoundContext()
      addUserGenderContext(gender)
      changeToSceneMurder()
    }
  }

  const inputAction = (action) => { // fixing andriod keyboard
    if (checkIsAndriod()) {
      if (action === 'focus') {
        setHeightHidden(300)
      } else {
        setHeightHidden(spaceHeightAndroid)
      }
    }
  }

  const checkIsAndriod = () => {
    const isAndriod = navigator.userAgent.match(/Android|android/i)
    return isAndriod !== null? true: false
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
        <motion.div className="investigate" onTouchStart={touchPanelSm}
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
          <div
            ref={spaceRef}
            className={`investigate__space${animateTable? ' animate': ''}`}
            style={{ height: `${heightHidden}px` }}
          >
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
                      onAnimationComplete={ () => setCompleteSceneStart(true) }
                    >
                      <FormYourName changeScene={changeToSceneYourGender} checkAnimate={completeSceneStart} />
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
                              onAnimationComplete={ () => setCompleteSceneMurder(true)}
                            >
                              <ButtonNext onClick={changeToSceneAskCooperation} animateCompleted={completeSceneMurder}/>
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
                              onAnimationComplete={() => setCompleteSceneAsk(true)}
                            >
                              <ButtonNext onClick={changeToSceneActivityOften} animateCompleted={completeSceneAsk} />
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
                      onAnimationComplete={() => setCompletedSceneActivityOften(true)}
                    >
                      <div className="text-story form-activity__title">เริ่มจากก่อนเกิดเหตุ กิจกรรมระหว่างคุณ<br />กับคุณ {friendInfoContext.name} ที่ทำบ่อย ๆ คืออะไร? </div>
                      <div className="form-activity__list">
                        <ListCardActivity
                          type="often"
                          changeScene={changeToSceneQuiz}
                          animateCompleted={completedSceneActivityOften}
                          updateAnimateCompleted={() => setCompletedSceneActivityOften(false)}
                        />
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
                      <ListQuiz
                        changeScene={changeToSceneFormYear}
                        nextQuestion={nextQuestion}
                        currentQuestion= {currentQuestion}
                        boxQuizControl={boxQuizControl}
                      />
                    </motion.div>
                }
                {
                  sceneFormYear
                  && <motion.div
                      key="scene-year"
                      className="investigate__year"
                      variants={contentVariant}
                      exit="exit"
                      onAnimationComplete={() => setCompleteSceneYear(true)}
                    >
                      <FormYear
                        changeScene={changeToSceneActivityToday}
                        checkAnimate={completeSceneYear}
                        inputFocus={() => inputAction('focus')}
                        inputBlur={() => inputAction('blur')}
                      />
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
                      onAnimationComplete={() => setCompletedSceneActivityToday(true)}
                    >
                      <div className="text-story form-activity__title">กิจกรรมสุดท้ายที่รู้สึกว่า<br />ได้ทำร่วมกับเพื่อนสนิท ในวันเกิดเหตุ?</div>
                      <div className="form-activity__list">
                        <ListCardActivity
                          type="today"
                          changeScene={changeToSceneThankYou}
                          animateCompleted={completedSceneActivityToday}
                          updateAnimateCompleted={() => completedSceneActivityToday(false)}
                        />
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
                            onAnimationComplete={() => setCompleteSceneThankYou(true)}
                          >
                            <ButtonNext onClick={changeToSceneCause} animateCompleted={completeThankYou} />
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
                                onAnimationComplete={() => setCompletedSceneCause(true)}
                              >
                                <ButtonNext onClick={goToNextPage} animateCompleted={completedSceneCause} />
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
