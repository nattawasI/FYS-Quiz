import React, {useRef, useState} from 'react'
import PropTypes from 'prop-types'
import {motion, AnimatePresence} from 'framer-motion'
import { useUserStateContext, useUserActionContext } from '../context/UserContext'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import ButtonNext from './ButtonNext'
import InputText from './InputText'

// Motion Variants
const formVariant = {
  hidden: {
    opacity: 0,
    y: 70
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeInOut',
      delay: 1,
      duration: 0.7
    },
  },
}

const buttonVariant = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      delay: 1.5,
      duration: 0.7
    }
  },
}

const FormYourName = ({changeScene}) => {
  // context
  const {addUserNameContext} = useUserActionContext()

  // utility hook
  const isWindowSmall = UseWindowSmall()

  // ref
  const inputRef = useRef(null)

  // state
  const [error, setError] = useState(false)

  const handleClick = () => {
    const inputValue = inputRef.current.value

    if (inputValue) {
      addUserNameContext(inputValue)
      changeScene()
    } else {
      setError(true)
    }
  }

  return (
    <AnimatePresence>
      <div className="form-your-name">
        <motion.div className="form-your-name__form"
          variants={formVariant}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <div className="form-your-name__label text-story">สวัสดีครับคุณ</div>
          <div className="form-your-name__input">
            <InputText
              ref={inputRef}
              isError={error}
              placeholder="ชื่อตัวเอง"
            />
          </div>
        </motion.div>
        <motion.div className="form-your-name__button"
          variants={buttonVariant}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <ButtonNext onClick={handleClick} />
        </motion.div>
      </div>
    </AnimatePresence>
  )
}

FormYourName.propTypes = {
  changeScene: PropTypes.func,
}

FormYourName.defaultProps = {
  changeScene: () => {},
}

export default FormYourName
