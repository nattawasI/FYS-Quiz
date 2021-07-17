
import React from 'react'
import {motion} from 'framer-motion'
import {containerVariant} from '../variable/MotionVariant'
import {useUserStateContext} from '../context/UserContext'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Content from '../layout/Content'
import ButtonSound from '../component/ButtonSound'
import ButtonNext from '../component/ButtonNext'

// motion Variant
const textVariant = {
  hidden: {
    opacity: 0,
    y: 70
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      delay: 0.5,
      duration: 0.9
    },
  },
  exit: {
    y: -100,
    opacity: 0,
    transition: {
      type: 'tween',
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
      ease: 'easeInOut',
      delay: 1.5,
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    transition: {
      type: 'tween',
    }
  }
}

const CallPolice1 = () => {
  const { friendInfoContext } = useUserStateContext()
  const isWindowSmall = UseWindowSmall()

  let animateEnd = false

  // function
  const goToNextPage = () => {
    if (isWindowSmall) {
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
        <div className="scene-panel call-police" onClick={goToNextPage}>
          <div className="box-story call-police__scene">
            <motion.p className="box-story__text text-story"
              key="textScene1"
              variants={textVariant}
              initial="hidden"
              animate="show"
              exit="exit"
              onAnimationComplete={ () => animateEnd = true }
            >แต่กลับพบว่า<br />{friendInfoContext.name} ตัวเย็นเฉียบ<br />หน้าซีด และไม่หายใจ
            </motion.p>
            {
              !isWindowSmall
              && <motion.div className="box-story__button"
                  variants={buttonVariant}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <ButtonNext onClick={goToNextPage} />
                </motion.div>
            }
          </div>
        </div>
      </Content>
    </motion.div>
  )
}

export default CallPolice1

