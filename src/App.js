import React from 'react';
import  Nav  from './components/Navbar';
import Container from './components/Container';
import { GlobalStyle } from './globalStyle';
import TextField from './components/TextField';
import Form from './components/Form';





function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <GlobalStyle/>
      <Container/>
      <Form/>
    </div>
  );
}

export default App;
