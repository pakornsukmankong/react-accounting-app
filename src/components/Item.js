import PropTypes from 'prop-types';
import './Item.css'

const Item = (props) =>{
  const {title,amount} = props
  const status = amount<0 ?"expense" :"income"
  const symbol = amount<0 ?"-" :"+"

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  } 

  return (
    <>  
        <li className={status}>
          {title} <span>{symbol}{formatNumber(Math.abs(amount).toFixed(2))}</span>
        </li>      
    </>
  );
}

//check type
Item.propTypes={
  title:PropTypes.string.isRequired,
  amount:PropTypes.number.isRequired
}

export default Item