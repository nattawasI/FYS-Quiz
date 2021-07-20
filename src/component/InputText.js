import React, {forwardRef, useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const Input = forwardRef(({type, placeholder, value, onChange, isError}, ref) => {
  const [inputValue, setInputValue] = useState(value)
  const [error, setError] = useState(isError)

  const handleChange = (e) => {
    const val = e.target.value
    setInputValue(val)
    setError(false)
    onChange(val)
  }

  const classStyle = () => {
    return error ? 'input-text input-text--error' : 'input-text'
  }

  useEffect(() => {
    setError(isError)
  }, [isError])

  return (
    <div className={classStyle()}>
      <input
        type={type}
        ref={ref}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  )
})

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  isError: PropTypes.bool
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  value: '',
  onChange: () => {},
  isError: false
}

export default Input
