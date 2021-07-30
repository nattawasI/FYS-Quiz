import React from 'react'
import PropTypes from 'prop-types'

const ButtonSocial = ({data}) => {
  const copyClipboard = () => {
    console.log('copyClipboard');
  }

  const shareFacebook = () => {
    console.log('facebook');
  }

  const shareLine = () => {
    console.log('line');
  }

  const shareTwitter = () => {
    console.log('twitter');
  }

  return (
    <button type="button" className="social__link">
      <img className="social__icon" src={data.icon} alt={data.name} />
    </button>
  )
}

ButtonSocial.propTypes = {
  data: PropTypes.object,
}

ButtonSocial.defaultProps = {
  data: {},
}

export default ButtonSocial
