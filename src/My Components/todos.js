import React from 'react'
import {Todoitems} from '../My Components/todoitems'

export const Todos = (props) => {
  return (
    
    <div className='mb-5'>
        {props.todo.length===0? <h4 className='text-center mt-2 color' style={{color:"red"}}>No Todos to Display</h4> : 
        props.todo.map((todo)=>{
            return <Todoitems todo={todo} onDelete={props.onDelete} key={props.SrNo}/>
        })
        }
        <br></br>
    </div>
  )
}
