import React from 'react';
import { Container, Grid } from '@mui/material';
import Ficha from './components/Ficha';
import FormRegistro from './components/FormRegistro';

function App() {
  return (
    <Container sx={{ textAlign: 'center', py: 4 }}>
      <Ficha animal="gato" />
      <FormRegistro animal="gato" color="#d38b00" />

      <Ficha animal="perro" />
      <FormRegistro animal="perro" color="#b67c00ff" />

      <Grid container spacing={2} sx={{ mt: 4 }}>
        {[1,2,3,4,5].map(num => (
          <Grid item xs={6} sm={4} key={num}>
            <button>{num}</button>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
