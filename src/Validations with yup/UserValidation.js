import * as yup from "yup"

export const usersSchema = (yup.object().shape({
    userFirstName: yup.string().required(), 
    userLastName: yup.string().required(),
    userEmail:yup.string().email().required(),
    userNickName:yup.string().required(), 
    userPassword:yup.string().min(4).max(16).required(), 
    userAge: yup.number().required()
}))