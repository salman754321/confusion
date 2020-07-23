import React from 'react';

import './App.css';

import Main from "./Components/MainComponent"
import { BrowserRouter } from 'react-router-dom';

class  App extends React.Component {

render(){
  return (
    <div className="App">
    <BrowserRouter>
    <Main />
    </BrowserRouter>
    </div>
  );
}
}

export default App;
