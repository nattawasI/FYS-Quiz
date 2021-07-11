import React from 'react'
import PropTypes from 'prop-types'
import {motion} from 'framer-motion'

const ButtonBack = ({dark}) => {
  const classStyle = () => {
    return dark ? 'button-back button-back--dark' : 'button-dark'
  }

  return (
    <motion.button type="button" className={classStyle()} whileHover={{ scale: 1.1}}>
      ย้อนกลับ
    </motion.button>
  )
}

ButtonBack.propTypes = {
  dark: PropTypes.bool
}

ButtonBack.defaultProps = {
  dark: false
}

export default ButtonBack
