import React, {useState} from 'react'
import {useRouteActionContext} from '../contexts/RouteContext'
import {useUserStateContext} from '../contexts/UserContext'
import {useSoundActionContext} from '../contexts/SoundContext'
import {motion} from 'framer-motion'
import UseWindowSmall from '../hooks/useWindowSmall'
import Content from '../layout/Content'
import ButtonNext from '../components/ButtonNext'
import BgDeadManMd from '../assets/images/page/police-came/bg_deadman_md.svg'
import BgDeadManSm from '../assets/images/page/police-came/bg_deadman_sm.svg'
import BgDeadWomenMd from '../assets/images/page/police-came/bg_deadwomen_md.svg'
import BgDeadWomenSm from '../assets/images/page/police-came/bg_deadwomen_sm.svg'

// Motion Variants
const bodyVariant = {
  hidden: {
    y: 70,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
      delay: 0.5,
    }
  }
}

const textVariant = {
  hidden: {
    y: 70,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      duration: 1,
      delay: 0.5,
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
      duration: 1,
      delay: 1.5,
    }
  }
}

const PoliceCame = () => {
  // context
  const {friendInfoContext} = useUserStateContext()
  const {changeCurrentPageContext} = useRouteActionContext()
  const {playClickSoundContext} = useSoundActionContext()

  // hooks
  const isWindowSmall = UseWindowSmall()

  // state
  const [animateButtonComplete, setAnimateButtonComplete] = useState(false)
  const [completedScene, setCompletedScene] = useState(false)


  // function
  const goToNextPage = () => {
    playClickSoundContext()
    changeCurrentPageContext('Siren')
  }

  const handleClick = () => {
    if (animateButtonComplete) {
      goToNextPage()
    }
  }

  const touchPanelSm = () => {
    if (isWindowSmall && completedScene) {
      goToNextPage()
    }
  }

  return (
    <>
      <Content>
        <div className="scene-panel scene-panel--items-center police-came" onTouchStart={touchPanelSm}>
          <motion.div className="police-came__body"
            variants={bodyVariant}
            initial="hidden"
            animate="show"
          >
            {
              friendInfoContext.gender === 'male'
              ? <img src={isWindowSmall ? BgDeadManSm : BgDeadManMd} className="police-came__body-img" alt="ศพเพื่อนนอนตาย" />
              : <img src={isWindowSmall ? BgDeadWomenSm : BgDeadWomenMd} className="police-came__body-img" alt="ศพเพื่อนนอนตาย" />
            }
          </motion.div>
          <div className="police-came__content box-story">
            <motion.p className="box-story__text text-story"
              variants={textVariant}
              initial="hidden"
              animate="show"
              onAnimationComplete={ () => setCompletedScene(true) }
            >เมื่อตำรวจมาถึง ก็สำรวจที่เกิดเหตุทันที<br />แล้วขอเชิญคุณไปสอบสวน</motion.p>
            {
              !isWindowSmall
              && <motion.div className="box-story__button"
                  variants={buttonVariant}
                  initial="hidden"
                  animate="show"
                  onAnimationComplete={ () => setAnimateButtonComplete(true) }
                >
                  <ButtonNext onClick={handleClick} animateCompleted={animateButtonComplete} />
                </motion.div>
            }
          </div>
        </div>
      </Content>
    </>
  )
}

export default PoliceCame
