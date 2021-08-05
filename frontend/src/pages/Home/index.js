import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import ProductPage from '../Product';

const HomePage = () => {
    const [Products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const {data} = await axios.get("/api/products");
            setProducts(data);
        };
        fetchProducts();
    },[]);

  return(
    <>
        <Row>
            {
                Products.map((product) => (
                    <Col key={product._id} md={3}>
                        <ProductPage product={product} />
                    </Col>
                ))
            }
        </Row>
    </>
   )

 }

export default HomePage