import React from 'react';
import './App.css';
import { Container } from 'semantic-ui-react';
import HeaderComponent from "./components/HeaderComponent";
import WhyUs from "./components/WhyUs";
import Services from "./components/Services";
import Brands from "./components/Brands";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
      <Container>
          <HeaderComponent/>
          <WhyUs/>
          <Services/>
          <Brands/>
          <Contacts/>
          <Footer/>
      </Container>
  );
}

export default App;
