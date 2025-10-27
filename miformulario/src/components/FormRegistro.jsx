import React, { useState } from 'react';
import { Container, Paper, Box, Typography, Grid, TextField, Button } from '@mui/material';

function FormRegistro({ animal, color }) {
  const [data, setData] = useState({ nombre: '', raza: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${animal.toUpperCase()} registrado:\nNombre: ${data.nombre}\nRaza: ${data.raza}`);
    setData({ nombre: '', raza: '' });
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <Container sx={{ textAlign: 'center', mt: 3 }}>
      <Paper elevation={4} sx={{ p: 3, borderRadius: 3, maxWidth: 500, margin: '0 auto' }}>
        <Typography variant="h6" color={color} sx={{ mb: 2 }}>
          Registra tu {animal}
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField required label="Nombre" name="nombre" fullWidth value={data.nombre} onChange={handleChange} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Raza" name="raza" fullWidth value={data.raza} onChange={handleChange} />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: color }}>
                Registrar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}

export default FormRegistro;
