import React, { useState } from 'react'
import produce from "immer"
import useStore from '../zustand-reducer/store'

export default function ImplementingImmer() {

    const users = useStore((state)=> state.users)
    
    const usersNextState = produce( users, draft =>{
        draft[1].userLastName = "puentes"

    })
    console.log(users, usersNextState)
  return (
    <div>
        {
            usersNextState && usersNextState.map(u=><p>{u.userLastName}</p>)
        }
    </div>
  )
}
