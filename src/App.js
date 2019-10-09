import React from 'react'
import "babel-polyfill" //support IE11
import './assets/styles/App.scss'
import HeroComponent from "./components/Featured"



function App() {
    return (
      
            <div id="app" className="App color-change-3x">
              <HeroComponent/>
            </div>
    
  );
}

export default App;
