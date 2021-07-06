import React from 'react'
import Content from '../layouts/Content'
import ButtonBack from '../components/ButtonBack'
import ButtonSound from '../components/ButtonSound'
import ButtonNext from '../components/ButtonNext'


const Scene7 = () => {
  return (
    <>
      <ButtonBack />
      <ButtonSound />
      <Content>
        <div className="scene-panel scene7">
          <div className="scene7__content">
            <p className="text-story">ตอนนี้ คุณตกเป็นผู้ต้องสงสัย<br />ในคดีการตายของเพื่อนสนิท</p>
            <div className="scene7__next">
              <ButtonNext />
            </div>
          </div>
        </div>
      </Content>
    </>
  )
}

export default Scene7
