import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct   from "./CheckoutProduct"
import { Link } from 'react-router-dom';
function Payment() {
    const [{basket,user},dispatch]=useStateValue();
    return (
        <div className="payment">
                <div className="payment__container">

                    <h1>
                        Chekout (
                            <Link to="/checkout">{basket?.length} itmes </Link>
                        )
                    </h1>
                    {/*Payment section-Delivery address*/}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Delivery Address</h3>
                        </div>
                        <div className="payment__address">
                            <p>{user?.email}</p>
                            <p>Lideta</p>
                            <p>Addis Ababa,Ethiopia</p>
                        </div>

                    </div>

                    {/*Payment section-Review items*/}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3> Review itmes and Delivery </h3>
                        </div>
                        <div className="payment__items">
                        {basket.map(item=>(
              
              <CheckoutProduct 
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
              />
              ))}
                        </div>

                    </div>

                    {/*Payment section-Payment method */}
                    <div className="payment__section">
                        <div className="payment__title">
                            <h3> Payment Method </h3>
                        </div>
                        <div className="payment__details">

                        </div>

                    </div>
                </div>
        </div>
    )
}

export default Payment
