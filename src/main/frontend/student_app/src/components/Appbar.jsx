import { Container } from '@mui/system'
import React from 'react' ; 
// import IconButton from '@mui/material/IconButton';
// import { Fingerprint } from '@mui/icons-material';


const Appbar = () => {
  return (
    <div style={{ backgroundColor:'whitesmoke' 
    , color:'blue',
    padding:'20px' , margin:'0px'
    }}>
        <Container >
        <h1>Students manager</h1>
        </Container>
    </div>
  )
}

export default Appbar