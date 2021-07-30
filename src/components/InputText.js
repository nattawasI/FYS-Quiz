import React, {forwardRef, useState, useEffect} from 'react'
import PropTypes from 'prop-types'

const Input = forwardRef(({type, placeholder, placeholderError, value, onChange, isError, onlyText}, ref) => {
  // state
  const [inputValue, setInputValue] = useState(value)
  const [error, setError] = useState(isError)
  const [placeholderText, setPlaceholderText] = useState(placeholder)

  const handleChange = (e) => {
    const val = e.target.value
    if (type === 'number') {
      if (Number(val) >= 0) {
        setInputValue(val)
      }
    } else {
      setInputValue(val)
    }

    if (onlyText) {
      const regex = new RegExp('[0-9]')
      const isNumber= regex.test(val)

      if (!isNumber) {
        setInputValue(val)
      } else {
        setInputValue(inputValue + '')
      }
    }

    setError(false)
    onChange(val)
  }

  const classStyle = () => {
    return error ? 'input-text input-text--error' : 'input-text'
  }

  const handleClick = () => {
    ref.current.focus()
  }

  useEffect(() => {
    setError(isError)
  }, [isError])

  return (
    <div className={classStyle()}>
      {
        type === 'text'
        &&  <input
              type="text"
              ref={ref}
              placeholder={placeholderText}
              value={inputValue}
              onChange={handleChange}
              onClick={handleClick}
            />
      }
      {
        type === 'number'
        &&  <input
              type="number"
              ref={ref}
              placeholder={placeholderText}
              min="0"
              max="100"
              value={inputValue}
              onChange={handleChange}
              onClick={handleClick}
            />
      }
    </div>
  )
})

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderError: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  isError: PropTypes.bool,
  onlyText: PropTypes.bool,
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
  placeholderError: '',
  value: '',
  onChange: () => {},
  isError: false,
  onlyText: false
}

export default Input
