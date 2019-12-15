import React from 'react'
import "babel-polyfill" //support IE11
import './assets/styles/App.scss'
import MainBoard from '../src/components/modules/main'



function App() {
    return (
      
            <div id="app" className="App">

              <MainBoard/>
              
            </div>
    
  );
}

export default App;
