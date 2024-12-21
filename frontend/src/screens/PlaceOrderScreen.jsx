import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import CheckoutSteps from '../components/CheckoutSteps'

const PlaceOrderScreen = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  // // checks whether shippingAddress and paymentMethod are empty
  useEffect(() => {
     if(!cart.shippingAddress.address){
      console.log('no address')
      navigate('/shipping');
     } else if (!cart.payment){
      console.log('no payment')
      navigate('/payment');
     }
  }, [cart.paymentMethod, cart.shippingAddress.address, navigate]);

  return (
    <>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>Column</Col>
        <Col md={4}>Column</Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen