import React, { useEffect, useState } from 'react';
import './App.css'
//import { v4 as uuidv4 } from 'uuid';
import Transaction from './components/Transaction'
import FormComponent from './components/FormComponent';
import FooterComponent from './components/FooterComponent'
import {Card} from 'react-bootstrap'
import DataContext from './data/DataContext';
import ReportComponent from './components/ReportComponent';
import {BrowserRouter as Router,Link,Routes,Route} from 'react-router-dom'


function App() {
  // const initData = [
  //   {id:uuidv4(),title:"ลบ",amount:-15000},
  //   {id:uuidv4(),title:"บวก",amount:5000},
  // ]

  const [items,setItems] = useState([])

  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)

  const addNewData = (newItem) => {
    setItems((prevData) => {
      return [newItem,...prevData]
    })
    console.log("new data = ",items)
  }

  useEffect(()=>{
    const amounts = items.map(e=>e.amount)
    const allIncome = amounts.filter(e=>e>0)
    const allExpense = amounts.filter(e=>e<0)

    const totalIncome = allIncome.reduce((value,e)=>{
      return value+e
    },0)
    setReportIncome(totalIncome.toFixed(2))

    const totalExpense = allExpense.reduce((value,e)=>{
      return value+e
    },0)
    setReportExpense(Math.abs(totalExpense).toFixed(2))

  },[items,reportIncome,reportExpense])


  return (
    <DataContext.Provider value={
      {
        income : reportIncome,
        expense : reportExpense
      }
    }>
      <Card style={{width: '30rem', textAlign:'center' }}>
      <Card.Header><h3>แอพบัญชีรายรับ - รายจ่าย</h3></Card.Header>
      </Card>

      <Router>
        <div className='link-container'>
          <ul>
            <li>
              <Link to ='/' >ข้อมูลบัญชี</Link>
            </li>
            <li >
              <Link to ='/insert' >บันทึกข้อมูล</Link>
            </li>
          </ul>
        </div>
          <Routes>
            <Route path='/' element={<ReportComponent/>}/>
            <Route path='/insert' element={<> <FormComponent addData = {addNewData} /> <Transaction items = {items} /> </>}/>
          </Routes>
        
      </Router>
      
      <FooterComponent/>
    </DataContext.Provider>
  );
}

export default App;
