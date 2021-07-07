import React from 'react'
// import {motion} from 'framer-motion'
import Content from '../layouts/Content'
import ButtonBack from '../components/ButtonBack'
import ButtonSound from '../components/ButtonSound'
import ButtonNext from '../components/ButtonNext'


const Siren = () => {
  return (
    <>
      <ButtonBack />
      <ButtonSound />
      <Content>
        <div className="scene-panel siren">
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
