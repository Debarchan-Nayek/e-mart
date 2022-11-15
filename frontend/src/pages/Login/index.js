import React, {useState, useEffect} from 'react'
import {Form, Button, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import {login} from '../../actions/userAction'
import FormContainer from '../../components/FormContainer';

const Login = ({location, history}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = location.search ? location.search.split('=')[1]: "/";

    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const {loading, error, userInfo} = userLogin

    useEffect(() => {
      if (userInfo) {
        history.push(redirect);
      }
    }, [history, userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(login(email, password))
    };

  return (
    <>
      <FormContainer>
        <h1 style={{ paddingBottom: "4%" }}>SIGN IN</h1>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Enter Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button className="mt-3" type="submit">
            SIGN IN
          </Button>
        </Form>
        <Col className="mt-4">
          New User ?
          <Link to={redirect ? `register?redirect=${redirect}` : "/register"}>
            Register
          </Link>
        </Col>
      </FormContainer>
    </>
  );

 }

export default Login