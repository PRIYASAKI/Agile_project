// src/pages/CategoriesPage.js
import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';

const CategoriesPage = () => {
  const categories = [
    { id: 1, title: 'Electronics', img: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Furniture', img: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Fashion', img: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Books', img: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Automobiles', img: 'https://via.placeholder.com/150' },
    { id: 6, title: 'Collectibles', img: 'https://via.placeholder.com/150' },
  ];

  return (
    <Container>
      <h2 className="text-center my-4">Auction Categories</h2>
      <Row>
        {categories.map((category) => (
          <Col key={category.id} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={category.img} />
              <Card.Body>
                <Card.Title>{category.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CategoriesPage;
