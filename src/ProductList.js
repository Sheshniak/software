import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const ProductList = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Our Products</Typography>
      </Grid>
      {/* Product items will be added here */}
    </Grid>
  );
};

export default ProductList;

