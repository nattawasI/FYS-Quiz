import React, {useState} from 'react'
import { AnimatePresence, motion, useAnimation } from 'framer-motion'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import {useRouteActionContext} from '../context/RouteContext'
import {containerVariant} from '../variable/MotionVariant'
import Content from '../layout/Content'
import ButtonSound from '../component/ButtonSound'
import ButtonNext from '../component/ButtonNext'
import BGShadeMD from '../image/page/turn-on-light/bg_shade_md.svg';
import BGShadeSM from '../image/page/turn-on-light/bg_shade_sm.svg';
import BGShadeLighterMD from '../image/page/turn-on-light/bg_shade_lighter_md.svg';
import BGShadeLighterSM from '../image/page/turn-on-light/bg_shade_lighter_sm.svg';
import SwitchPlateDark from '../image/page/turn-on-light/img_switch_01.svg';
import SwitchPlateLight from '../image/page/turn-on-light/img_switch_02.svg';
import IconPointer from '../image/page/turn-on-light/ico_pointer_01.svg';
import NormalHand from '../image/page/turn-on-light/img_hand_01.svg';
import PointerHand from '../image/page/turn-on-light/img_hand_02.svg';

const textIntro01Variant = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
      ease: 'easeInOut',
    }
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      type: 'tween',
    }
  }
}

const textIntro02Variant = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    }
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      type: 'tween',
    }
  }
}

const buttonNextVariant = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    }
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 1,
      duration: 1,
      type: 'tween',
    }
  }
}

const ShadeContainerVariants = {
  hidden: {
    x: '100%',
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    }
  },
  exit: {
    x: '-100%',
    opacity: 0,
    transition: {
      duration: 1,
      type: 'tween',
    }
  }
}

const ShadeVariants = {
  hidden: {
    originX: 0.75,
    originY: 1,
    scale: 1,
  },
  show: {
    scale: 1.7,
    transition: {
      delay: 3,
      duration: 1,
      ease: 'easeInOut',
    }
  },
}

const ShadeLighterVariants = {
  hidden: {
    originX: 0.75,
    originY: 1,
    scale: 1.7,
  },
  show: {
    scale: 1.7,
    transition: {
      delay: 0.5,
      duration: 1,
      ease: 'easeInOut',
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
      type: 'tween',
    }
  }
}

const NormalHandVariant = {
  hidden: {
    x: '100%',
    y: '100%',
    opacity: 1,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      originX: 1,
      originY: 1,
      delay: 1,
      duration: 0.5,
      ease: 'easeOut',
    }
  },
  exit: {
    x: 0,
    y: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
      type: 'tween',
    }
  }
}

const PointerHandVariant = {
  hidden: {
    y: '-5%',
    opacity: 1,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: 'easeInOut',
    }
  },
  exit: {
    x: 0,
    y: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
      type: 'tween',
    }
  }
}

const SwitchPlateVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 3,
      duration: 1,
      ease: 'easeInOut',
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
      type: 'tween',
    }
  }
}

