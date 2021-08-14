import React from 'react'

const ConfirmLogout = () => {
  return (
    <div className="app-confirm-logout">
      <div className="app-confirm-logout__title">ต้องการออกจากระบบหรือไม่</div>
      <div className="app-confirm-logout__buttons">
        <div className="app-confirm-logout__buttons-item">
          <button type="button" className="app-button app-button--outline">ยกเลิก</button>
        </div>
        <div className="app-confirm-logout__buttons-item">
          <button type="button" className="app-button">ยืนยัน</button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmLogout
