import { useContext } from "react"
import { Card,} from "react-bootstrap"
import DataContext from "../data/DataContext"
import './ReportComponent.css'

const ReportComponent = () => {
  const {income,expense} = useContext(DataContext)
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } 
  return (
  <>
    <div className="remain">
    <Card body className="remain_card">ยอดคงเหลือ (บาท) <p className="p_remain">฿{formatNumber((income - expense).toFixed(2))}</p></Card>
    </div>
    <div className="list_group">
      <Card body className="list">รายได้ทั้งหมด <p className="p_income">฿{formatNumber(income)}</p></Card>
      <Card body className="list">รายจ่ายทั้งหมด <p className="p_expense">฿{formatNumber(expense)}</p></Card>
    </div>
  </>
  )
}

export default ReportComponent