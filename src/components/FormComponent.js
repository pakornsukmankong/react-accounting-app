import React, { useState,useEffect } from 'react';
import { Form, Button } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';
import './FormComponent.css'

const FormComponent = (props) => {
  const [title,setTitle] = useState('')
  const [amount,setAmount] = useState(0)

  const [formValid,setFormValid] = useState(false)

  const inputTitle = (event) => {
    setTitle(event.target.value)
  } 

  const inputAmount = (event) => {
    setAmount(event.target.value)
  }

  const saveItem = (event) => {
    event.preventDefault()
    const dataItem = 
      {
        id:uuidv4(),
        title:title,
        amount:Number(amount)
      }
    props.addData(dataItem)
    setTitle('')
    setAmount(0)
  }

  useEffect(() => {
    const dataCheck = title !== '' && amount !== 0
    if (dataCheck) {
      setFormValid(true)
    }else {
      setFormValid(false)
    }
  },[title,amount])

  return (
    <>
    <Form onSubmit={saveItem}>
      <Form.Label className='formLabel'>ชื่อรายการ</Form.Label>
      <Form.Control type="text" placeholder="กรอกข้อมูลรายการ" onChange={inputTitle} value={title}/>
      <Form.Label className='formLabel'>จำนวนเงิน</Form.Label>
      <Form.Control className='formControl' type="number" placeholder="+ รายรับ , - รายจ่าย" onChange={inputAmount} value={amount}/>
      <Button type="submit" variant="primary" disabled={!formValid} >เพิ่มรายการ</Button>    
    </Form>
    </>
  );
}

export default FormComponent