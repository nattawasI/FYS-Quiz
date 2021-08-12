import React from 'react'

const TableHead = () => {
  return (
    <thead className="app-table-head">
      <tr className="app-table-head__row">
        <th className="app-table-head__th">วันที่เข้าร่วม</th>
        <th className="app-table-head__th">ชื่อเพื่อน</th>
        <th className="app-table-head__th">เพศเพื่อน</th>
        <th className="app-table-head__th">ชื่อผู้เล่น</th>
        <th className="app-table-head__th">เพศผู้เล่น</th>
        <th className="app-table-head__th">คุณกับเพื่อนเล่นเกมส์ดึกแค่ไหน</th>
        <th className="app-table-head__th">มีของกินระหว่างเล่นทุกครั้งด้วยหรือเปล่า</th>
        <th className="app-table-head__th">สนิทมากี่ปี</th>
        <th className="app-table-head__th">กิจกรรมล่าสุด</th>
        <th className="app-table-head__th">รู้ไหม"โรคเบาหวาน"เกิดจากอะไร</th>
        <th className="app-table-head__th">มีอาการเป็นอย่างไร</th>
        <th className="app-table-head__th">ความเสี่ยง</th>
      </tr>
    </thead>
  )
}

export default TableHead
