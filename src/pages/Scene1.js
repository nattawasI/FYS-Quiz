import React from 'react'
import Content from '../layouts/Content'
import ButtonBack from '../components/ButtonBack'
import ButtonSound from '../components/ButtonSound'

const Scene1 = () => {
  return (
    <>
      <ButtonBack />
      <ButtonSound />
      <Content>
        <div className="scene-panel scene1">
        </div>
      </Content>
    </>
  )
}

export default Scene1
