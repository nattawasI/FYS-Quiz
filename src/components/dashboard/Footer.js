import React, {useState, useEffect} from 'react'

const Footer = () => {
  // variables
  const allPages = 5

  // state
  const [currentPage, setCurrentPage] = useState(1)
  const [prevDisabled, setPrevDisabled] = useState(false)
  const [nextDisabled, setNextDisabled] = useState(false)

  // function
  const handleClickPrev = () => {
    setCurrentPage(currentPage - 1)
  }

  const handleClickNext = () => {
    setCurrentPage(currentPage + 1)
  }

  useEffect(() => {
    if (currentPage === 1) {
      setPrevDisabled(true)
      setNextDisabled(false)
    } else if (currentPage === allPages) {
      setNextDisabled(true)
    } else {
      setPrevDisabled(false)
    }
  }, [currentPage])

  return (
    <div className="app-footer app-container">
      <div className="app-footer__number-items">1-15 of 75</div>
      <div className="app-footer__pagination">
        <div className="app-pagination">
          <span className="app-pagination__page">{currentPage}/{allPages}</span>
          <button
            type="button"
            className={`app-pagination__button${prevDisabled? ' app-pagination__button--disabled': '' }`}
            disabled={prevDisabled}
            onClick={handleClickPrev}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#8898AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M13.26 15.53L9.73999 12L13.26 8.46997" stroke="#8898AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <button
            type="button"
            className={`app-pagination__button${nextDisabled? ' app-pagination__button--disabled': '' }`}
            disabled={nextDisabled}
            onClick={handleClickNext}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#8898AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.74 15.53L14.26 12L10.74 8.46997" stroke="#8898AA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer
