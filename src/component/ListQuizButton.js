import React from 'react'
import UseWindowSmall from '../utilityhook/useWindowSmall'
import Button from './Button'

const ListQuizButton = () => {
  const isWindowSmall = UseWindowSmall()

  return (
    <Button className="list-quiz__button">AAAA</Button>
  )
}

export default ListQuizButton
