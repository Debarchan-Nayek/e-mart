import React from 'react'
import { Container, Row,Col } from 'react-bootstrap';
const Footer = (props) => {
  return(
    <>
        <footer>
            <Container className="mt-5">
                <Row>
                    <Col md={12} className="text-center">
                        <span>Copyright © 2021 Debarchan Nayek.All Rights Reserved</span>
                    </Col>
                </Row>
            </Container>
        </footer>
    </>
   )

 }

export default Footer