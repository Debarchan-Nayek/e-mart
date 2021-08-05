import { Container } from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import HomePage from './pages/Home';
import Productdetails from './pages/ProductDetails'
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <main className="my-3">
          <Container className="mt-4">
            <Route path="/" component={HomePage} exact />
            <Route path="/product/:id" component={Productdetails} />
          </Container>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
