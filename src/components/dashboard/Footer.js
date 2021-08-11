import React from 'react'
import IconArrowPrev from '../../assets/images/icon/icon_arrow_prev.svg'
import IconArrowNext from '../../assets/images/icon/icon_arrow_next.svg'

const Footer = () => {
  // function
  const handleClickPrev = () => {
    console.log('Prev');
  }

  const handleClickNext = () => {
    console.log('Next');
  }

  return (
    <div className="app-footer">
      <div className="app-footer__number-items">1-13 of 234</div>
      <div className="app-footer__pagination">
        <div className="app-pagination">
          <span className="app-pagination__page">1</span>
          <button type="button" className="app-pagination__button" onClick={handleClickPrev}>
            <img src={IconArrowPrev} alt="ย้อนกลับ" />
          </button>
          <button type="button" className="app-pagination__button" onClick={handleClickNext}>
            <img src={IconArrowNext} alt="ไปต่อ" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer
