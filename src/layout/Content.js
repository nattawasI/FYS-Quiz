import React, {useState, useEffect} from 'react'
import {useRouteStateContext} from '../contexts/RouteContext'
import {motion} from 'framer-motion'
import PropTypes from 'prop-types'
import UseWindowSmall from '../hooks/useWindowSmall'
import ButtonSound from '../components/ButtonSound'
import IconRotate from '../assets/images/icon/icon_rotate.svg'

const Content = ({ children, bgColor, className }) => {
  // Utility hook
  const isWindowSmall = UseWindowSmall()

  // Context
  const {currentPageContext} = useRouteStateContext()

  const [isLandscape, setIsLandscape] = useState(false)
  const [buttonSoundDark, setButtonSoundDark] = useState(false)

  const contentVariant = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        ease: 'easeInOut',
        duration: currentPageContext === 'PoliceCame'? 2.5: 1
      }
    },
    exit: {
      opacity: 0,
      transition: {
        ease: 'easeInOut',
        duration: 1
      }
    }
  }

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
    let timer = ''
    const checkIsLandscape = () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        const isMobile = navigator.userAgent.match(/(iPad)|(iPhone)|(android)|(webOS)/i)
        if (isMobile !== null) {
          const screenWidth = window.innerWidth
          const screenHeight = window.innerHeight

          if (screenWidth > screenHeight) {
            if ((screenWidth - screenHeight) > 200) {
              setIsLandscape(true)
            }
          } else {
            setIsLandscape(false)
          }
        }
      }, 300)
    }

    checkIsLandscape()

    window.addEventListener('resize', checkIsLandscape)

    return () => {
      window.removeEventListener('resize', checkIsLandscape)
    }
  }, [isWindowSmall, isLandscape])


  useEffect(() => {
    if (currentPageContext === 'Preface' || currentPageContext === 'Evidence' || currentPageContext === 'ResultSymptoms') {
      setButtonSoundDark(true)
    }
  }, [currentPageContext])

  return (
    <>
      <ButtonSound dark={buttonSoundDark} />
      <motion.div
        id="content"
        className={classStyle()}
        variants={contentVariant}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {children}
      </motion.div>
      {
        isLandscape
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
