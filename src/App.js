import React from 'react';
import { GlobalStyle } from './GlobalStyles';
import { ListOfCategories } from './components/ListOfCategories';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { Logo } from './components/Logo';

const App = () => (
  <div className="App">
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
);

export default App;
