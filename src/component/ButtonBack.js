import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const ButtonBack = ({dark, to, onClick}) => {
  const classStyle = () => {
    return dark ? 'button-back button-back--dark' : 'button-back'
  }

  const handleClick = () => {
    onClick()
  }

  return (
    <>
      {
        to
        ? <Link className={classStyle()} to={to}>
            ย้อนกลับ
          </Link>
        : <button type="button" className={classStyle()} onClick={handleClick}>
            ย้อนกลับ
          </button>
      }
    </>
  )
}

ButtonBack.propTypes = {
  dark: PropTypes.bool,
  path: PropTypes.string,
}

ButtonBack.defaultProps = {
  dark: false,
  path: '',
}

export default ButtonBack
