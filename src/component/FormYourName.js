import React, {useRef, useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {motion} from 'framer-motion'
import {useUserStateContext, useUserActionContext} from '../context/UserContext'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import ButtonNext from './ButtonNext'
import InputText from './InputText'

const FormYourName = ({changeScene}) => {
  const isWindowSmall = UseWindowSmall()

  // context
  const {userNameContext} = useUserStateContext()
  const {addUserNameContext} = useUserActionContext()

  // ref
  const inputRef = useRef(null)

  // state
  const [error, setError] = useState(false)

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
        duration: 0.7,
        delay: userNameContext ? 0: 1
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
        duration: 0.7,
        delay: userNameContext ? 0.7: 1.5
      }
    },
  }


  const submitForm = (e) => {
    e.preventDefault()
    const inputValue = inputRef.current.value

    if (inputValue) {
      addUserNameContext(inputValue)
      changeScene()
    } else {
      setError(true)
    }
  }

  useEffect(() => {
    if (!isWindowSmall) {
      inputRef.current.focus()
    }
  }, [isWindowSmall])

  return (
    <div className="form-your-name">
      <form onSubmit={submitForm}>
        <motion.div className="form-your-name__form"
          variants={formVariant}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <div className="form-your-name__label text-story">สวัสดีครับคุณ?</div>
          <div className="form-your-name__input">
            <InputText
              ref={inputRef}
              value={userNameContext}
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
          <ButtonNext onClick={submitForm} />
        </motion.div>
      </form>
    </div>
  )
}

FormYourName.propTypes = {
  changeScene: PropTypes.func,
}

FormYourName.defaultProps = {
  changeScene: () => {},
}

export default FormYourName
