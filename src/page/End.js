import React, {useState} from 'react'
import {useRouteActionContext} from '../context/RouteContext'
import {motion, AnimateSharedLayout} from 'framer-motion'
import {containerVariant} from '../variable/MotionVariant'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Content from '../layout/Content'
import ButtonSound from '../component/ButtonSound'
import Facebook from '../image/page/end/ico_facebook.svg'
import Line from '../image/page/end/ico_line.svg'
import Shared from '../image/page/end/ico_shared.svg'
import Twitter from '../image/page/end/ico_twitter.svg'
import Coffee from '../image/page/end/img_coffee.svg'
import RibbonTop from '../image/page/end/ico_ribbon_01.svg'
import RibbonBottom from '../image/page/end/ico_ribbon_02.svg'
import PersonMD from '../image/page/end/img_man_md.png'
import PersonSM from '../image/page/end/img_man_sm.png'

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
                <div className="end__body">
                  <img  className="end__body-image" src={ isWindowSmall ? PersonSM : PersonMD } alt="dead body" />
                </div>
                <div className="social">
                  
                  <AnimateSharedLayout>
                    <motion.div className="social__list" layout>
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
                  </AnimateSharedLayout>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Content>
    </motion.div>
  )
}

export default End