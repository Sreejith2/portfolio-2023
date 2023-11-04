import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Home() {
  const [text] = useTypewriter({words:['Backend Developer','Student','React Developer'],loop:{}});
  return (
    <Container id="home" className='cont'>
      <Row className="mt-5">
        <Col className="text-center">
          <h1><span className='intro'>Hi I am</span><span className='username'> Sreejith</span></h1>
          <h2 className='about'>A BackEnd Developer</h2>
          <p className='desc'>I am deeply passionate about web development, with a special love for backend development. Crafting robust, efficient systems and databases that power the digital world is where my heart truly lies. I find immense satisfaction in building the unseen backbone of websites and applications.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;

