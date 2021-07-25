import React, {useState} from 'react'
import {AnimatePresence, motion, useAnimation } from 'framer-motion'
import {motionVariables} from '../variables/MotionVariant'
import UseWindowSmall from '../utilityhooks/useWindowSmall'
import {useRouteActionContext} from '../contexts/RouteContext'
import {useSoundActionContext} from '../contexts/SoundContext'
import Content from '../layout/Content'
import ButtonNext from '../components/ButtonNext'
import BGShadeMD from '../assets/images/page/turn-on-light/bg_shade_md.svg';
import BGShadeSM from '../assets/images/page/turn-on-light/bg_shade_sm.svg';
import BGShadeLighterMD from '../assets/images/page/turn-on-light/bg_shade_lighter_md.svg';
import BGShadeLighterSM from '../assets/images/page/turn-on-light/bg_shade_lighter_sm.svg';
import SwitchPlateDark from '../assets/images/page/turn-on-light/img_switch_01.svg';
import SwitchPlateLight from '../assets/images/page/turn-on-light/img_switch_02.svg';
import IconPointer from '../assets/images/page/turn-on-light/ico_pointer_01.svg';
import NormalHand from '../assets/images/page/turn-on-light/img_hand_01.svg';
import PointerHandMD from '../assets/images/page/turn-on-light/img_hand_02_md.svg';
import PointerHandSM from '../assets/images/page/turn-on-light/img_hand_02_sm.svg';

const textIntro01Variant = {
  hidden: {
    y: 50,
    opacity: motionVariables.opacity.opacityZero,
  },
  show: {
    y: 0,
    opacity: motionVariables.opacity.opacityOne,
    transition: {
      delay: motionVariables.speed.speedOne,
      duration: motionVariables.speed.speedOne,
      ease: 'easeInOut',
    }
  },
  exit: {
    y: -50,
    opacity: motionVariables.opacity.opacityZero,
    transition: {
      delay: motionVariables.speed.speedOne,
      duration: motionVariables.speed.speedOne,
      type: 'tween',
    }
  }
}

const textIntro02Variant = {
  hidden: {
    y: 50,
    opacity: motionVariables.opacity.opacityZero,
  },
  show: {
    y: 0,
    opacity: motionVariables.opacity.opacityOne,
    transition: {
      duration: motionVariables.speed.speedOne,
      ease: 'easeInOut',
    }
  },
  exit: {
    y: -50,
    opacity: motionVariables.opacity.opacityZero,
    transition: {
      delay: motionVariables.speed.speedOne,
      duration: motionVariables.speed.speedOne,
      type: 'tween',
    }
  }
}

const buttonNextVariant = {
  hidden: {
    y: 50,
    opacity: motionVariables.opacity.opacityZero,
  },
  show: {
    y: 0,
    opacity: motionVariables.opacity.opacityOne,
    transition: {
      duration: motionVariables.speed.speedOne,
      ease: 'easeInOut',
    }
  },
  exit: {
    opacity: motionVariables.opacity.opacityZero,
    transition: {
      delay: motionVariables.speed.speedOne,
      duration: motionVariables.speed.speedOne,
      type: 'tween',
    }
  }
}

const ShadeContainerVariants = {
  hidden: {
    x: '100%',
    opacity: motionVariables.opacity.opacityZero,
  },
  show: {
    x: 0,
    opacity: motionVariables.opacity.opacityOne,
    transition: {
      duration: motionVariables.speed.speedOne,
      ease: 'easeInOut',
    }
  },
  exit: {
    x: '-100%',
    opacity: motionVariables.opacity.opacityZero,
    transition: {
      duration: motionVariables.speed.speedOne,
      type: 'tween',
    }
  }
}

const NormalHandVariant = {
  hidden: {
    originX: 1,
    originY: 1,
    x: '100%',
    y: '100%',
    opacity: motionVariables.opacity.opacityOne,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      delay: motionVariables.speed.speedOne,
      duration: motionVariables.speed.speedOne,
      ease: 'easeOut',
    }
  },
  exit: {
    opacity: motionVariables.opacity.opacityZero,
    transition: {
      duration: 0.5,
      type: 'tween',
    }
  }
}

const SwitchVariant = {
  hidden: {
    y: '-140%',
    x: '-50%',
    opacity: motionVariables.opacity.opacityOne,
  },
  show: {
    y: 0,
    transition: {
      delay: motionVariables.speed.speedOne,
      duration: motionVariables.speed.speedOne,
      ease: 'easeInOut',
    }
  },
}

const SwitchPlateVariant = {
  hidden: {
    opacity: motionVariables.opacity.opacityZero,
  },
  show: {
    opacity: motionVariables.opacity.opacityOne,
    transition: {
      delay: motionVariables.speed.speedFour,
      duration: motionVariables.speed.speedOne,
      ease: 'easeInOut',
    }
  },
  exit: {
    opacity: motionVariables.opacity.opacityZero,
    transition: {
      duration: motionVariables.speed.speedOne,
      type: 'tween',
    }
  }
}

