import React, {useState} from 'react'
import {useRouteActionContext} from '../context/RouteContext'
import {motion} from 'framer-motion'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Content from '../layout/Content'
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

const bgVariant = {
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
  const {changeCurrentPageContext} = useRouteActionContext()

  // utilityhook
  const isWindowSmall = UseWindowSmall()

  // state
  const [animateComplete, setAnimateComplete] = useState(false)

  // function
  const goToNextPage = () => {
    changeCurrentPageContext('Investigate')
  }

  const touchPanelSm = () => {
    if (isWindowSmall && animateComplete) {
      goToNextPage()
    }
  }

  return (
    <>
      <Content>
        <div className="scene-panel siren" onClick={touchPanelSm}>
          <motion.div className="siren__background"
            variants={bgVariant}
            initial="hidden"
            animate="show"
            onAnimationComplete={() => setAnimateComplete(true)}
          ></motion.div>
          <motion.div className="siren__content box-story"
            variants={boxTextVariant}
            initial="hidden"
            animate="show"
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
                >
                  <ButtonNext onClick={goToNextPage} />
                </motion.div>
            }
          </motion.div>
        </div>
      </Content>
    </>
  )
}

export default Siren
