import React, {useState} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Content from '../layout/Content'
import ButtonSound from '../component/ButtonSound'
//import ButtonNext from '../component/ButtonNext'
import BGShadeMD from '../image/page/open-switch/bg_shade_md.svg';
import BGShadeSM from '../image/page/open-switch/bg_shade_sm.svg';
import SwitchPlate from '../image/page/open-switch/bg_switch_plate.svg';
import IconPointer from '../image/page/open-switch/ico_pointer_01.svg';
import NormalHand from '../image/page/open-switch/img_hand_01.svg';
import PointerHand from '../image/page/open-switch/img_hand_02.svg';

const ShadeVariantsMD = {
  hidden: {
    x: '100%',
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
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

const ShadeVariantsSM = {
  hidden: {
    x: '100%',
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 2,
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

const OpenSwitch = () => {
  const isWindowSmall = UseWindowSmall()

  const textIntroVariant = {
    hidden: {
      y: isWindowSmall ? -50 : 100,
      opacity: 0,
    },
    show: {
      y: isWindowSmall ? -125 : 0,
      opacity: 1,
      transition: {
        delay: isWindowSmall ? 0 : 2,
        duration: 1,
        ease: 'easeInOut',
      }
    },
    exit: {
      y: isWindowSmall ? -200 : -100,
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
      x: '35%',
      y: '3%',
      opacity: 1,
      transition: {
        originX: 1,
        originY: 1,
        delay: 2,
        duration: 1,
        ease: 'easeInOut',
      }
    },
    exit: {
      x: '35%',
      y: '3%',
      opacity: 0,
      transition: {
        duration: 0.5,
        type: 'tween',
      }
    }
  }

  const PointerHandVariant = {
    hidden: {
      x: '35%',
      y: '3%',
      opacity: 1,
    },
    show: {
      x: '35%',
      y: '10%',
      opacity: 1,
      transition: {
        originX: 1,
        originY: 1,
        delay: 1,
        duration: 2,
        ease: 'easeInOut',
      }
    },
    exit: {
      x: '35%',
      y: '10%',
      opacity: 0,
      transition: {
        duration: 1,
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

  const SwitchControllerVariant = {
    hidden: {
      x: 0,
      y: '18%',
      opacity: 1,
    },
    show: {
      x: 0,
      y: '95%',
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      }
    },
    exit: {
      x: 0,
      y: '95%',
      opacity: 0,
      transition: {
        duration: 1,
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

  // Scene
  const [showScene1, setShowScene1] = useState(true)
  const [showScene2, setShowScene2] = useState(false)

  let toggleNextScene = false

  // Switch
  const [openSwitch, setOpenSwitch] = useState(false)
  // const [openedSwitch, setOpenedSwitch] = useState(false)

  const TabNextScene = () => {
    if (!toggleNextScene) return
    if (isWindowSmall && showScene1) {
      setShowScene1(false)
      setShowScene2(true)
      toggleNextScene = false
    }
  }

  const handleSwitch = () => {
    setOpenSwitch(true)
  }

  const checkSceneComplete = () => toggleNextScene = true

  return (
    <>
      <ButtonSound />
      <Content>
        <div className="scene-panel open-switch" onClick={TabNextScene}>
          <div className="open-switch__container">
            <div className="open-switch__content">
              <AnimatePresence exitBeforeEnter>
                {
                  showScene1 &&
                  <motion.p
                    key="open-switch-text-01"
                    className="text-story"
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={textIntroVariant}
                  >คุณพยายามคลำไปตามกำแพง<br/>เพื่อหาสวิทช์เปิดไฟ</motion.p>
                }
                {
                  showScene2 &&
                  <motion.p
                    key="open-switch-text-02"
                    className="text-story"
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={textIntroVariant}
                  >เพื่อให้ห้องนี้<br/>สว่างขึ้นมากอีกครั้ง</motion.p>
                }
              </AnimatePresence>
            </div>
            <div className="open-switch__hand hand">
              <AnimatePresence exitBeforeEnter>
                {
                  !openSwitch && 
                  <motion.div
                    key="open-switch-hand-01"
                    className="hand__normal"
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={NormalHandVariant}
                  >
                    <img className="md-show" src={NormalHand} alt="" />
                    <img className="sm-show" src={NormalHand} alt="" />
                  </motion.div>
                }
                {
                  openSwitch
                  && <motion.div
                    key="open-switch-hand-02"
                    className="hand__pointer"
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={PointerHandVariant}
                  >
                    <img src={PointerHand} alt="" />
                  </motion.div>
                }
              </AnimatePresence>
            </div>
            <motion.div
              key="open-switch-shade-md"
              className="open-switch__shade open-switch__shade--md"
              initial="hidden"
              animate="show"
              exit="exit"
              variants={ShadeVariantsMD}
            >
              <img src={BGShadeMD} alt="" />
            </motion.div>
            <motion.div
              key="open-switch-shade-sm"
              initial="hidden"
              animate="show"
              exit="exit"
              variants={ShadeVariantsSM}
              className="open-switch__shade open-switch__shade--sm"
              onAnimationComplete={checkSceneComplete}
            >
              <img src={BGShadeSM} alt="" />
            </motion.div>
            <motion.div
              className="open-switch__target switch"
              initial="hidden"
              animate="show"
              exit="exit"
              variants={SwitchPlateVariant}
            >
              <img className="switch__plate" src={SwitchPlate} alt="switch plate" />
              <div className="switch__button controller" onClick={handleSwitch}>
                <div className="controller__container">
                  <motion.div
                    className="controller__button"
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    variants={SwitchControllerVariant}
                  ></motion.div>
                </div>
                <motion.div
                  className="pulse"
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  variants={PulseVariant}
                >
                  <img className="pulse__pointer" src={IconPointer} alt="click to open switch" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </Content>
    </>
  )
}

export default OpenSwitch