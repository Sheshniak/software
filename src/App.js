import React from 'react';
import Navbar from './Navbar';
import ProductList from './ProductList';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <ProductList />
      </Container>
    </div>
  );
}

export default App;

