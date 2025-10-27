import React, { useState } from 'react';
import { Paper, Typography, Button, Box, Container } from '@mui/material';
import catImage from '../assets/cat.png';
import dogImage from '../assets/dog.png';

function Ficha({ animal }) {
  const [contador, setContador] = useState(0);
  const [contadorResto, setContadorResto] = useState(100);

  const datos = {
    gato: {
      titulo: 'Soy MrCatfish y vivo tranquilo',
      color: '#d38b00',
      imagen: catImage,
      textoBoton: `Good MrCatfish ${contador} good`,
    },
    perro: {
      titulo: 'Soy un ropopo y soy tu pesadilla',
      color: '#b67c00ff',
      imagen: dogImage,
      textoBotonPerder: `TE ESTOY QUITANDO TU CORDURA ${contadorResto}`,
    },
  };

  const info = datos[animal];
  if (!info) return <Typography>No existe ese animal</Typography>;
  const { titulo, color, imagen, textoBoton, textoBotonPerder } = info;

  return (
    <Container
      sx={{
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: 4,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 4,
          borderRadius: 3,
          textAlign: 'center',
          width: '100%',
          maxWidth: 500,
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
          style={{
            borderRadius: '50%',
            width: 150,
            height: 150,
            objectFit: 'cover',
            marginBottom: '1rem',
          }}
        />

        <Box sx={{ mt: 2 }}>
          {animal === 'gato' && (
            <Button
              variant="contained"
              sx={{ backgroundColor: color, color: '#fff' }}
              onClick={() => setContador(contador + 1)}
            >
              {textoBoton}
            </Button>
          )}

          {animal === 'perro' && (
            <Button
              variant="contained"
              sx={{ backgroundColor: color, color: '#fff' }}
              onClick={() =>
                setContadorResto(prev => Math.max(prev - 1, 0))
              }
            >
              {textoBotonPerder}
            </Button>
          )}
        </Box>
      </Paper>
    </Container>
  );
}

export default Ficha;
