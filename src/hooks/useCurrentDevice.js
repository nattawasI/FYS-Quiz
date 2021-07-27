import { useState, useEffect } from 'react'

const useCurrentDevice = () => {
  const sm = 768
  const md = 1024
  const [currentDevice, setCurrentDevice] = useState('')

  const checkScreenSize = () => {
    if (window.matchMedia(`(min-width: ${md + 1}px)`).matches) {
      setCurrentDevice('desktop')
    } else if (window.matchMedia(`(min-width: ${sm}px)`).matches && window.matchMedia(`(max-width: ${md}px)`).matches) {
      setCurrentDevice('tablet')
    } else {
      setCurrentDevice('smartphone')
    }
  }

  useEffect(() => {
    checkScreenSize()

    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return currentDevice
}

export default useCurrentDevice
