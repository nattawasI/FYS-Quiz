import React,{useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import ButtonBack from '../components/ButtonBack'
import ButtonSound from '../components/ButtonSound'

const Frame = (props) => {
  const [layoutWidth, setLayoutWidth] = useState({})

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight
      console.log('windowWidth', windowWidth);
      console.log('windowHeight', windowHeight);

      if (windowWidth > 768) {
        const frameHeight = Math.floor((windowWidth*9)/16)
        const frameStyle = {}

        if (frameHeight < windowHeight) {
          const frameWidth = Math.floor((windowHeight*16)/9)
          frameStyle.width = `${frameWidth}px`
          frameStyle.height = `${windowHeight}px`
          setLayoutWidth(frameStyle)
        } else {
          frameStyle.width = `${windowWidth}px`
          frameStyle.height = `${frameHeight}px`
          setLayoutWidth(frameStyle)
        }
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <div className="frame" style={layoutWidth}>
      <div className="frame__button frame__button--back">
        <ButtonBack />
      </div>
      <div className="frame__button frame__button--sound">
        <ButtonSound />
      </div>
      <div>{props.children}</div>
    </div>
  )
}

Frame.propTypes = {
  children: PropTypes.element.isRequired
};

export default Frame
