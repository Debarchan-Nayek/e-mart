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
import OrderPage from './pages/OrderPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import OrderListPage from './pages/OrderList';
import UserListPage from './pages/UserList';
import UserEditPage from './pages/UserEditPage';
import ProductListPage from "./pages/ProductListPage";
import ProductEditPage from "./pages/ProductEditPage";


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <main className="my-3">
          <Container className="mt-4">
            <Route path="/" component={HomePage} exact />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/register" component={Register} />
            <Route path="/product/:id" component={Productdetails} />
            <Route path="/admin/product/:id/edit" component={ProductEditPage} />
            <Route path="/cart/:id?" component={CartPage} />
            <Route path="/shipping" component={ShippingPage} />
            <Route path="/payment" component={PaymentPage} />
            <Route path="/placeorder" component={OrderPage} />
            <Route path="/order/:id" component={OrderDetailsPage} />
            <Route path="/admin/orderlist" component={OrderListPage} />
            <Route path="/admin/userlist" component={UserListPage} />
            <Route path="/admin/user/:id/edit" component={UserEditPage} />
            <Route path="/admin/productlist" component={ProductListPage} />
          </Container>
        </main>
      </Router>
      <Footer />
    </>
  );
}

export default App;
