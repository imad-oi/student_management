import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import '../head.css' ;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//   },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function CustomizedTables() {

    const [students, setStudents] = React.useState([]) ;

    const getStudents = async ()=>{
        fetch('http://localhost:8036/student/', {
            method:"GET"
        })
        .then(Response=>Response.json())
        .then(data=>setStudents(data))
    }

    React.useEffect(() => {
    
        getStudents()
    }, [students])
    
  return (
    <TableContainer  sx={{padding:'20px', 
    display:'flex', 
    justifyContent:'center', 
    }}  component={Paper}>
      <Table sx={{ maxWidth:'50%' }} aria-label=" ">
        <TableHead 
        sx={{
            backgroundColor:'blueviolet', 
            color:''
        }} >
          <TableRow>
            <StyledTableCell>NAME</StyledTableCell>
            <StyledTableCell align="center">ADDRESS</StyledTableCell>
           </TableRow>
        </TableHead>
        <TableBody>
          {students.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.address}</StyledTableCell>
              </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
