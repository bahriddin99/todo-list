import { Data } from './data/data'
import { nanoid } from '@reduxjs/toolkit'
import {  useSelector } from 'react-redux'

import React from 'react'

export const CardContainer = () => {
    const {task} = useSelector((state) => state.todo)
  return (
    <div className='container'>
        {task.map((item)=>(
            <Data key={nanoid()} {...item}/>
        ))}
    </div>
  )
}
