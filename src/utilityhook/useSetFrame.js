import { useState, useEffect } from 'react'
import UseWindowSmall from './useWindowSmall'

const UseSetFrame = () => {
  const isWindowSmall = UseWindowSmall()
  const [layoutWidth, setLayoutWidth] = useState({})

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth
      const windowHeight = window.innerHeight

      if (isWindowSmall) { // Smartphone' frame
        const frameStyle = {}
        frameStyle.width = '100%'
        setLayoutWidth(frameStyle)
        // const frameWidth = Math.floor((windowHeight*9)/16)
        // const frameLeft = (windowWidth - frameWidth)/2
        // frameStyle.width = `${frameWidth}px`
        // frameStyle.transform = `translateX(${frameLeft}px)`
      } else { // Desktop' frame
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
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isWindowSmall])

  return layoutWidth
}

export default UseSetFrame
