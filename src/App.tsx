import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Header from './Header';
import HeroSection from './HeroSection';
import Desc from './Desc';
import Started from './Started';
import TabTitle from './TabTitle';
import Tab from './Tab';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <HeroSection/>
      <Desc />
      <Started />
      <TabTitle />
      <Tab />
    </div>
  );
}

export default App;
