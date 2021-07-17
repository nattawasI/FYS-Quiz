import React, {useState} from 'react'
import {useRouteActionContext} from '../context/RouteContext'
import {motion, AnimatePresence} from 'framer-motion'
import {containerVariant} from '../variable/MotionVariant'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Content from '../layout/Content'
import ButtonSound from '../component/ButtonSound'
import ButtonNext from '../component/ButtonNext'

// Motion Variants
const textVariant = {
  hidden: {
    opacity: 0,
    y: 90
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

const buttonVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 0.7,
      delay: 2.5,
    }
  }
}

const Investigate = () => {
  // route context
  const {changeCurrentPageContext} = useRouteActionContext()

  // utility hook
  const isWindowSmall = UseWindowSmall()

  // state
  const [skipAnimate, setSkipAnimate] = useState(false)
  const [animateComplete, setAnimateComplete] = useState(false)

  // function
  const goToNextPage = () => {
    changeCurrentPageContext('PageName')
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

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ButtonSound />
      <Content>
        <div className="scene-panel page-name" onClick={touchPanelSm}>
          {
            // render content at here
          }
        </div>
      </Content>
    </motion.div>
  )
}

export default Investigate
