import React, { useEffect } from 'react'
import { Carousel } from 'react-bootstrap';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import { listTopProducts } from '../../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


 const ProductCarousel = () => {
   const dispatch = useDispatch()

   const productTopRated = useSelector(state => state.productTopRated)
   const { loading, error, products } = productTopRated

   useEffect(() => {
     dispatch(listTopProducts());
   }, [dispatch])
  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
      <Carousel pause="hover" className="bg-dark">
        {products.map((product) => (
          <Carousel.Item key={product._id} >
            <Link to={`/product/${product._id}`}>
              <img
                src={product.image}
                alt={product.name}
                fluid
              />
              <Carousel.Caption className="carousel-caption">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
  );

 }

 export default ProductCarousel;;