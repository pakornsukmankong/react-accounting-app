import React from 'react';
import {} from 'react-bootstrap'
import './FooterComponent.css'

const FormComponent = () => {
  return (
    <>
      <div className='footer'>
        <p>Copyright &copy;{new Date().getFullYear()} Pakorn Sukmankong</p>
      </div>
    </>
  );
}

export default FormComponent
