import React, { useState } from 'react';
import { Paper, Typography, Button, Box, Container } from '@mui/material';
import humanImage from '../assets/humanoSinNombre.png';

function Ficha({ animal }) {
  const [contador, setContador] = useState(0);

  const datos = {
    humano: {
      titulo: 'Soy un humano ejemplar',
      color: '#1976d2',
      imagen: humanImage,
      textoBoton: `Dale palmadas en la espalda ${contador}`
    }
  };

  const info = datos[animal];
  if (!info) return <Typography>No existe este humano, regístralo</Typography>;

  const { titulo, color, imagen, textoBoton } = info;

  return (
    <Container sx={{ textAlign: 'center' }}>
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6" color={color} sx={{ mb: 2 }}>
          {titulo}
        </Typography>

        <img
          src={imagen}
          alt={animal}
          style={{ borderRadius: '50%', width: 150, height: 150, objectFit: 'cover', marginBottom: '1rem' }}
        />

        <Box sx={{ mt: 2 }}>
          <Button variant="contained" sx={{ backgroundColor: color, color: '#fff' }} onClick={() => setContador(contador + 1)}>
            {textoBoton}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default Ficha;
