<Grid container spacing={2} sx={{ mt: 4 }}>
  {[1,2,3,4,5].map(num => (
    <Grid item xs={6} sm={4} key={num}>
      <Button variant="contained" fullWidth>{num}</Button>
    </Grid>
  ))}
</Grid>
