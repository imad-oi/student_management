import { Button, Paper, TextField } from '@mui/material'
// import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react';
import StudentTable from'./StudentTable';

const Student = () => {

    const [name, setName] = useState('') ;
    const [address, setAddress] = useState('') ;
    const [students, setStudents] = useState([]) ;


    const handleClick = (e)=>{
        e.preventDefault() ; 
        const student = { name ,address}  ; 
        console.table(student) 
        
        fetch('http://localhost:8036/student/add', 
        {
            method:"POST" ,
            headers:{
                "Content-Type" : "application/json"
            }, 
            body: JSON.stringify(student) 
        })
        .then(()=>console.log("new student added"))
    }

  return (
    <div>
        <Paper sx={{padding:'30px', }} elevation={4}>
            <form style={{
                display:'flex' , 
                flexDirection:'row' , 
                justifyContent:'space-around', 
                alignItems:'baseline'
                 }}>
                <TextField
                value={name}
                onChange={(e)=>setName(e.target.value)}
                id="standard-basic" label="name" variant="standard" />
                <TextField 
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
                id="standard-basic" label="adress" variant="standard" />
            <Button 
            onClick={handleClick}
            variant='contained'> add</Button>
            </form>
        </Paper>
            <StudentTable/>
    </div>
  )
}

export default Student