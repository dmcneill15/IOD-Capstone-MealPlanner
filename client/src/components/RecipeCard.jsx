'use client' // client component, not server rendered
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Row, Container, CardFooter } from 'react-bootstrap';

export default function Orders({ recipes }) {
    if (recipes.length === 0) {
        return (
            <Container className=' justify-content-center align-items-center'>
                <Row xs={1} sm={1} md={1} className="g-4 justify-content-center">
                    <Col className="center g-4 justify-content-center">
                        <p className="h6"><p>No recipes added yet...</p></p>
                    </Col>
                </Row>
                <div className='center'>
                    <a className="custom-btn btn btn-outline-light center" href="#" role="button"> +Add a Recipe</a>
                </div>
            </Container>
        );
    }

    return (
        <Container className='justify-content-center align-items-center'>
            <Row xs={1} sm={2} md={4} className="justify-content-center">
                {recipes.map(recipe => (
                    <Col key={recipe.recipe_id} className="g-3 justify-content-center">
                        <Card className=' border-2 text-center'>
                            <Card.Img className="mx-auto pt-2" src="#" />
                            <Card.Body>
                                <Card.Title className='fs-5'>{recipe.recipe_title}</Card.Title>
                                <Card.Text>Servings: {recipe.servings}</Card.Text>
                                <CardFooter className="">
                                    <a className="custom-btn btn btn-outline-light" href="#" role="button">+Add to Plan</a>
                                    <div>
                                        <a className="custom-btn btn btn-outline-light" href="#" role="button">Edit</a>
                                        <a className="custom-btn btn btn-outline-light" href="#" role="button">Delete</a>
                                    </div>
                                </CardFooter>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container >
    )
}