import React, {useState} from 'react'
// import {motion} from 'framer-motion'
import Content from '../layouts/Content'
import ButtonBack from '../components/ButtonBack'
import ButtonSound from '../components/ButtonSound'
import ButtonNext from '../components/ButtonNext'
import BgDeadManMd from '../image/scene/scene6/bg_deadman_md.svg'
import BgDeadManSm from '../image/scene/scene6/bg_deadman_sm.svg'
import BgDeadWomenMd from '../image/scene/scene6/bg_deadwomen_md.svg'
import BgDeadWomenSm from '../image/scene/scene6/bg_deadwomen_sm.svg'

const FriendDead = () => {
  const [bg, setBg] = useState({})
  return (
    <>
      <ButtonBack />
      <ButtonSound />
      <Content>
        <div className="scene-panel scene6">
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
