import React from 'react';
import { Route } from 'react-router-dom';
import Welcome from "./Pages/welcome";
import Products from "./Pages/Products";
import MainHeader from "./Components/MainHeader";
function App() {
    return (
      <div>
        <MainHeader/>
        <main>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/Products">
            <Products />
          </Route>
        </main>
      </div>
    );
}

// our domin.com/welcome => welcome component 
export default App;








