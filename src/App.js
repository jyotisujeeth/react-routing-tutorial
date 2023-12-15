import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from "./Components/welcome";
import Products from './Components/Products';
function App() {
    return (
      <div>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/Products">
          <Products />
        </Route>
      </div>
    );
}

// our domin.com/welcome => welcome component 
export default App;








