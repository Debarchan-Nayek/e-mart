import React from 'react'
import { Card } from 'react-bootstrap';
import Rating from './rating';
import {Link} from 'react-router-dom'
import './style.css';

const ProductPage = ({product}) => {
  console.log(product.numReviews);
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={`${product.numReviews} reviews`}
            />
          </Card.Text>
          <Card.Text as="div">
            <strong>${product.price}</strong>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );

 }

export default ProductPage