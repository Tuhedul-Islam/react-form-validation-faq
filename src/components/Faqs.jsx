import React from 'react'
import FaqData from '../jsonData/FaqData.json'
import SingleFaq from './SingleFaq'

const Faqs = () => {
  //console.log(FaqData);

  return (
    <div className='mt-5 border bg-light p-3'>
        <u><h2 className='mb-5'>Faq</h2></u>

        {
            Array.isArray(FaqData) ? ( 
                FaqData.map((item) => (
                    <ul key={item.id}>
                        <SingleFaq item={item} />
                    </ul>
                ))

            ): (
                <p>Not an array</p>
            )
        }

    </div>
  )
}

export default Faqs