import React from 'react'
import customHook from './customHook'


const GetData = () => {
    const {data, error} = customHook("https://jsonplaceholder.typicode.com/todos")
    //console.log(error)

    return (
        <div className='border p-3 mt-5'>
            <h2>Get Data Using Custom Hook</h2>
            {
                Array.isArray(data) ? (
                    data.map((todo)=>(
                    <ul key={todo.id} className='bg-dark text-white'>
                        <li>{todo.id} - {todo.title}</li>
                    </ul>
                ))
                ) : (
                    <p>
                        Not an Array Or {error}
                    </p>
                )
            }
        </div>
    )
}

export default GetData