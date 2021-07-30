import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Facebook from '../assets/images/page/end/ico_facebook.svg'
import Line from '../assets/images/page/end/ico_line.svg'
import Shared from '../assets/images/page/end/ico_shared.svg'
import Twitter from '../assets/images/page/end/ico_twitter.svg'

const ListSocial = () => {
  // state
  const [copied, setCopied] = useState(false)

  // function
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
    <ul className="list-social">
      <li className="list-social__item">
        <button type="button" className="list-social__link">
          <img className="list-social__icon" src={Shared} alt="Shared" />
          {
            copied && <span className="list-social__link-copied">Copied</span>
          }
        </button>
      </li>
      <li className="list-social__item">
        <button type="button" className="list-social__link">
          <img className="list-social__icon" src={Facebook} alt="Facebook" />
        </button>
      </li>
      <li className="list-social__item">
        <button type="button" className="list-social__link">
          <img className="list-social__icon" src={Twitter} alt="Twitter" />
        </button>
      </li>
      <li className="list-social__item">
        <button type="button" className="list-social__link">
          <img className="list-social__icon" src={Line} alt="Line" />
        </button>
      </li>
    </ul>
  )
}

ListSocial.propTypes = {
  data: PropTypes.object,
}

ListSocial.defaultProps = {
  data: {},
}

export default ListSocial
