import React, {useState, useRef, useEffect} from 'react'
import {motion} from 'framer-motion'
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
      duration: 1,
      delay: 0.7
    }
  }
}

const ModalFormFriend = () => {
  const inputRef = useRef(null)

  const inputFriendName = (val) => {
    console.log(val);
  }

  const getGender = (gender) => {
    console.log(gender);
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <motion.div className="modal-form-friend"
      variants={containerVariant}
      initial="hidden"
      animate="show"
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
            onChange={inputFriendName}
          />
        </div>
        <p className="modal-form-friend__label text-story">ระบุเพศของเพื่อนคุณ</p>
        <div className="modal-form-friend__button-group">
          <div className="modal-form-friend__button">
            <Button
              color="blue"
              onClick={() => getGender('ชาย')}
            >ชาย</Button>
          </div>
          <div className="modal-form-friend__button">
            <Button
              color="pink"
              onClick={() => getGender('หญิง')}
            >หญิง</Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default ModalFormFriend
