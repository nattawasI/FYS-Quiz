import React, {useState, useEffect} from 'react'
// import {motion} from 'framer-motion'
import UseWindowSmall from '../utilityhooks/useWindowSmall'
import Content from '../layouts/Content'
import ButtonBack from '../components/ButtonBack'
import ButtonSound from '../components/ButtonSound'
import ButtonNext from '../components/ButtonNext'
import BgDeadManMd from '../image/pages/frienddead/bg_deadman_md.svg'
import BgDeadManSm from '../image/pages/frienddead/bg_deadman_sm.svg'
// import BgDeadWomenMd from '../image/pages/frienddead/bg_deadwomen_md.svg'
// import BgDeadWomenSm from '../image/pages/frienddead/bg_deadwomen_sm.svg'

const FriendDead = () => {
  const isWindowSmall = UseWindowSmall()
  const [bgImage, setBgImage] = useState({})

  useEffect(() => {
    if (isWindowSmall) {
      setBgImage({
        backgroundImage: `url(${BgDeadManSm})`
      })
    } else {
      setBgImage({
        backgroundImage: `url(${BgDeadManMd})`
      })
    }
  }, [isWindowSmall])

  return (
    <>
      <ButtonBack />
      <ButtonSound />
      <Content>
        <div className="scene-panel scene6" style={bgImage}>
          <div className="scene6__content box-story">
            <p className="box-story__text text-story">ทันทีที่ตำรวจมาถึง<br className="sm-show" />ก็สำรวจที่เกิดเหตุทันที<br />แล้วขอเชิญคุณไปสอบสวน</p>
            <div className="box-story__button">
              <ButtonNext />
            </div>
          </div>
        </div>
      </Content>
    </>
  )
}

export default FriendDead
