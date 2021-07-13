import React from 'react'
import Content from '../layout/Content'
import ButtonBack from '../component/ButtonBack'
import ButtonSound from '../component/ButtonSound'

const Scene1 = () => {
  return (
    <>
      <ButtonBack />
      <ButtonSound />
      <Content>
        <div className="scene-panel scene1">
          Start Coding at here...
        </div>
      </Content>
    </>
  )
}

export default Scene1
