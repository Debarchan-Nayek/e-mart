import React, { useEffect, useState } from 'react';
import Rating from '../Product/rating';
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, ListGroupItem, Button, Image } from 'react-bootstrap';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import axios from 'axios';

const ProductDetails = ({ match }) => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        const fetchProduct = async () => {
            const {data} = await axios.get(`/api/products/${match.params.id}`);
            setProduct(data)
        }
        fetchProduct();
    },[]);

    // const product = Products.find((p) => p._id === match.params.id);
  return(
    <div>
    <Link to="/" className="btn btn-light ">
        <FaArrowAltCircleLeft />
        &nbsp; Go Back
    </Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid/>
            </Col>
            <Col md={3}>
                <ListGroup vsriant="flush">
                    <ListGroupItem>
                        <h3>{product.name}</h3>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Rating value={product.rating} total={`${product.numReviews} Reviews`}/>
                    </ListGroupItem>
                    <ListGroupItem>
                        Price: {product.price}
                    </ListGroupItem>
                    <ListGroupItem>{product.description}</ListGroupItem>
                </ListGroup>
            </Col>
            <Col md={3}>
                <ListGroupItem>
                    <Row>
                        <Col>Status: </Col>
                        <Col>{product.countInStock > 0 ? "In Stock" : "Out of Stock :("}</Col>
                    </Row>
                </ListGroupItem>
                <ListGroupItem>
                    <Button className="btn-block" type="button" >Add to Cart</Button>
                </ListGroupItem>
            </Col>
        </Row>
    </div>
   )

 }

export default ProductDetails