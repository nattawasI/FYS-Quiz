import React from 'react'
// import {motion} from 'framer-motion'
import Content from '../layouts/Content'
import ButtonBack from '../components/ButtonBack'
import ButtonSound from '../components/ButtonSound'
import ButtonNext from '../components/ButtonNext'
import IconCall from '../image/pages/callpolice/icon_call.svg'

const CallPolice = () => {


  return (
    <>
      <ButtonBack />
      <ButtonSound />
      <Content>
        <div className="scene-panel callpolice">
          <div className="callpolice__content box-story">
            <p className="box-story__text text-story">คุณตกใจมาก โวยวายเสียงดัง!<br />แล้วรีบหยิบมือถือ โทรแจ้งตำรวจทันที</p>
            <div className="box-story__button">
              <button type="button" className="button-call">
                <img src={IconCall} alt="Call Button" />
              </button>
            </div>
          </div>
        </div>
      </Content>
    </>
  )
}

export default CallPolice
