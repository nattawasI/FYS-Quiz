import React, {useState, useEffect} from 'react'
import {useRouteActionContext} from '../contexts/RouteContext'
import {useSoundActionContext} from '../contexts/SoundContext'
import {motion} from 'framer-motion'
import UseWindowSmall from '../utilityhooks/useWindowSmall'
import Content from '../layout/Content'
import ButtonNext from '../components/ButtonNext'
import BgSirenMd from '../assets/images/page/siren/bg_siren_md.svg'
import BgSirenMdOn from '../assets/images/page/siren/bg_siren_md_on.svg'
import BgSirenSm from '../assets/images/page/siren/bg_siren_sm.svg'
import BgSirenSmOn from '../assets/images/page/siren/bg_siren_sm_on.svg'

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
  const {playClickSoundContext, playInvestigationSoundContext} = useSoundActionContext()

  // utilityhook
  const isWindowSmall = UseWindowSmall()

  // state
  const [animateComplete, setAnimateComplete] = useState(false)
  const [bgStyle, setBgStyle] = useState({})

  // useEffect(() => {
  //   const backgrounds = isWindowSmall
  //   ? { bg1: BgSirenSm, bg2: BgSirenSmOn }
  //   : { bg1: BgSirenMd, bg2: BgSirenMdOn }
  //   let currentBG = 'bg1'

  //   const changeBG = () => {
  //     if (currentBG === 'bg1') {
  //       setBgStyle({
  //         backgroundImage: `url(${backgrounds.bg1})`
  //       })
  //       currentBG = 'bg2'
  //     } else {
  //       setBgStyle({
  //         backgroundImage: `url(${backgrounds.bg2})`
  //       })
  //       currentBG = 'bg1'
  //     }
  //   }

  //   let interval = setInterval(changeBG, 300)

  //   return () => clearInterval(interval)
  // }, [isWindowSmall])

  // function
  const goToNextPage = () => {
    playInvestigationSoundContext()
    changeCurrentPageContext('Investigate')
  }

  const touchPanelSm = () => {
    if (isWindowSmall && animateComplete) {
      playClickSoundContext()
      goToNextPage()
    }
  }

  return (
    <>
      <Content>
        <div className="scene-panel siren" onClick={touchPanelSm}>
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
              onAnimationComplete={() => setAnimateComplete(true)}
            ></motion.div>
            <div className="siren__background--back"></div>
          </motion.div>
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
