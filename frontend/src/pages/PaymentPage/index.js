import React, {useState} from 'react'
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from '../../actions/cartAction'
import CheckoutSteps from '../../components/CheckoutSteps'

const PaymentPage = ({history}) => {
      const cart = useSelector((state) => state.cart);
      const { shippingAddress } = cart;

    if(!shippingAddress){
        history.push('/shipping')
    }
    const dispatch = useDispatch()
    const [paymentMethod, setPaymentMethod] = useState('paypal')
    const submitHandler = (e) => {
        dispatch(savePaymentMethod(paymentMethod));
        history.push('/placeorder')
    }
  return (
    <>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form>
        <Form.Group>
          <Form.Label as="legend">Select Payment Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              label="Paypal or Credit Card"
              id="paypal"
              name="paymentMethod"
              value="paypal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button onClick={submitHandler}>Continue</Button>
      </Form>
    </>
  );

 }

export default PaymentPage