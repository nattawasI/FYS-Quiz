import React, {useState} from 'react'
import {useRouteActionContext} from '../context/RouteContext'
import {useUserStateContext} from '../context/UserContext'
import {motion} from 'framer-motion'
import {containerVariant} from '../variable/MotionVariant'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Content from '../layout/Content'
import ButtonSound from '../component/ButtonSound'
import ButtonRestart from '../component/ButtonRestart'
import Facebook from '../image/page/end/ico_facebook.svg'
import Line from '../image/page/end/ico_line.svg'
import Shared from '../image/page/end/ico_shared.svg'
import Twitter from '../image/page/end/ico_twitter.svg'
import Coffee from '../image/page/end/img_coffee.svg'
import RibbonTop from '../image/page/end/ico_ribbon_01.svg'
import RibbonBottom from '../image/page/end/ico_ribbon_02.svg'
import DeadbodyMaleMD from '../image/page/end/img_deadbody_male_md.png'
import DeadbodyMaleSM from '../image/page/end/img_deadbody_male_sm.png'
import DeadbodyFemaleMD from '../image/page/end/img_deadbody_female_md.png'
import DeadbodyFemaleSM from '../image/page/end/img_deadbody_female_sm.png'

const personVariant = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: 'easeInOut',
    }
  },
}

const socialVariant = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: 'easeInOut',
    }
  },
}

const RibbonTopVariant = {
  hidden: {
    y: -150,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
      ease: 'easeInOut',
    }
  },
}

const RibbonBottomVariant = {
  hidden: {
    y: 150,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
      ease: 'easeInOut',
    }
  },
}

const CoffeeVariant = {
  hidden: {
    y: -150,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
      ease: 'easeInOut',
    }
  },
}

const End = () => {
  // route context
  const {changeCurrentPageContext} = useRouteActionContext()

  // context
  const {friendInfoContext} = useUserStateContext()

  // utility hook
  const isWindowSmall = UseWindowSmall()

  // state
  const [skipAnimate, setSkipAnimate] = useState(false)
  const [animateComplete, setAnimateComplete] = useState(false)

  // function
  const goToNextPage = () => {
    changeCurrentPageContext('Start')
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

  const Socials = [
    {
      icon: Shared,
      name: 'Shared',
    },
    {
      icon: Facebook,
      name: 'Facebook',
    },
    {
      icon: Twitter,
      name: 'Twitter',
    },
    {
      icon: Line,
      name: 'Line',
    }
  ]

  // hardcode to check image
  friendInfoContext.gender = 'female'

  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <ButtonSound />
      <Content>
        <div className="scene-panel end" onClick={touchPanelSm}>
          <div className="end__container">
            <div className="end__content">
              <div className="end__button">
                <ButtonRestart onClick={goToNextPage} />
              </div>
              <motion.img
                className="end__ribbon-top"
                src={ RibbonTop }
                alt="ribbon top"
                variants={RibbonTopVariant}
                initial="hidden"
                animate="show"
              />

              <motion.img
                className="end__ribbon-bottom"
                src={ RibbonBottom }
                alt="ribbon bottom"
                variants={RibbonBottomVariant}
                initial="hidden"
                animate="show"
              />

              <motion.img
                className="end__coffee"
                src={ Coffee }
                alt="Coffee"
                variants={CoffeeVariant}
                initial="hidden"
                animate="show"
              />

              <motion.div
                className="end__person"
                variants={personVariant}
                initial="hidden"
                animate="show"
              >
                <div className="end__body dead-body">
                {
                  friendInfoContext.gender === 'male' &&
                  <img
                    className="dead-body__image"
                    src={ isWindowSmall ? DeadbodyMaleSM : DeadbodyMaleMD }
                    alt="dead body"
                  />
                }
                {
                  friendInfoContext.gender === 'female' &&
                  <img
                    className="dead-body__image"
                    src={ isWindowSmall ? DeadbodyFemaleSM : DeadbodyFemaleMD }
                    alt="dead body"
                  />
                }
                </div>
              </motion.div>
              
              <div className="end__social social">
                <motion.div
                  className="social__list"
                  variants={socialVariant}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  {
                    Socials.map((item, index) => (
                      <motion.div key={`social-key-${index}`} className="social__item">
                        <a className="social__link" href="#dummy">
                          <img className="social__icon" src={item.icon} alt={item.name} />
                        </a>
                      </motion.div>
                    ))
                  }
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </motion.div>
  )
}

export default End