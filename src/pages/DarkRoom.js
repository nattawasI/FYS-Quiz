import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import UseWindowSmall from '../utilityhooks/useWindowSmall'
import Content from '../layouts/Content'
import ButtonSound from '../components/ButtonSound'
import ButtonNext from '../components/ButtonNext'
import bgSceneMD from '../image/pages/darkroom/bg_scene_01_md.svg'
import bgSceneSM from '../image/pages/darkroom/bg_scene_01_sm.svg'

// Motion Variants
const sceneVariantMD = {
  hidden: {
    originY: 1,
    x: "-50%",
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
      ease: "easeInOut",
    }
  },
}
const sceneVariantSM = {
  hidden: {
    x: "-50%",
    opacity: 0,
  },
  show: {
    y: [158, 158, 158, 38],
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 3,
      ease: "easeOut",
      times: [0, 0.4, 0.7, 1]
    },
  },
}

const textVariantMD = {
  hidden: {
    y: 0,
    opacity: 0,
  },
  show: {
    y: [0, 0, -300],
    opacity: [0, 1, 1],
    transition: {
      duration: 3,
      ease: "easeInOut",
      times: [0, 0.5, 1]
    }
  },
}
const textVariantSM = {
  hidden: {
    y: 25,
    opacity: 0,
  },
  show: {
    y: [25, 0, 0, -200],
    opacity: [0, 1, 1, 1],
    transition: {
      duration: 3,
      ease: "easeOut",
      times: [0, 0.4, 0.7, 1]
    }
  }
}

const buttonVariant = {
  hidden: {
    y: -120,
    opacity: 0
  },
  show: {
    y: -220,
    opacity: 1,
    transition: {
      delay: 3,
      duration: 1,
    }
  },
}

const simpleExit = {
  opacity: 0,
  transition: {
    type: 'tween',
  }
}

const DarkRoom = () => {
  const isWindowSmall = UseWindowSmall()
  return (
    <>
      <ButtonSound />
      <Content>
        <div className="scene-panel scene1">
          <AnimatePresence>
            {
              <AnimatePresence key="darkroom-01" exitBeforeEnter>
                {
                  !isWindowSmall && <motion.div
                    key="darkroom-figure-01"
                    className="scene1__figure"
                    initial="hidden"
                    animate="show"
                    variants={sceneVariantMD}
                    exit={simpleExit}
                  >
                    <img className="scene1__image scene1__image--pc" src={bgSceneMD} alt="" />
                  </motion.div>
                }
                {
                  isWindowSmall && <motion.div
                    key="darkroom-figure-02"
                    className="scene1__figure"
                    initial="hidden"
                    animate="show"
                    variants={sceneVariantSM}
                    exit={simpleExit}
                  >
                    <img className="scene1__image scene1__image--sp" src={bgSceneSM} alt="" />
                  </motion.div>
                }
              </AnimatePresence>
            }
            {
              <div key="darkroom-02" className="scene1__container">
                <AnimatePresence>
                  {
                    !isWindowSmall
                    && <>
                      <motion.div
                        key="darkroom-text-01"
                        className="scene1__text text-story"
                        initial="hidden"
                        animate="show"
                        variants={textVariantMD}
                      >
                        คุณตื่นขึ้นมากลางดึก<br/>แล้วมีเเต่ความมืดสลัว
                      </motion.div>
                      <motion.div
                        className="scene1__button"
                        initial="hidden"
                        animate="show"
                        variants={buttonVariant}
                        exit={simpleExit}
                      >
                        <ButtonNext/>
                      </motion.div>
                    </>
                  }
                  {
                    isWindowSmall && <motion.div
                      key="darkroom-text-02"
                      className="scene1__text text-story"
                      initial="hidden"
                      animate="show"
                      variants={textVariantSM}
                    >
                      คุณตื่นขึ้นมากลางดึก<br/>แล้วมีเเต่ความมืดสลัว
                    </motion.div>
                  }
                </AnimatePresence>
              </div>
            }
          </AnimatePresence>
        </div>
      </Content>
    </>
  )
}

export default DarkRoom
