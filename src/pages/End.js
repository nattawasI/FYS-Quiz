import React from 'react'
import {useUserStateContext} from '../contexts/UserContext'
import {motion} from 'framer-motion'
import {motionVariables} from '../variables/MotionVariant'
import UseCurrentDevice from '../hooks/useCurrentDevice'
import Content from '../layout/Content'
import ButtonRestart from '../components/ButtonRestart'
import Facebook from '../assets/images/page/end/ico_facebook.svg'
import Line from '../assets/images/page/end/ico_line.svg'
import Shared from '../assets/images/page/end/ico_shared.svg'
import Twitter from '../assets/images/page/end/ico_twitter.svg'
import RibbonTop from '../assets/images/page/end/ico_ribbon_01.svg'
import RibbonBottom from '../assets/images/page/end/ico_ribbon_02.svg'
import DeadbodyMaleMD from '../assets/images/page/end/img_deadbody_male_md.svg'
import DeadbodyMaleTB from '../assets/images/page/end/img_deadbody_male_tb.svg'
import DeadbodyMaleSM from '../assets/images/page/end/img_deadbody_male_sm.svg'
import DeadbodyFemaleMD from '../assets/images/page/end/img_deadbody_female_md.svg'
import DeadbodyFemaleTB from '../assets/images/page/end/img_deadbody_female_tb.svg'
import DeadbodyFemaleSM from '../assets/images/page/end/img_deadbody_female_sm.svg'

const personVariant = {
  hidden: {
    opacity: motionVariables.opacity.opacityZero,
  },
  show: {
    opacity: motionVariables.opacity.opacityOne,
    transition: {
      duration: motionVariables.speed.speedOne,
      delay: motionVariables.speed.speedOne,
      ease: 'easeInOut',
    }
  },
}

const socialVariant = {
  hidden: {
    opacity: motionVariables.opacity.opacityZero,
  },
  show: {
    opacity: motionVariables.opacity.opacityOne,
    transition: {
      delay: motionVariables.speed.speedOne,
      duration: motionVariables.speed.speedOne,
      ease: 'easeInOut',
    }
  },
}

const RibbonTopVariant = {
  hidden: {
    y: -150,
    opacity: motionVariables.opacity.opacityZero,
  },
  show: {
    y: 0,
    opacity: motionVariables.opacity.opacityOne,
    transition: {
      delay: motionVariables.speed.speedOne,
      duration: motionVariables.speed.speedOne,
      ease: 'easeInOut',
    }
  },
}

const RibbonBottomVariant = {
  hidden: {
    y: 150,
    opacity: motionVariables.opacity.opacityZero,
  },
  show: {
    y: 0,
    opacity: motionVariables.opacity.opacityOne,
    transition: {
      duration: motionVariables.speed.speedOne,
      delay: motionVariables.speed.speedOne,
      ease: 'easeInOut',
    }
  },
}

const End = () => {
  // context
  const {friendInfoContext} = useUserStateContext()

  // utility hook
  const currentDevice = UseCurrentDevice()

  // function
  const goToNextPage = () => {
    window.location.reload()
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

  const setImageHuman = () => {
    if (currentDevice === 'desktop') {
      return friendInfoContext.gender === 'male'? DeadbodyMaleMD: DeadbodyFemaleMD
    } else if (currentDevice === 'tablet') {
      return friendInfoContext.gender === 'male'? DeadbodyMaleTB: DeadbodyFemaleTB
    } else {
      return friendInfoContext.gender === 'male'? DeadbodyMaleSM: DeadbodyFemaleSM
    }
  }

  return (
    <>
      <div className="button-fixed-left-top">
        <ButtonRestart onClick={goToNextPage} />
      </div>
      <Content>
        <div className="scene-panel end">
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

              <motion.div
                className="end__person"
                variants={personVariant}
                initial="hidden"
                animate="show"
              >
                <div className="end__body dead-body">
                  <img
                    className="dead-body__image"
                    src={ setImageHuman() }
                    alt="dead body"
                  />
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
                      <motion.div
                        key={`social-key-${index}`}
                        className="social__item"
                        whileHover={{ scale: 1.2 }}
                      >
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
    </>
  )
}

export default End