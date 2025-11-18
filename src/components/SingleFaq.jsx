import React from 'react'

const SingleFaq = (props) => {
   const {item} = props;
   console.log(item);

  return (
    <div className='bg-dark text-white p-3'>
        <h3>{item.question}</h3>
        <p>{item.answer}</p>
    </div>
  )
}

export default SingleFaq