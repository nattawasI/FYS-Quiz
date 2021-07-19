import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import UseSetFrame from '../utilityhook/useSetFrame'
import IconRotate from '../image/icon/icon_rotate.svg'

const Content = ({ children, bgColor, className }) => {
  const frameStyle = UseSetFrame()
  const isWindowSmall = UseWindowSmall()

  const [isLandscape, setIsLandscape] = useState(false)

  const classStyle = () => {
    if (bgColor === 'white') {
      return `content content--light${' ' + className}`
    } else if (bgColor === 'blue') {
      return `content content--blue${' ' + className}`
    } else {
      return `content${' ' + className}`
    }
  }

  useEffect(() => {
    const checkIsLandscape = () => {
      const screenWidth = window.screen.availWidth
      const screenHeight = window.screen.availHeight

      if (isWindowSmall && screenWidth > screenHeight) {
        setIsLandscape(true)
      } else {
        setIsLandscape(false)
      }
    }

    checkIsLandscape()

    window.addEventListener('resize', checkIsLandscape)
    return () => window.removeEventListener('resize', checkIsLandscape)
  }, [isWindowSmall])

  return (
    <>
      <div className={classStyle()}>
        <div className="content__main" style={frameStyle}>{children}</div>
      </div>
      {
        isWindowSmall && isLandscape
        &&  <div className="overlay-lanscape">
              <div className="box-howto">
                <i className="box-howto__icon">
                  <img src={IconRotate} alt="กรุณาตั้งหน้าจอให้อยู่ในรูปแบบแนวตั้ง" />
                </i>
                <p className="box-howto__text">กรุณาตั้งหน้าจอให้อยู่ในรูปแบบแนวตั้ง</p>
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
  className: ''
}

export default Content
