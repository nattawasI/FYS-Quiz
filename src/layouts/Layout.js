import React,{useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import ButtonBack from '../components/ButtonBack'
import ButtonSound from '../components/ButtonSound'

const Layout = (props) => {
  const [layoutWidth, setLayoutWidth] = useState({})

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      if (windowWidth > 768) { // Desktop' frame
        const frameStyle = {}
        const frameHeight = Math.floor((windowWidth*9)/16)

        if (frameHeight < windowHeight) {
          const frameWidth = Math.floor((windowHeight*16)/9)
          const frameLeft = (windowWidth - frameWidth)/2
          frameStyle.width = `${frameWidth}px`
          frameStyle.height = `${windowHeight}px`
          frameStyle.transform = `translateX(${frameLeft}px)`
          setLayoutWidth(frameStyle)
        } else {
          frameStyle.width = `${windowWidth}px`
          frameStyle.height = `${frameHeight}px`
          setLayoutWidth(frameStyle)
        }
      } else { // Smartphone' frame
        const frameStyle = {}
        const frameWidth = Math.floor((windowHeight*9)/16)
        const frameLeft = (windowWidth - frameWidth)/2
        frameStyle.width = `${frameWidth}px`
        frameStyle.transform = `translateX(${frameLeft}px)`
        setLayoutWidth(frameStyle)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <div className="layout">
      <div className="layout__button layout__button--back">
        <ButtonBack />
      </div>
      <div className="layout__button layout__button--sound">
        <ButtonSound />
      </div>
      <div className="layout__main" style={layoutWidth}>{props.children}</div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout
