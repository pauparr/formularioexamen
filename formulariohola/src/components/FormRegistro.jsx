import React, { useState } from 'react';
import {
  Container,
  Paper,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Checkbox,
  Rating
} from '@mui/material';

function FormRegistro() {
  const [data, setData] = useState({
    nombre: '',
    apellidos: '',
    edad: '',
    genero: '',
    lenguaje: '',
    rating: 0,
    acepto: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({
      ...data,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleRatingChange = (e, value) => {
    setData({ ...data, rating: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mostrar todos los datos en un alert simple
    alert(
      `Datos enviados:\n` +
      `Nombre: ${data.nombre}\n` +
      `Apellidos: ${data.apellidos}\n` +
      `Edad: ${data.edad}\n` +
      `Género: ${data.genero}\n` +
      `Lenguaje favorito: ${data.lenguaje}\n` +
      `Rating: ${data.rating}\n` +
      `Acepta términos: ${data.acepto ? 'Sí' : 'No'}`
    );
    // Reiniciar formulario
    setData({
      nombre: '',
      apellidos: '',
      edad: '',
      genero: '',
      lenguaje: '',
      rating: 0,
      acepto: false
    });
  };

  const handleReset = () => {
    setData({
      nombre: '',
      apellidos: '',
      edad: '',
      genero: '',
      lenguaje: '',
      rating: 0,
      acepto: false
    });
  };

  return (
    <Container sx={{ mt: 3 }}>
      <Paper elevation={4} sx={{ p: 3, borderRadius: 3, maxWidth: 600, margin: '0 auto' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Formulario de Registro
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Nombre"
                name="nombre"
                fullWidth
                value={data.nombre}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Apellidos"
                name="apellidos"
                fullWidth
                value={data.apellidos}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Edad"
                name="edad"
                type="number"
                fullWidth
                value={data.edad}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <RadioGroup
                row
                name="genero"
                value={data.genero}
                onChange={handleChange}
              >
                <FormControlLabel value="Hombre" control={<Radio />} label="Hombre" />
                <FormControlLabel value="Mujer" control={<Radio />} label="Mujer" />
                <FormControlLabel value="Otro" control={<Radio />} label="Otro" />
              </RadioGroup>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth required>
                <InputLabel>Lenguaje favorito</InputLabel>
                <Select
                  name="lenguaje"
                  value={data.lenguaje}
                  onChange={handleChange}
                  label="Lenguaje favorito"
                >
                  <MenuItem value="JavaScript">JavaScript</MenuItem>
                  <MenuItem value="Python">Python</MenuItem>
                  <MenuItem value="Java">Java</MenuItem>
                  <MenuItem value="C#">C#</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography component="legend">Rating</Typography>
              <Rating
                name="rating"
                value={data.rating}
                onChange={handleRatingChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={data.acepto}
                    onChange={handleChange}
                    name="acepto"
                  />
                }
                label="Acepto los términos y condiciones"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={!data.acepto}
              >
                Enviar
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                type="button"
                variant="outlined"
                fullWidth
                onClick={handleReset}
              >
                Limpiar
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}

export default FormRegistro;
