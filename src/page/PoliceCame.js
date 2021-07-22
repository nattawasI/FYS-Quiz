import React, {useState} from 'react'
import {useRouteActionContext} from '../context/RouteContext'
import {useUserStateContext} from '../context/UserContext'
import {motion} from 'framer-motion'
import {containerVariant} from '../variable/MotionVariant'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Content from '../layout/Content'
import ButtonSound from '../component/ButtonSound'
import ButtonNext from '../component/ButtonNext'
import BgDeadManMd from '../image/page/police-came/bg_deadman_md.svg'
import BgDeadManSm from '../image/page/police-came/bg_deadman_sm.svg'
import BgDeadWomenMd from '../image/page/police-came/bg_deadwomen_md.svg'
import BgDeadWomenSm from '../image/page/police-came/bg_deadwomen_sm.svg'

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
  const {changeCurrentPageContext} = useRouteActionContext()

  // context
  const {friendInfoContext} = useUserStateContext()

  // utilityhook
  const isWindowSmall = UseWindowSmall()

  // state
  const [animateComplete, setAnimateComplete] = useState(false)


  // function
  const goToNextPage = () => {
    changeCurrentPageContext('Siren')
  }

  const touchPanelSm = () => {
    if (isWindowSmall) {
      if (animateComplete) {
        goToNextPage()
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
        <div className="scene-panel police-came" onClick={touchPanelSm}>
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
              onAnimationComplete={ () => setAnimateComplete(true) }
            >เมื่อตำรวจมาถึง ก็สำรวจที่เกิดเหตุทันที<br />แล้วขอเชิญคุณไปสอบสวน</motion.p>
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
          </div>
        </div>
      </Content>
    </motion.div>
  )
}

export default PoliceCame
