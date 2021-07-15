import React, {useRef, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {motion} from 'framer-motion'
import { useUserStateContext, useUserActionContext } from '../context/UserContext'
import Button from './Button'
import InputText from './InputText'

// Motion Variants
const containerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.3
    }
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeInOut',
      duration: 0.7
    }
  }
}

const formVariant = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.3,
      delay: 0.3
    }
  }
}

const ModalFormFriend = () => {
  const { friendInfoContext } = useUserStateContext()
  const { addFriendInfoContext } = useUserActionContext()

  const inputRef = useRef(null)
  const history = useHistory()

  const [error, setError] = useState(false)

  const linkToNextPage = () => {
    history.push('/wake-friend-up')
  }

  const getGender = (gender) => {
    const friendName = inputRef.current.value
    if (friendName) {
      addFriendInfoContext({
        name: inputRef.current.value,
        gender: gender
      })
      linkToNextPage()
    } else {
      setError(true)
    }
  }

  const handleChangeInput = () => {
    setError(false)
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <motion.div className="modal-form-friend"
      variants={containerVariant}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <motion.div className="modal-form-friend__form"
        variants={formVariant}
        initial="hidden"
        animate="show"
      >
        <div className="modal-form-friend__input">
          <InputText
            ref={inputRef}
            placeholder="ใส่ชื่อเพื่อนของคุณ"
            value={friendInfoContext.name}
            onChange={ handleChangeInput }
            isError={error}
          />
        </div>
        <p className="modal-form-friend__label text-story">ระบุเพศของเพื่อนคุณ</p>
        <div className="modal-form-friend__button-group">
          <div className="modal-form-friend__button">
            <Button
              color="blue"
              onClick={() => getGender('male')}
            >ชาย</Button>
          </div>
          <div className="modal-form-friend__button">
            <Button
              color="pink"
              onClick={() => getGender('female')}
            >หญิง</Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ModalFormFriend
