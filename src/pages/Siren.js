import React, {useEffect, useState} from 'react'
// import {motion} from 'framer-motion'
import UseWindowSmall from '../utilityhooks/useWindowSmall'
import Content from '../layouts/Content'
import ButtonBack from '../components/ButtonBack'
import ButtonSound from '../components/ButtonSound'
import ButtonNext from '../components/ButtonNext'
import BgSirenMd from '../image/pages/siren/bg_siren_md.svg'
import BgSirenMdOn from '../image/pages/siren/bg_siren_md_on.svg'
import BgSirenSm from '../image/pages/siren/bg_siren_sm.svg'
import BgSirenSmOn from '../image/pages/siren/bg_siren_sm_on.svg'

const Siren = () => {
  const isWindowSmall = UseWindowSmall()
  const [bgStyle, setBgStyle] = useState({})

  useEffect(() => {
    const backgrounds = isWindowSmall
    ? { bg1: BgSirenSm, bg2: BgSirenSmOn }
    : { bg1: BgSirenMd, bg2: BgSirenMdOn }

    let currentBG = 'bg1'
    const interval = setInterval(() => {
      if (currentBG === 'bg1') {
        setBgStyle({
          backgroundImage: `url(${backgrounds.bg1})`
        })
        currentBG = 'bg2'
      } else {
        setBgStyle({
          backgroundImage: `url(${backgrounds.bg2})`
        })
        currentBG = 'bg1'
      }
    }, 500)

    return () => clearInterval(interval)
  }, [isWindowSmall])

  return (
    <>
      <ButtonBack />
      <ButtonSound />
      <Content>
        <div className="scene-panel siren" style={bgStyle}>
          <div className="siren__content box-story">
            <p className="box-story__text text-story">ตอนนี้ คุณตกเป็นผู้ต้องสงสัย<br />ในคดีการตายของเพื่อนสนิท</p>
            <div className="box-story__button">
              <ButtonNext />
            </div>
          </div>
        </div>
      </Content>
    </>
  )
}

export default Siren
