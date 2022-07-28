import React, { useState } from 'react'
import produce from "immer"
import useStore from '../zustand-reducer/store'

export default function ImplementingImmer() {

    const users = useStore((state)=> state.users)
    
    const usersNextState = produce( users, draft =>{
      if(users.length >= 1){

        draft[0].userLastName = "puentes"
      }

    })
  return (
    <div>
        {
            usersNextState && usersNextState.map(u=><p>{u.userLastName}</p>)
        }
    </div>
  )
}
