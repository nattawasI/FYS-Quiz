import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import UseWindowSmall from '../utilityhooks/useWindowSmall'
import Content from '../layouts/Content'
import ButtonSound from '../components/ButtonSound'
import ButtonNext from '../components/ButtonNext'
import bgScenePC from '../image/pages/darkroom/bg_scene_01_pc.svg'
import bgSceneSP from '../image/pages/darkroom/bg_scene_01_sp.svg'

// Motion Variants
const sceneVariant = {
  hidden: {
    opacity: 0,
    scale: 0.25,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 3,
      duration: 2,
    }
  },
}

const sceneVariantSP = {
  // initial={{ x: "-50%" }}
  // animate={{
  //   y: [100, 100, 100, 38],
  //   opacity: [0, 0, 1, 1],
  // }}
  // transition={{
  //   duration: 3,
  //   ease: "easeInOut",
  //   times: [0, 0.6, 0.8, 1]
  // }}
  hidden: {
    x: "-50%",
    opacity: 0,
  },
  show: {
    y: [100, 100, 100, 38],
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 3,
      ease: "easeInOut",
      times: [0, 0.4, 0.7, 1]
    },
  },
}

const textVariantSP = {
  hidden: {
    y: 25,
    opacity: 0,
  },
  show: {
    y: [25, 0, 0, -220],
    opacity: [0, 1, 1, 1],
    transition: {
      duration: 3,
      ease: "easeInOut",
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
              <AnimatePresence key="darkroom-01">
                {
                  !isWindowSmall && <motion.div
                    key="darkroom-figure-01"
                    className="scene1__figure"
                    initial={{ x: "-50%" }}
                    animate={{
                      scale: [0, 1],
                    }}
                    transition={{
                      delay: 1.5,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                    style={{ originY: 1 }}
                    exit={simpleExit}
                  >
                    <img className="scene1__image scene1__image--pc" src={bgScenePC} alt="" />
                  </motion.div>
                }
                {
                  isWindowSmall && <motion.div
                    key="darkroom-figure-02"
                    className="scene1__figure"
                    initial="hidden"
                    animate="show"
                    variants={sceneVariantSP}
                    exit={simpleExit}
                  >
                    <img className="scene1__image scene1__image--sp" src={bgSceneSP} alt="" />
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
                        animate={{
                          y: [0, 0, -300],
                          opacity: [0, 1, 1],
                        }}
                        transition={{
                          duration: 3,
                          ease: "easeInOut",
                          times: [0, 0.5, 1]
                        }}
                      >
                        คุณตื่นขึ้นมากลางดึก<br/>แล้วมีเเต่ความมืดสลัว
                      </motion.div>
                      <motion.div
                        className="scene1__button"
                        initial="hidden"
                        animate="show"
                        exit={simpleExit}
                        variants={buttonVariant}
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
                      variants={textVariantSP}
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
