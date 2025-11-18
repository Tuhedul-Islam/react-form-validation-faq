import React, {useState} from 'react'
import { Button } from 'react-bootstrap'

const Toggle = () => {

    const [toggle, setToggle] = useState({
        show: true,
        hide: false
    });

    const {show, hide} = toggle;
    const handleToggle = (e) => {
        const data = e.target.id;
        if(data === 'show') {
            setToggle({
                ...toggle, 
                show: true, 
                hide: false
            })
            return;
        }else if(data === 'hide') {
            setToggle({
                ...toggle, 
                show: false, 
                hide: true
            })
            return;
        }
    }

    console.log(toggle);

  return (
    <div className='mt-5 border bg-light p-3'>
        <h2>Toggle</h2>
        <p className='mb-3 p-0 bg-warning'>If The Below Content not Showing Click the Show Button </p>

        {show && (
            <p className='bg-dark text-white p-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Ut veritatis non dicta fugiat sunt. Esse fuga doloribus aliquid odit itaque.</p>
        )}

        {hide && (
            <Button 
                style={{marginRight:'10px'}}
                id='show'
                onClick={handleToggle}
            >
                Show
            </Button>
        )}
        
        {show && (
            <Button
                id='hide'
                onClick={handleToggle}
            >
                Hide
            </Button>
        )}
        
    </div>
  )
}

export default Toggle