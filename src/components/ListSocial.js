import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import {useUserStateContext} from '../contexts/UserContext'
import Facebook from '../assets/images/page/end/ico_facebook.svg'
import Line from '../assets/images/page/end/ico_line.svg'
import Shared from '../assets/images/page/end/ico_shared.svg'
import Twitter from '../assets/images/page/end/ico_twitter.svg'

const ListSocial = () => {
  const {friendInfoContext} = useUserStateContext()
  friendInfoContext.gender = 'female'

  // const urlSite = 'https://foryoursweetheart.org/ฆาตกรบนโต๊ะอาหาร/TH/index.html'
  const urlSite = window.location.href
  const genderIndex = friendInfoContext.gender === 'female'? '/index_female.html':'/index.html'

  // ref
  const inputRef = useRef(null)

  // state
  const [copied, setCopied] = useState(false)
  const [readOnly, setReadOnly] = useState(true)

  // function
  const copyClipboard = () => {
    setReadOnly(false)
    inputRef.current.select()
    inputRef.current.setSelectionRange(0, 99999)
    document.execCommand('copy')
    setCopied(true)

    setTimeout(() => {
      setCopied(false)
      setReadOnly(true)
    }, 500)
  }

  const shareFacebook = () => {
    const urlShare = encodeURIComponent(urlSite)
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${urlShare}${genderIndex}&hashtag=%23ฆาตกรบนโต๊ะอาหาร`, 'fbShareWindow')
  }

  // const shareLine = () => {
  //   console.log('line')
  // }

  const shareTwitter = () => {
    const urlShare = encodeURIComponent(urlSite)
    window.open(`https://twitter.com/intent/tweet?hashtags=ความจริงมีเพียงหนึ่งเดียว,ฆาตกรบนโต๊ะอาหาร,ForYourSweetheart&url=${urlShare}${genderIndex}`, 'twShareWindow')
  }

  return (
    <div className="list-social">
      <ul className="list-social__list">
        <li className="list-social__item">
          <button type="button" className="list-social__link" onClick={copyClipboard}>
            <img className="list-social__icon" src={Shared} alt="Shared" />
            {
              copied && <span className="list-social__link-copied">Copied</span>
            }
          </button>
        </li>
        <li className="list-social__item">
          <button type="button" className="list-social__link" onClick={shareFacebook}>
            <img className="list-social__icon" src={Facebook} alt="Facebook" />
          </button>
        </li>
        <li className="list-social__item">
          <button type="button" className="list-social__link" onClick={shareTwitter}>
            <img className="list-social__icon" src={Twitter} alt="Twitter" />
          </button>
        </li>
        <li className="list-social__item">
          <a href={`https://social-plugins.line.me/lineit/share?url=${urlSite}${genderIndex}`} className="list-social__link" target="_blank" rel="noreferrer">
            <img className="list-social__icon" src={Line} alt="Line" />
          </a>
        </li>
      </ul>
      <input ref={inputRef} type="text" className="list-social__input" value={urlSite} readOnly={readOnly} />
    </div>
  )
}

ListSocial.propTypes = {
  data: PropTypes.object,
}

ListSocial.defaultProps = {
  data: {},
}

export default ListSocial