const TurnOnLight = () => {
  // route context
  const {changeCurrentPageContext} = useRouteActionContext()

  // utility hook
  const isWindowSmall = UseWindowSmall()

  // state
  const [showScene1, setShowScene1] = useState(true);
  const [showScene2, setShowScene2] = useState(false);
  const [openSwitch, setOpenSwitch] = useState(false);
  const [nextScene, setNextScene] = useState(false);
  const [skipAnimate, setSkipAnimate] = useState(false)
  const [animateComplete, setAnimateComplete] = useState(false)
  const switchControl = useAnimation();
  const buttonNextControl = useAnimation();
  let switchBreaker = false;

  // function
  const goToNextPage = () => {
    changeCurrentPageContext('FriendSleep')
  }

  const changeToScene2 = () => {
    setShowScene1(false)
    setShowScene2(true)
  }

  const handleSwitch = () => {
    if (!openSwitch && switchBreaker) {
      setOpenSwitch(true)
      switchControl.start('show')
    }
  }

  const completedScene1 = () => {
    switchBreaker = true;
  }

  const switchOpened = () => {
    if (openSwitch) {
      setTimeout(() => {
        buttonNextControl.start('show')
        setNextScene(true)
      }, 500)
    }
  }
  
  const touchPanelSm = () => {
    if (isWindowSmall) {
      if (animateComplete) {
        goToNextPage()
      } else {
        if (!skipAnimate) {
          setAnimateComplete(true)
          setSkipAnimate(true)
        }
      }
    }
  }

  const SwitchVariant = {
    hidden: {
      y: '-140%',
      x: '-50%',
      opacity: 1,
    },
    show: {
      x: '-50%',
      y: 0,
      transition: {
        delay: skipAnimate ? 0.5 : 1,
        duration: 0.5,
        ease: 'easeInOut',
      }
    },
  }

  const PulseVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delay: skipAnimate ? 0 : 4,
        duration: 0.5,
        ease: 'easeInOut',
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        type: 'tween',
      }
    }
  }

  // function for rendering
  const renderSwitch = () => {
    if (isWindowSmall) {
      return (
        skipAnimate
        ? <div className="turn-on-light__target switch">
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
          </div>
        : <motion.div
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
      )
    } else {
      return (
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
      )
    }
  }

  const rederText = () => {
    return (
      skipAnimate
      ?
        <div className="turn-on-light__text">
          <p className="text-story">เพื่อให้ห้องนี้<br/>สว่างขึ้นมากอีกครั้ง</p>
        </div>
      : 
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
                เพื่อให้ห้องนี้<br/>สว่างขึ้นมากอีกครั้ง
                <motion.div
                  variants={buttonNextVariant}
                  initial="hidden"
                  animate={buttonNextControl}
                  exit="exit"
                >
                  <ButtonNext onClick={goToNextPage}/>
                </motion.div>
              </motion.div>
            }
          </AnimatePresence>
        </div>
    )
  }

  const renderHand = () => {
    return (
      skipAnimate
      ?
        <div className="turn-on-light__hand hand">
          {
            !openSwitch &&  
            <div className="hand__normal">
              <img className="hand__normal-image" src={NormalHand} alt="" />
            </div>
          }
          <AnimatePresence>
            {
              openSwitch && <motion.div
                className="hand__pointer"
                variants={PointerHandVariant}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <img className="hand__pointer-image" src={PointerHand} alt="" />
              </motion.div>
            }
          </AnimatePresence>
        </div>
      :
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
              >
                <img className="hand__pointer-image" src={PointerHand} alt="" />
              </motion.div>
            }
          </AnimatePresence>
        </div>
    )
  }

  const renderBackground = () => {
    return (
      skipAnimate
      ?
        <div className="turn-on-light__bg shade">
          <div className="shade__figure">
            {
              !openSwitch &&
              <img className="shade__image" src={ BGShadeSM } alt="" />
            }
            {
              openSwitch &&
              <motion.img
                src={ BGShadeLighterSM } 
                alt=""
                className="shade__image"
                variants={ShadeLighterVariants}
                initial="hidden"
                animate="show"
                exit="exit"
              />
            }
          </div>
        </div>
      :
        <div className="turn-on-light__bg shade">
          <motion.div
            className="shade__figure"
            variants={ShadeContainerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            {
              !openSwitch &&
              <motion.img
                src={ isWindowSmall ? BGShadeSM : BGShadeMD } 
                alt=""
                className="shade__image"
                variants={ShadeVariants}
                initial="hidden"
                animate="show"
              />
            }
            {
              openSwitch &&
              <motion.img
                src={ isWindowSmall ? BGShadeLighterSM : BGShadeLighterMD } 
                alt=""
                className="shade__image"
                variants={ShadeLighterVariants}
                initial="hidden"
                animate="show"
                exit="exit"
              />
            }
          </motion.div>
        </div>
    )
  }

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ButtonSound />
      <Content>
        <div className="scene-panel turn-on-light" onClick={touchPanelSm}>
          <div className={`turn-on-light__container ${ openSwitch && 'turn-on-light__container--blue' }`}>
            <div className="turn-on-light__content">
              {
                rederText()
              }
              {
                renderHand()
              }
              {
                renderBackground()
              }
              {
                renderSwitch()
              }
            </div>
          </div>
        </div>
      </Content>
    </motion.div>
  )
}

export default TurnOnLight