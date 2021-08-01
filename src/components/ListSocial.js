import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types'
import {useUserStateContext} from '../contexts/UserContext'
import Facebook from '../assets/images/page/end/ico_facebook.svg'
import Line from '../assets/images/page/end/ico_line.svg'
import Shared from '../assets/images/page/end/ico_shared.svg'

const ListSocial = () => {
  const {friendInfoContext} = useUserStateContext()

  const urlSite = 'https://foryoursweetheart.org/ฆาตกรบนโต๊ะอาหาร/TH/' // use for copy link

  // use for sharing on Social media
  const urlShare = encodeURIComponent(`https://foryoursweetheart.org/ฆาตกรบนโต๊ะอาหาร/${friendInfoContext.gender === 'female'? 'female/': ''}TH/index.html`)

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
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${urlShare}&hashtag=%23ฆาตกรบนโต๊ะอาหาร`, 'fbShareWindow')

    // add function count at here...
  }

  const shareLine = () => {
    // add function count at here...
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
          <a href={`https://social-plugins.line.me/lineit/share?url=${urlShare}`} className="list-social__link" target="_blank" rel="noreferrer" onClick={shareLine}>
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
