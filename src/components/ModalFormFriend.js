import React, {useRef, useState} from 'react'
import {useRouteActionContext} from '../contexts/RouteContext'
import {motion} from 'framer-motion'
import {useUserStateContext, useUserActionContext} from '../contexts/UserContext'
import InputText from './InputText'
import Button from './Button'

// Motion Variants
const containerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.7
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
  const {friendInfoContext} = useUserStateContext()
  const {addFriendInfoContext} = useUserActionContext()
  const {changeCurrentPageContext} = useRouteActionContext()

  const inputRef = useRef(null)

  const [error, setError] = useState(false)

  const goToNextPage = () => {
    changeCurrentPageContext('WakeFriendUp')
  }

  const getGender = (gender) => {
    const friendName = inputRef.current.value
    if (friendName) {
      addFriendInfoContext({
        name: inputRef.current.value,
        gender: gender
      })
      goToNextPage()
    } else {
      setError(true)
    }
  }

  const handleChangeInput = () => {
    setError(false)
  }

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
        <ul className="modal-form-friend__gender list-gender-button">
          <li className="list-gender-button__item">
            <Button
              color="blue"
              onClick={() => getGender('male')}
            >ชาย</Button>
          </li>
          <div className="list-gender-button__item">
            <Button
              color="pink"
              onClick={() => getGender('female')}
            >หญิง</Button>
          </div>
        </ul>
      </motion.div>
    </motion.div>
  )
}

export default ModalFormFriend
