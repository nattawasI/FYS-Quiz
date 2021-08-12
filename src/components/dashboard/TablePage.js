import React from 'react'
import Tab from './Tab'
import Table from './Table'
import Footer from './Footer'

const TablePage = () => {
  return (
    <div className="app-table-page">
      <div className="app-table-page__tab">
        <Tab />
      </div>
      <div className="app-table-page__content app-container">
        <Table />
      </div>
      <div className="app-table-page__footer">
        <Footer />
      </div>
    </div>
  )
}

export default TablePage