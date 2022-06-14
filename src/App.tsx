import React from 'react';
import './App.css';
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="App">
        <Header/>
      <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
      </ul>
    </div>
  );
}

export default App;
