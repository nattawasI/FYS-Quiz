import React, {useState} from 'react'

const Tab = () => {
  // state
  const [currentActivity, setCurrentActivity] = useState('game')

  // function
  const handleClick = (activity) => {
    setCurrentActivity(activity)
  }

  return (
    <nav className="app-tab">
      <ul className="app-tab__list app-container">
        <li className="app-tab__item">
          <button
            type="button"
            className={`app-tab__button${currentActivity === 'game'? ' active': ''}`}
            onClick={() => handleClick('game')}
          >ชวนเล่นเกม</button>
        </li>
        <li className="app-tab__item">
          <button
            type="button"
            className={`app-tab__button${currentActivity === 'food'? ' active': ''}`}
            onClick={() => handleClick('food')}
          >ชวนกิน</button>
        </li>
        <li className="app-tab__item">
          <button
            type="button"
            className={`app-tab__button${currentActivity === 'exercise'? ' active': ''}`}
            onClick={() => handleClick('exercise')}
          >ชวนออกกำลังกาย</button>
        </li>
      </ul>
    </nav>
  )
}

export default Tab
