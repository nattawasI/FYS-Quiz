import React from 'react'
import PropTypes from 'prop-types'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

const ButtonNext = ({path, onClick, dark}) => {
  const classStyle = () => {
    return dark ? 'button-next button-next--dark' : 'button-next'
  }

  const handleClick = () => {
    onClick()
  }

  return (
    <>
      {
        path
        ? <Link className={classStyle()} to={path}>
            ไปต่อ
          </Link>
        : <motion.button type="button" className={classStyle()} whileHover={{ scale: 1.1}} onClick={handleClick}>
            ไปต่อ
          </motion.button>
      }
    </>
  )
}

ButtonNext.propTypes = {
  path: PropTypes.string,
  onClick: PropTypes.func,
  dark: PropTypes.bool
}

ButtonNext.defaultProps = {
  path: '',
  onClick: () => {},
  dark: false
}

export default ButtonNext
