import React,{useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import ButtonBack from '../components/ButtonBack'
import ButtonSound from '../components/ButtonSound'
// import UseWindowSmall from '../utilityhooks/useWindowSmall'

const Layout1 = (props) => {
  // const isSmallScreen = UseWindowSmall()
  const [layoutWidth, setLayoutWidth] = useState({
    width: 'auto'
  })

  useEffect(() => {
    const handleResize = () => {
      const winWidth = window.innerWidth
      if (winWidth > 768) {
        const winHeight = window.innerHeight
        const layoutWidth = {
          width: `${Math.ceil((winHeight*16)/9)}px`
        }
        setLayoutWidth(layoutWidth)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <div className="layout1" style={layoutWidth}>
      <div className="layout1__button layout1__button--back">
        <ButtonBack />
      </div>
      <div className="layout1__button layout1__button--sound">
        <ButtonSound />
      </div>
      <div>{props.children}</div>
    </div>
  )
}

Layout1.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout1
