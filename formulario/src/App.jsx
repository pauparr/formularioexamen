import React from 'react';
import { Container, Grid, Button } from '@mui/material';
import Ficha from './components/Ficha';
import FormRegistro from './components/FormRegistro';

function App() {
  return (
    <Container sx={{ textAlign: 'center', py: 4 }}>
      <Ficha animal="gato" />
      <FormRegistro animal="gato" color="#d38b00" />

      <Ficha animal="perro" />
      <FormRegistro animal="perro" color="#b67c00ff" />

      {/* Aquí van los botones */}
      <Grid container spacing={2} sx={{ mt: 4 }}>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" fullWidth>1</Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" fullWidth>2</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
