import React, {forwardRef, useState} from 'react'
import PropTypes from 'prop-types'

const Input = forwardRef(({placeholder, value, onChange}, ref) => {
  const [inputValue, setInputValue] = useState(value)

  const handleChange = (e) => {
    const val = e.target.value
    setInputValue(val)
    onChange(val)
  }

  return (
    <div className="input-text">
      <input
        type="text"
        ref={ref}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  )
})

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}

Input.defaultProps = {
  placeholder: '',
  value: '',
  onChange: () => {},
}

export default Input
