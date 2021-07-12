import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
// import UseWindowSmall from '../utilityhooks/useWindowSmall'
import Content from '../layouts/Content'
import ButtonSound from '../components/ButtonSound'

const Start = () => {
  return (
    <>
      <ButtonSound />
      <Content>
        <div className="scene-panel start">
          <div className="start__content box-story">
            <motion.p className="box-story__text text-story"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ x: '-100vw' }}
              transition={{ duration: 3, type: 'tween' }}
            >หน้าแรก</motion.p>
            <Link to='/preface'>เริ่ม</Link>
          </div>
        </div>
      </Content>
    </>
  )
}

export default Start