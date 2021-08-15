import React from 'react'
import {useDashboardStateContext} from '../../contexts/DashboardContext'

const TableHead = () => {
  // context
  const {activeTabContext} = useDashboardStateContext()

  // function
  const renderListQuiz = () => {
    let listQuiz = []
    if (activeTabContext === 'game') {
      listQuiz = ['คุณกับเพื่อนเล่นเกมส์ดึกแค่ไหน?', 'มีของกินระหว่างเล่นทุกครั้งด้วยหรือเปล่า?']
    } else if (activeTabContext === 'food') {
      listQuiz = ['พากันกินอะไรบ่อยที่สุด?', 'คุณกับเพื่อนพากันกินบ่อยแค่ไหน?', 'กินอิ่มแล้วไปไหน?']
    } else {
      listQuiz = ['ออกกำลังกายบ่อยแค่ไหน?', 'หลังจากออกกำลังกายแล้วไปไหนต่อ?']
    }

    return listQuiz.map((quiz, index) => <th className="app-table-head__th" key={`quiz-${index}`}>{quiz}</th>)
  }

  return (
    <thead className="app-table-head">
      <tr className="app-table-head__row">
        <th className="app-table-head__th">วันที่เข้าร่วม</th>
        <th className="app-table-head__th">ชื่อเพื่อน</th>
        <th className="app-table-head__th">เพศเพื่อน</th>
        <th className="app-table-head__th">ชื่อผู้เล่น</th>
        <th className="app-table-head__th">เพศผู้เล่น</th>
        {
          renderListQuiz()
        }
        <th className="app-table-head__th">สนิทมากี่ปี?</th>
        <th className="app-table-head__th">กิจกรรมล่าสุด</th>
        <th className="app-table-head__th">รู้ไหม"โรคเบาหวาน"เกิดจากอะไร?</th>
        <th className="app-table-head__th">มีอาการเป็นอย่างไร?</th>
        <th className="app-table-head__th">ความเสี่ยง</th>
      </tr>
    </thead>
  )
}

export default TableHead
