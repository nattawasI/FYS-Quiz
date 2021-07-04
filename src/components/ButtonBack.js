import React from 'react'
import IconBack from '../image/icon/icon_back.svg'

const ButtonBack = () => {
  return (
    <button type="button" className="button-back">
      <img src={IconBack} className="button-back__icon" alt="ย้อนกลับ" />
      <span className="button-back__text">ย้อนกลับ</span>
    </button>
  )
}
export default ButtonBack
