import React from 'react'
import PropTypes from 'prop-types'
import {motion} from 'framer-motion'

const ButtonNext = ({onClick}) => {
  const handleClick = () => {
    onClick()
  }

  return (
    <motion.button type="button" className="button-next" whileHover={{ scale: 1.1}} onClick={handleClick}>
      ไปต่อ
    </motion.button>
  )
}

ButtonNext.propTypes = {
  onClick: PropTypes.func
}

ButtonNext.defaultProps = {
  onClick: () => {}
}

export default ButtonNext
