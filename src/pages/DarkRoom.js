import React from 'react'
import { motion } from 'framer-motion'
import Content from '../layouts/Content'
import ButtonBack from '../components/ButtonBack'
import ButtonSound from '../components/ButtonSound'
import ButtonNext from '../components/ButtonNext'
import bgScene from '../image/scene01/bg_scene_01.svg'

const DarkRoom = () => {
  const textVariant = {
    hidden: { y: 0, opacity: 0 },
    show: { y: -220, opacity: 1 },
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
    }
  }

  const buttonVariant = {
    hidden: {
      y: 0,
      opacity: 0
    },
    show: {
      y: -180,
      opacity: 1,
      transition: {
        delay: 5,
        duration: 1,
      }
    },
  }

  return (
    <>
      <ButtonBack />
      <ButtonSound />
      <Content>
        <div className="scene-panel scene1">
          <motion.div
            className="scene1__figure"
            initial="hidden"
            animate="show"
            variants={sceneVariant}
          >
            <img className="scene1__image" src={bgScene} alt="" />
          </motion.div>
          <div className="scene1__container">
            <motion.div 
              className="scene1__text text-story"
              initial="hidden"
              animate="show"
              variants={textVariant}
              transition={{ duration: 3 }}
            >
              คุณตื่นขึ้นมากลางดึก<br/>แล้วมีเเต่ความมืดสลัว
            </motion.div>
            <motion.div
              className="scene1__button"
              initial="hidden"
              animate="show"
              variants={buttonVariant}
            >
              <ButtonNext/>
            </motion.div>
          </div>
        </div>
      </Content>
    </>
  )
}

export default DarkRoom
