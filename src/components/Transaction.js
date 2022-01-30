import Item from './Item'
import './Transaction.css'
import { Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';

const Transaction = (props) => {
  const {items} = props

  return (
    <>
      <Card style={{width: '30rem', textAlign:'center' }}>  
      <ListGroup className='item-list'>
        {items.map((e)=>{
          // return <ListGroupItem> <Item title={e.title} amount={e.amount} /> </ListGroupItem>
          return <ListGroupItem key={uuidv4()} > <Item {...e} key={uuidv4()} /> </ListGroupItem>
        })}
      </ListGroup>
    </Card>
    </>
  );
}

export default Transaction