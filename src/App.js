import React from 'react';
import { Switch ,Route, Redirect } from "react-router-dom";
// import Switch from "react-switch";
import Welcome from "./Pages/welcome";
import Products from "./Pages/Products";
import ProductDetail from './Pages/ProductDetail';
import MainHeader from "./Components/MainHeader";
function App() {
    return (
      <div>
        <MainHeader />
        <main>
          <Switch>
            <Route path="/" exact>
<Redirect to='/welcome' />
            </Route>
            <Route path="/welcome">
              <Welcome />
              <Route path="/Products" exact>
                <Products />
              </Route>
              <Route path="/Products/:productId">
                <ProductDetail />
              </Route>
            </Route>
          </Switch>
        </main>
      </div>
    );
}

// our domin.com/welcome => welcome component 
export default App;








