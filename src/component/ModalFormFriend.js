import React, {useState, useRef, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {motion} from 'framer-motion'
import { useUserActionContext } from '../context/UserContext'
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
  },
  exit: {
    opacity: 0,
    transition: {
      ease: 'easeInOut',
      duration: 1
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
  const { addFriendInfoContext, addName } = useUserActionContext()

  const inputRef = useRef(null)
  const history = useHistory()

  const [info, setInfo] = useState({
    name: '',
    gender: 'ชาย'
  })

  const changeFriendName = (val) => {
    console.log(val);
    addName(val)
    // setInfo({...info, ...{ name: val }})
  }

  const linkToNextPage = () => {
    history.push('/wake-friend-up')
  }

  const getGender = (gender) => {
    // setInfo({...info, ...{ gender: gender }})
    linkToNextPage()
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
            onChange={changeFriendName}
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
