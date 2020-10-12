import * as React from 'react';
import {useEffect} from "react";

const App = () => {

  useEffect(() => {
    fetch('/employees')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  })

  return (
    <h1>app</h1>
  );
};

export default App;