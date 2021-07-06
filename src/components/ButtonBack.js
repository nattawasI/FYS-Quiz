import React from 'react'
import PropTypes from 'prop-types'
import {motion} from 'framer-motion'

const ButtonBack = ({color}) => {
  const classButton = () => {
    if (color === 'white') {
      return 'button-back'
    } else if (color === 'black'){
      return 'button-back button-back--black'
    }
  }

  return (
    <motion.button type="button" className={classButton()} whileHover={{ scale: 1.1}}>
      ย้อนกลับ
    </motion.button>
  )
}

ButtonBack.propTypes = {
  color: PropTypes.string
}

ButtonBack.defaultProps = {
  color: 'white' // set color="black" if you want to change to black theme
}

export default ButtonBack
