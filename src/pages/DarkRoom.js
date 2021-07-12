import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Content from '../layouts/Content'
import ButtonSound from '../components/ButtonSound'
import ButtonNext from '../components/ButtonNext'
import bgScenePC from '../image/pages/darkroom/bg_scene_01.svg'

const DarkRoom = () => {
  // Motion Variants
  const textVariant = {
    hidden: { y: 0, opacity: 0 },
    show: { y: '-100%', opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        type: 'tween',
      }
    }
  }

  const sceneVariant = {
    hidden: {
      originY: 1,
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
    exit: {
      opacity: 0,
      transition: {
        type: 'tween',
      }
    }
  }

  const buttonVariant = {
    hidden: {
      y: 0,
      opacity: 0
    },
    show: {
      y: '-100%',
      opacity: 1,
      transition: {
        delay: 5,
        duration: 1,
      }
    },
    exit: {
      opacity: 0,
      transition: {
        type: 'tween',
      }
    }
  }

  return (
    <>
      <ButtonSound />
      <Content>
        <AnimatePresence>
          <div className="scene-panel scene1">
            <motion.div
              className="scene1__figure"
              initial="hidden"
              animate="show"
              exit="exit"
              variants={sceneVariant}
            >
              <img className="scene1__image" src={bgScenePC} alt="" />
            </motion.div>
            <div className="scene1__container">
              <motion.div 
                className="scene1__text text-story"
                initial="hidden"
                animate="show"
                exit="exit"
                variants={textVariant}
                transition={{ duration: 3 }}
              >
                คุณตื่นขึ้นมากลางดึก<br/>แล้วมีเเต่ความมืดสลัว
              </motion.div>
              <motion.div
                className="scene1__button"
                initial="hidden"
                animate="show"
                exit="exit"
                variants={buttonVariant}
              >
                <ButtonNext/>
              </motion.div>
            </div>
          </div>
        </AnimatePresence>
      </Content>
    </>
  )
}

export default DarkRoom
