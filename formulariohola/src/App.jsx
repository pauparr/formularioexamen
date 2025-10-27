import React from 'react';
import { Container, Grid } from '@mui/material';
import Ficha from './components/Ficha';
import FormRegistro from './components/FormRegistro';

function App() {
  return (
    <Container sx={{ textAlign: 'center', py: 4 }}>
      <Grid container spacing={4} direction="column" alignItems="center">
        {/* Imagen arriba */}
        <Grid item xs={12}>
          <Ficha animal="humano" />
        </Grid>

        {/* Formulario debajo */}
        <Grid item xs={12}>
          <FormRegistro animal="humano" color="#d38b00" />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
