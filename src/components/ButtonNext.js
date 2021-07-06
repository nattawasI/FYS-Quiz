import React from 'react'
import {motion} from 'framer-motion'

const ButtonNext = () => {
  return (
    <motion.button type="button" className="button-next" whileHover={{ scale: 1.1}}>
      ไปต่อ
    </motion.button>
  )
}

export default ButtonNext
