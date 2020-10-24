import React from 'react';
import { BrowserRouter ,Switch, Route } from "react-router-dom";
import Billpay from "./Billing/Billpay"
import Product from './Product/Product';
const Routes = () => {
    return (
        <div>
             <BrowserRouter>
               <Switch>
               <Route exact component={Product} path="/"/>
                   <Route exact component={Billpay} path="/buy/:price"/>
               </Switch>
              </BrowserRouter>
        </div>
    );
};

export default Routes;