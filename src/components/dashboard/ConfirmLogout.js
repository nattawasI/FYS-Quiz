import React from 'react'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom'
import {useDashboardActionContext} from '../../contexts/DashboardContext'

const ConfirmLogout = ({closeConfirmLogout}) => {
  // router
  const history = useHistory()

  // context
  const {loggedOutContext} = useDashboardActionContext()

  // function
  const handleCancel = () => {
    closeConfirmLogout()
  }

  const handleSubmit = () => {
    closeConfirmLogout()
    loggedOutContext(true)
    history.push('/admin/login')
  }

  return (
    <div className="app-confirm-logout">
      <div className="app-confirm-logout__title">ต้องการออกจากระบบหรือไม่</div>
      <div className="app-confirm-logout__buttons">
        <div className="app-confirm-logout__buttons-item">
          <button
            type="button"
            className="app-button app-button--outline"
            onClick={handleCancel}
          >ยกเลิก</button>
        </div>
        <div className="app-confirm-logout__buttons-item">
          <button
            type="button"
            className="app-button"
            onClick={handleSubmit}
          >ยืนยัน</button>
        </div>
      </div>
    </div>
  )
}

ConfirmLogout.protoTypes = {
  closeConfirmLogout: PropTypes.func.isRequired
}

export default ConfirmLogout
