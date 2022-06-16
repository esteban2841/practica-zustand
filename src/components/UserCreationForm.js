import React from 'react'
import useStore from '../zustand-reducer/store'
import {useForm} from "react-hook-form"
import styled from 'styled-components';


const StyledFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  
  
`
export default function UserCreationForm() {
  // const inputRef = useRef()
  
  //se traen los estados actuales como useSelector de redux y las funciones
  //para modificar el estado del store se ejecutan directamente para modificar el estado
  //como addUser
  const {register, handleSubmit} = useForm();
  const addUser = useStore((state)=> state.addUser)
  const users = useStore((state)=> state.users)

  const submiting = data => addUser(data)


    
  return (
    <StyledFormContainer onSubmit={handleSubmit(submiting)}>
        <input {...register("userFirstName", {required: true, minLength: 3, maxLength:20})} placeholder="First Name"/>
        <input {...register("userLastName", {required: true, minLength: 3, maxLength:20})} placeholder="Last Name"/>
        <input type="number" {...register("userAge", {required: true, min: 18})} placeholder="Age" />
        <input data-set-id="submiting" type="submit"/>
    </StyledFormContainer>
  )
}
