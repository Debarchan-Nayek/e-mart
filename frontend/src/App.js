import { Container } from 'react-bootstrap';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Footer from './components/Footer';
import NavBar from './components/NavBar';
import HomePage from './pages/Home';
import CartPage from './pages/CartPage';
import Productdetails from './pages/ProductDetails'
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProfilePage from "./pages/ProfilePage";
import ShippingPage from "./pages/ShippingPage"
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <main className="my-3">
          <Container className="mt-4">
            <Route path="/" component={HomePage} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/profile" component={ProfilePage} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/product/:id" component={Productdetails} />
            <Route path="/cart/:id?" component={CartPage} />
            <Route path="/shipping" component={ShippingPage} exact />
            <Route path="/payment" component={PaymentPage} exact />
          </Container>
        </main>
      </Router>
      <Footer />
    </>
  );
}

export default App;
