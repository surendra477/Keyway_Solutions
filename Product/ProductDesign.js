import React, {useState} from 'react';
import {Card, Button  } from "react-bootstrap"
import { Link } from 'react-router-dom';
import "./style.css"
const ProductDesign = (props) => {
  const [Qty , setQty] = useState(1);
  const [Url , setUrl] = useState({
    value: 1
  });
    return (
      
    <div style={{float:"left" , margin: "20px"}}>
   
    <Card style={{ width: '16rem' }}>
    <Card.Img variant="top" src={props.img} height="150px"/>
    <Card.Body>
    <Card.Title>{props.name}</Card.Title>
     <Card.Text>Rs {props.price}</Card.Text>

    
    <Card.Text>Status: {" "}{props.qty > 0 ? "In Stock" : "out of stock"}</Card.Text>
    <Card.Text> <ul style={{listStyleType:"none"}}>
                <li className="add_to_cart">
                  Qty:
                  <select
                    value={Qty}
                    onChange={(e) => {
                      setQty(e.target.value)
                      setUrl({value: e.target.value})
                    }}
                  >
                    {" "}
                    {/*logic for changing qnt  */}
                    {[...Array(props.qty).keys()].map((x) => (
                      <option keys={x + 1} value={x + 1}>
                        {x +1}
                      </option>
                    ))}
                  </select>
                </li>
                <li>
                  {props.qty > 0 ? (
                      
                    <Button 
                      href={"/buy/totalprice=" + props.price*Url.value + "/img="+ props.img}
                      // onClick={handleAddToCart}
                      variant="primary"
                      className="add_to_cart"
                    >
                      Buy Now
                     
                    </Button>
                  
                  ) : (
                    <div className="Out_Of_Stock">
                      <b >Out Of Stock.</b>
                    </div>
                  )}
                </li>
              </ul></Card.Text>
    
  </Card.Body>
</Card> 
        </div>
    );
};

export default ProductDesign;