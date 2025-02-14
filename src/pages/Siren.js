import React, {useState} from 'react'
import {useRouteActionContext} from '../contexts/RouteContext'
import {useSoundActionContext} from '../contexts/SoundContext'
import {motion} from 'framer-motion'
import UseWindowSmall from '../hooks/useWindowSmall'
import Content from '../layout/Content'
import ButtonNext from '../components/ButtonNext'

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
      delay: 1,
    }
  },
}

const boxTextVariant = {
  hidden: {
    y: 0
  },
  show: {
    y: -170,
    transition: {
      ease: "easeInOut",
      duration: 1,
      delay: 2.5,
    }
  },
}

const sceneVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
      delay: 2.5,
    }
  }
}

const bgVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      duration: 0.5
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
      delay: 3,
    }
  }
}

const Siren = () => {
  // context
  const {changeCurrentPageContext} = useRouteActionContext()
  const {playClickSoundContext} = useSoundActionContext()

  // hooks
  const isWindowSmall = UseWindowSmall()

  // state
  const [completedScene, setCompletedScene] = useState(false)

  // function
  const goToNextPage = () => {
    playClickSoundContext()
    changeCurrentPageContext('Investigate')
  }

  const touchPanelSm = () => {
    if (isWindowSmall && completedScene) {
      goToNextPage()
    }
  }

  return (
    <>
      <Content>
        <div className="scene-panel siren" onTouchStart={touchPanelSm}>
          <motion.div
            className="siren__scene"
            variants={sceneVariant}
            initial="hidden"
            animate="show"
          >
            <motion.div
              className="siren__background--front"
              variants={bgVariant}
              initial="hidden"
              animate="show"
            ></motion.div>
            <div className="siren__background--back"></div>
          </motion.div>
          <motion.div className="siren__content box-story"
            variants={boxTextVariant}
            initial="hidden"
            animate="show"
            onAnimationComplete={() => setCompletedScene(true)}
          >
            <motion.p className="box-story__text text-story"
              variants={textVariant}
              initial="hidden"
              animate="show"
            >
              ตอนนี้ คุณตกเป็นผู้ต้องสงสัย<br />ในคดีการตายของเพื่อนสนิท
            </motion.p>
            {
              !isWindowSmall
              && <motion.div className="box-story__button"
                  variants={buttonVariant}
                  initial="hidden"
                  animate="show"
                  onAnimationComplete={ () => setCompletedScene(true) }
                >
                  <ButtonNext onClick={goToNextPage} animateCompleted={completedScene} />
                </motion.div>
            }
          </motion.div>
        </div>
      </Content>
    </>
  )
}

export default Siren
