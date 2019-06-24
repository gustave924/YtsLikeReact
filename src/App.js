import React from 'react';
import logo from './logo.svg';
import Home from "./Components/HomeComponent/HomeComponent";
import './App.css';
import {Provider} from "react-redux";
import {configureStore} from "./Redux/ConfigureStore";
import { BrowserRouter as Router } from "react-router-dom";
const store = configureStore();
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Home />
        </div>
      </Router>
    </Provider>
    
  );
}

export default App;
