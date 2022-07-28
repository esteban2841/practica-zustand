import React from 'react'
import useStore from '../zustand-reducer/store';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Users() {
    const users = useStore(state=>state.users)
    const deleteUser = useStore(state=> state.deleteUser)

    const handleDelete = (userId)=>{
      deleteUser(userId)
    }
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          users && users.map(u=>{
            return (
            <TableRow key={u.id}>
              <TableCell>{u.id}</TableCell>
              <TableCell>{u.userFirstName}</TableCell>
              <TableCell>{u.userLastName}</TableCell>
              <TableCell>{u.userAge}</TableCell>
              <TableCell ><DeleteIcon onClick={()=>handleDelete(u.id)}/></TableCell>
            </TableRow>)
          })
        }
          
        </TableBody>
      </Table>
        
      
    </TableContainer>
  )
}