const TurnOnLight = () => {
  // context
  const {changeCurrentPageContext} = useRouteActionContext()
  const {playClickSoundContext, playSwitchSoundContext} = useSoundActionContext()

  // utility hook
  const isWindowSmall = UseWindowSmall()

  // state
  const [showScene1, setShowScene1] = useState(true);
  const [showScene2, setShowScene2] = useState(false);
  const [openSwitch, setOpenSwitch] = useState(false);
  const [nextScene, setNextScene] = useState(false);
  const [animateComplete, setAnimateComplete] = useState(false)
  const switchControl = useAnimation();
  const buttonNextControl = useAnimation();
  let switchBreaker = false;

  // function
  const goToNextPage = () => {
    if (animateComplete) {
      changeCurrentPageContext('FriendSleep')
    }
  }

  const changeToScene2 = () => {
    setShowScene1(false)
    setShowScene2(true)
  }

  const handleSwitch = () => {
    if (!openSwitch && switchBreaker) {
      setOpenSwitch(true)
      switchControl.start('show')

      setTimeout(() => {
        playSwitchSoundContext()
      }, 1800);
    }
  }

  const completedScene1 = () => switchBreaker = true;

  const switchOpened = () => {
    if (openSwitch && !nextScene) {
      setTimeout(() => {
        buttonNextControl.start('show')
        setNextScene(true)
      }, 0)
    }
  }

  const touchPanelSm = () => {
    if (isWindowSmall && animateComplete) {
      playClickSoundContext()
      goToNextPage()
    }
  }

  const PointerHandVariant = {
    hidden: {
      originX: 1,
      originY: 1,
      rotate: 3,
      y: isWindowSmall ? '-3%' : '-5%',
      opacity: motionVariables.opacity.opacityOne,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        delay: 0.5,
        duration: motionVariables.speed.speedOne,
        ease: 'easeInOut',
      }
    },
    exit: {
      x: 0,
      y: 0,
      opacity: motionVariables.opacity.opacityZero,
      transition: {
        duration: motionVariables.speed.speedOne,
        type: 'tween',
      }
    }
  }

  const ShadeVariants = {
    hidden: {
      originX: 0.8,
      originY: 1,
      scale: 1,
    },
    show: {
      scale: 1.7,
      transition: {
        delay: motionVariables.speed.speedFour,
        duration: motionVariables.speed.speedOne,
        ease: 'easeInOut',
      }
    },
    exit: {
      opacity: motionVariables.opacity.opacityZero,
      transition: {
        duration: 0,
        delay: isWindowSmall ? 0 : motionVariables.speed.speedTwo,
        type: 'tween',
      }
    }
  }

  const PulseVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: isWindowSmall ? 0 : 5,
        duration: 0.5,
        ease: 'easeInOut',
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: motionVariables.speed.speedOne,
        type: 'tween',
      }
    }
  }

  return (
    <>
      <Content>
        <div className="scene-panel scene-panel--items-center turn-on-light" onClick={touchPanelSm}>
          <div className={`turn-on-light__container ${ openSwitch && 'turn-on-light__container--blue' }`}>
            <div className="turn-on-light__content">
              <div className="turn-on-light__text">
                <AnimatePresence exitBeforeEnter>
                  {
                    showScene1 &&
                    <motion.div
                      key="text-content-01"
                      className="text-story"
                      variants={textIntro01Variant}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      onAnimationComplete={changeToScene2}
                    >คุณพยายามคลำไปตามกำแพง<br/>เพื่อหาสวิทช์เปิดไฟ</motion.div>
                  }
                  {
                    showScene2 &&
                    <motion.div
                      key="text-content-02"
                      className="text-story"
                      variants={textIntro02Variant}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                    >
                      เพื่อให้ห้องนี้<br/>สว่างขึ้นมาอีกครั้ง
                      {
                        !isWindowSmall &&
                        <motion.div
                          variants={buttonNextVariant}
                          initial="hidden"
                          animate={buttonNextControl}
                          exit="exit"
                        >
                          <ButtonNext onClick={goToNextPage}/>
                        </motion.div>
                      }
                    </motion.div>
                  }
                </AnimatePresence>
              </div>
              <div className="turn-on-light__hand hand">
                <AnimatePresence exitBeforeEnter>
                  {
                    !openSwitch &&  <motion.div
                      key="turn-on-light-hand-01"
                      className="hand__normal"
                      variants={NormalHandVariant}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                    >
                      <img className="hand__normal-image" src={NormalHand} alt="" />
                    </motion.div>
                  }
                  {
                    openSwitch && <motion.div
                      key="turn-on-light-hand-02"
                      className="hand__pointer"
                      variants={PointerHandVariant}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      onAnimationComplete={ () => setAnimateComplete(true) }
                    >
                      <img className="hand__pointer-image" src={ isWindowSmall ? PointerHandSM : PointerHandMD } alt="" />
                    </motion.div>
                  }
                </AnimatePresence>
              </div>

              <div className="turn-on-light__bg shade">
                <motion.div
                  className="shade__figure"
                  variants={ShadeContainerVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <motion.img
                    src={ isWindowSmall ? BGShadeSM : BGShadeMD }
                    alt="background shade"
                    className="shade__image shade__image--normal"
                    variants={ShadeVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  />
                  <motion.img
                    src={ isWindowSmall ? BGShadeLighterSM : BGShadeLighterMD }
                    alt="background shade lighter"
                    className="shade__image shade__image--lighter"
                    variants={ShadeVariants}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                  />
                </motion.div>
              </div>

              <motion.div
                className="turn-on-light__target switch"
                variants={SwitchPlateVariant}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <img className="switch__plate" src={openSwitch ? SwitchPlateLight : SwitchPlateDark} alt="switch plate" />
                <div className="switch__button controller" onClick={handleSwitch}>
                  <div className="controller__container">
                    <motion.div
                      className="controller__button"
                      variants={SwitchVariant}
                      initial="hidden"
                      animate={switchControl}
                      onAnimationComplete={switchOpened}
                    ></motion.div>
                  </div>
                  <AnimatePresence>
                    {
                      !openSwitch &&
                      <motion.div
                        className="pulse"
                        variants={PulseVariant}
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        onAnimationComplete={completedScene1}
                      >
                        <img className="pulse__pointer" src={IconPointer} alt="click to open switch" />
                      </motion.div>
                    }
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Content>
    </>
  )
}

export default TurnOnLight