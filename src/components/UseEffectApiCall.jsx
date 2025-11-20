import React, {useEffect, useState, useRef} from 'react'

const UseEffectApiCall = () => {

  const [data, setData] = useState(null);

  // Ref to track whether data has already been fetched
  const hasFetched = useRef(false);

  useEffect(() => {
    // If data has already been fetched, do not call the API again
    if (!hasFetched.current) {
      hasFetched.current = true; // Set to true to prevent future API calls
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, []); // Empty dependency array ensures this runs only on mount
  
  // console.log(data);

  const dataEleemnt = data && data.map((item) => (
                <ul key={item.id}>
                  <div className='bg-dark text-white p-3'>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </ul>
            ));


  return (
    <div className='border mt-5 p-3'>
        <u><h2>UseEffect & Api Call</h2></u>
        {dataEleemnt}
    </div>
  )
}

export default UseEffectApiCall