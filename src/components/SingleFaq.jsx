import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const SingleFaq = (props) => {
   const {item} = props;
   //console.log(item);

   const [toggle, setToggle] = useState(false);

  return (
    <div className='bg-dark text-white p-3'>
        <Button 
          onClick={() => setToggle(!toggle)}
          size="sm" 
          className='text-start'>
          {toggle? '-' : '+'}
        </Button>
        <h3>{item.question}</h3>
        {toggle && <p>{item.answer}</p>}
    </div>
  )
}

export default SingleFaq