import React, {useState} from 'react'
import {useUserStateContext} from '../contexts/UserContext'
import {useSoundActionContext} from '../contexts/SoundContext'
import {motion} from 'framer-motion'
import UseCurrentDevice from '../hooks/useCurrentDevice'
import Content from '../layout/Content'
import ButtonRestart from '../components/ButtonRestart'
import ListSocial from '../components/ListSocial'
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
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 1,
      ease: 'easeInOut',
    }
  },
}

const socialVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
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
      duration: 1,
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
      duration: 1,
      delay: 1,
      ease: 'easeInOut',
    }
  },
}

const End = () => {
  // context
  const {friendInfoContext} = useUserStateContext()
  const {playClickSoundContext} = useSoundActionContext()

  // utility hook
  const currentDevice = UseCurrentDevice()

  // state
  const [copied, setCopied] = useState(false)

  // function
  const copyClipboard = () => {
    console.log('copyClipboard');
  }

  const shareFacebook = () => {
    console.log('facebook');
  }

  const shareLine = () => {
    console.log('line');
  }

  const shareTwitter = () => {
    console.log('twitter');
  }

  const handleClick = () => {
  }

  // function
  const goToNextPage = () => {
    playClickSoundContext()
    window.location.reload()
  }

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
              <motion.div className="end__social"
                variants={socialVariant}
                initial="hidden"
                animate="show"
                exit="exit"
              >
                <ListSocial />
              </motion.div>
            </div>
          </div>
        </div>
      </Content>
    </>
  )
}

export default End