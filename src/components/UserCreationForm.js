import React from 'react'
import useStore from '../zustand-reducer/store'
import {useForm} from "react-hook-form"
import styled from 'styled-components';
import {db} from "../DbDexie/dataBase"
import { usersSchema } from "../Validations with yup/UserValidation"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"


const StyledFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  border-radius: 10px;
  background-color: ${ props =>  props.formColor || "#32323f"};
  padding: 20px;
  animation: movementBelow 2s linear 1;
  @keyframes movementBelow {
    from{
      transform: translateX(-100%);
      opacity: 0;
    }to{
      transform: translateX(0);
      opacity: 1;
    }
  }
  p{
    font-size: small;
  }
  input{
    border-radius: 5px;
    padding: 5px;
  }
  [data-set-id="submiting"]{
    background-color: white;
    color: #32323f;
    :hover{
      background-color: #282c34;
      color: white;
      border-color: white;
    }
  }
  
`
export default function UserCreationForm(props) {
  // const inputRef = useRef()
  
  //se traen los estados actuales como useSelector de redux y las funciones
  //para modificar el estado del store se ejecutan directamente para modificar el estado
  //como addUser
  const {register, handleSubmit, formState:{ errors } } = useForm({resolver : yupResolver(usersSchema)});
  const addUser = useStore((state)=> state.addUser)
  const users = useStore((state)=> state.users)

  const submiting = async (data, event) =>{

    // const {userFirstName, userLastName, userAge} = data
    event.preventDefault()
    await db.users.add(data)
    
    addUser(data)
  } 


    
  return (
    <StyledFormContainer onSubmit={handleSubmit(submiting)} data-be="userCreationForm">
        <input {...register("userFirstName", {required: true, minLength: 3, maxLength:20})} placeholder="First Name"/>
        {errors.userFirsName && <p>{errors.userFirsName.message}</p>}
        <input {...register("userLastName", {required: true, minLength: 3, maxLength:20})} placeholder="Last Name"/>
        {errors.userLastName && <p>{errors.userLastName.message}</p>}
        <input {...register("userEmail", {required: true, minLength: 3, maxLength:20})} placeholder="Email"/>
        {errors.userEmail && <p>{errors.userEmail.message}</p>}
        <input {...register("userNickName", {required: true, minLength: 3, maxLength:20})} placeholder="Nickname"/>
        {errors.userNickName && <p>{errors.userNickName.message}</p>}
        <input type={"password"} {...register("userPassword", {required: true, minLength: 3, maxLength:20})} placeholder="Password"/>
        {errors.userPassword && <p>{errors.userPassword.message}</p>}
        <input type="number" {...register("userAge", {required: true, min: 18})} placeholder="Age" />
        {errors.userAge && <p>{errors.userAge.message}</p>}
        <input data-set-id="submiting" type="submit"/>
    </StyledFormContainer>
  )
}
