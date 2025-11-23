import React, {useEffect, useState, useRef} from 'react'

const customHook = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const hasFetched = useRef(false);

    useEffect(() => {
        if(!hasFetched.current) {
            hasFetched.current = true;
            fetch(url)
            .then((response) => {
                if(!response.ok) {
                    throw new Error('Data Fetch is Not Working Successfully');
                }else{
                    return response.json()
                }
            })
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                setError(error.message);
            });
        }
    }, [url]);  
        

  return (
    {data, error}
  )
}

export default customHook