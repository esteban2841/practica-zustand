import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import {db} from "../DbDexie/dataBase"
import {useLiveQuery} from "dexie-react-hooks"

export default function DexieTable() {


    const allItemsInDb = useLiveQuery(()=>db.users.toArray(), [])



  return (
    <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>First Name</TableCell>
          <TableCell>Last Name</TableCell>
          <TableCell>Age</TableCell>
        </TableRow>
      </TableHead>
      <TableBody data-be="dexieTableRender">
      {
        allItemsInDb && allItemsInDb.map(u=>{
          return (
          <TableRow key={u.id}>
            <TableCell>{u.id}</TableCell>
            <TableCell>{u.userFirstName}</TableCell>
            <TableCell>{u.userLastName}</TableCell>
            <TableCell>{u.userAge}</TableCell>
          </TableRow>)
        })
      }
        
      </TableBody>
    </Table>
      
    
  </TableContainer>
  )
}
