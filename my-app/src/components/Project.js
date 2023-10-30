import Card from 'react-bootstrap/Card';
function Project(props) {
  return (
    <Card className='card flip' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <a id='proj' href={props.link}><p>Project Link</p></a>
      </Card.Body>
    </Card>
  );
}

export default Project;