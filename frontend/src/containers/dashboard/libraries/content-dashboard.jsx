import {
  Jumbotron,
  Container,
  Button,
  Card,
  Row,
  Col,
} from 'react-bootstrap';

const ContentDashboard = () => {
  return (
    <>
      <section>
        <Jumbotron>
          <Container>
            <h1>Hello, world!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
          </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Container>
        </Jumbotron>
      </section>
      <section>
        <Container fluid>
          <Row>
            <Col lg="6" xs="6">
              <Card>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>

      </section>
    </>
  )
};

export default ContentDashboard;