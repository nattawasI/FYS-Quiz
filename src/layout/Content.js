import React, {useState, useEffect} from 'react'
import {useRouteStateContext} from '../contexts/RouteContext'
import {containerVariant} from '../variables/MotionVariant'
import {motion} from 'framer-motion'
import PropTypes from 'prop-types'
import UseWindowSmall from '../utilityhooks/useWindowSmall'
import ButtonSound from '../components/ButtonSound'
import IconRotate from '../assets/images/icon/icon_rotate.svg'

const Content = ({ children, bgColor, className }) => {
  // Utility hook
  const isWindowSmall = UseWindowSmall()

  // Context
  const {currentPageContext} = useRouteStateContext()

  const [isLandscape, setIsLandscape] = useState(false)
  const [buttonSoundDark, setButtonSoundDark] = useState(false)

  const classStyle = () => {
    if (bgColor === 'white') {
      return `content content--light${' ' + className}`
    } else if (bgColor === 'blue') {
      return `content content--blue${' ' + className}`
    } else {
      if (className) {
        return `content${' ' + className}`
      } else {
        return 'content'
      }
    }
  }

  useEffect(() => {
    const checkIsLandscape = () => {
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight

      if (isWindowSmall && screenWidth > screenHeight) {
        setIsLandscape(true)
      } else {
        setIsLandscape(false)
      }
    }

    checkIsLandscape()

    window.addEventListener('resize', checkIsLandscape)

    return () => {
      window.removeEventListener('resize', checkIsLandscape)
    }
  }, [isWindowSmall, isLandscape])


  useEffect(() => {
    if (currentPageContext === 'Evidence' || currentPageContext === 'ResultSymptoms') {
      setButtonSoundDark(true)
    }
  }, [currentPageContext])

  return (
    <>
      {
        currentPageContext !== 'Preface' && <ButtonSound dark={buttonSoundDark} />
      }
      <motion.div
        className={classStyle()}
        variants={containerVariant}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {children}
      </motion.div>
      {
        isWindowSmall && isLandscape
        &&  <div className="overlay-landscape">
              <div className="box-rotate">
                <i className="box-rotate__icon">
                  <img src={IconRotate} alt="กรุณาตั้งหน้าจอให้อยู่ในรูปแบบแนวตั้ง" />
                </i>
                <p className="box-rotate__text">กรุณาตั้งหน้าจอให้อยู่ในรูปแบบแนวตั้ง</p>
              </div>
            </div>
      }
    </>
  )
}

Content.propTypes = {
  children: PropTypes.element.isRequired,
  bgColor: PropTypes.string,
  className: PropTypes.string,
}

Content.defaultProps = {
  children: PropTypes.element.isRequired,
  bgColor: 'black',
  className: '',
}

export default Content
