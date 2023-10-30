import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Img() {
  return (
    <Container className='imgContainer'>
      <Row>
        <Col xs={6} md={4}>
          <Image className='prof' src="assets/profile.png" rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default Img;