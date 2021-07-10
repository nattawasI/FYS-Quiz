import React from 'react'
import {motion} from 'framer-motion'
import UseWindowSmall from '../utilityhooks/useWindowSmall'
import Content from '../layouts/Content'
import ButtonSound from '../components/ButtonSound'
import ButtonNext from '../components/ButtonNext'
// import BgSirenMd from '../image/pages/siren/bg_siren_md.svg'
// import BgSirenMdOn from '../image/pages/siren/bg_siren_md_on.svg'
// import BgSirenSm from '../image/pages/siren/bg_siren_sm.svg'
// import BgSirenSmOn from '../image/pages/siren/bg_siren_sm_on.svg'

// Motion Variants
const bgVariants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      delay: 0.5,
      duration: 2
    }
  }
}

const textVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      delay: 0.5,
      duration: 1
    }
  }
}

const buttonVariants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      delay: 1.5,
      duration: 1
    }
  }
}

const Siren = () => {
  const isWindowSmall = UseWindowSmall()
  // const [bgStyle, setBgStyle] = useState({})

  // useEffect(() => {
  //   const backgrounds = isWindowSmall
  //   ? { bg1: BgSirenSm, bg2: BgSirenSmOn }
  //   : { bg1: BgSirenMd, bg2: BgSirenMdOn }
  //   let currentBG = 'bg1'

  //   const changeBG = () => {
  //     if (currentBG === 'bg1') {
  //       setBgStyle({
  //         backgroundImage: `url(${backgrounds.bg1})`
  //       })
  //       currentBG = 'bg2'
  //     } else {
  //       setBgStyle({
  //         backgroundImage: `url(${backgrounds.bg2})`
  //       })
  //       currentBG = 'bg1'
  //     }
  //   }

  //   let interval = setInterval(changeBG, 500)

  //   return () => clearInterval(interval)
  // }, [isWindowSmall])

  return (
    <>
      <ButtonSound />
      <Content>
        <div className="scene-panel siren">
          <motion.div className="siren__background"
            // style={bgStyle}
            variants={bgVariants}
            initial="hidden"
            animate="show"
          ></motion.div>
          <div className="siren__content box-story">
            <motion.p className="box-story__text text-story"
            variants={textVariants}
            initial="hidden"
            animate="show"
            >ตอนนี้ คุณตกเป็นผู้ต้องสงสัย<br />ในคดีการตายของเพื่อนสนิท</motion.p>
            {
              !isWindowSmall
              && <motion.div className="box-story__button"
                  variants={buttonVariants}
                  initial="hidden"
                  animate="show"
                >
                  <ButtonNext />
                </motion.div>
            }
          </div>
        </div>
      </Content>
    </>
  )
}

export default Siren
