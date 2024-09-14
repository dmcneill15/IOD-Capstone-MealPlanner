'use client' // client component, not server rendered
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row, Container } from 'react-bootstrap';
import Image from "next/image";

export default function Orders({ recipes }) {
    if (recipes.length === 0) {
        return (
            <Container className='justify-content-center align-items-center'>
                <Row xs={1} sm={2} md={2} className="g-4 justify-content-center">
                    <Col className="g-4 justify-content-center">
                        <Card className="border-light border-2">
                            <Card.Body>
                                <Card.Title className="h6"><p>No recipes added yet...</p></Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <a className="custom-btn btn btn-outline-light" href="#" role="button"> +Add a Recipe</a>
            </Container>
        );
    }

    return (
        <Container className='justify-content-center align-items-center'>
            {recipes.map(recipe => (
                <Row key={recipe.recipe_id} xs={1} sm={2} md={2} className="g-4 justify-content-center">
                    <Col key={recipe_id} className="g-4 justify-content-center">
                        <Card className="border-light border-2 mb-3">
                            <Image src={recipe.image} class="card-img-top" alt="..." />
                            <Card.Body>
                                <Card.Title className="fw-bold h6"><p>{recipe.recipe_title}</p></Card.Title>
                                <Card.Text>
                                    Servings: {recipe.servings}<br></br>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ))}
        </Container >
    )
}