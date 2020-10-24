import React, { useState } from 'react';
import ProductDesign from './ProductDesign';
import ProductItems from "./Product_details"
import { Button,FormControl,Form  } from "react-bootstrap"
import "./style.css"
const CreateProduct = (ProductItems) => {
   
    return (
         <ProductDesign 
          key = {ProductItems.id}
          img = {ProductItems.ProductImg}
          name = {ProductItems.name}
          price = {ProductItems.price}
          qty = {ProductItems.qty}
         />
    );
};



const Product = () => {
    const [state , setState] = useState("")
    
//   const onchange = e => {
//       var val = e.target.value
      
     
//   }
const filterData = ProductItems.filter(ProductItem => {
 return ProductItem.name.toLowerCase().includes(state.toLowerCase())
})


    return (
        <div>
         <Form inline >
         <div className="position">
      <FormControl id='format' type="text" placeholder="Search" className="mr-sm-2" onChange={e => setState(e.target.value)} />
      <Button className="btns" variant="outline-success">Search</Button>
      </div>
      <div>
      <div className="show" >
      {filterData.map(CreateProduct)}
      </div>
      </div>
    </Form>  
        </div>
    );
};

export default Product;
