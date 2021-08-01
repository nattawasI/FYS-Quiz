import React, {forwardRef, useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const Input = forwardRef(({placeholder, value, onChange, onClick, onBlur, isError, onlyText}, ref) => {
  // state
  const [inputValue, setInputValue] = useState()
  const [error, setError] = useState(isError)

  const handleChange = (e) => {
    const val = e.target.value

    if (onlyText) {
      const regex = new RegExp('[0-9]')
      const isNumber = regex.test(val)
      if (!isNumber) {
        setInputValue(val)
      } else {
        setInputValue(inputValue + '')
      }
    } else {
      setInputValue(val)
    }

    setError(false)
    onChange(val)
  }

  const classStyle = () => {
    return error ? 'input-text input-text--error' : 'input-text'
  }

  const handleClick = () => {
    ref.current.focus()
    onClick()
  }

  const handleBlur = () => {
    onBlur()
  }

  useEffect(() => {
    setError(isError)
  }, [isError])

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <div className={classStyle()}>
      <input
        type="text"
        ref={ref}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        onClick={handleClick}
        onBlur={handleBlur}
      />
    </div>
  )
})

Input.propTypes = {
  placeholder: PropTypes.string,
  placeholderError: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  isError: PropTypes.bool,
  onlyText: PropTypes.bool,
}

Input.defaultProps = {
  placeholder: '',
  placeholderError: '',
  value: '',
  onChange: () => {},
  onClick: () => {},
  onBlur: () => {},
  isError: false,
  onlyText: false
}

export default Input
