import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import "./Tour.css";

function Tour(props) {
  const { arrayData } = props;

  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        {arrayData.map((item, i) => {
          return (
            <div key={i}>
              <Col>
              <Link to = {`/city/${item.id}`}>
                <Card className="sss">
                  <Card.Img variant="top" src= {item.image}></Card.Img>
                  <Card.Body className="title">
                    <Card.Title >{item.name}</Card.Title>
                  </Card.Body>
                </Card>
                </Link>
              </Col>

              {/* <Card>
                <Card.Img variant="top" src={Img} />
                <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <br/>

                </Card.Body>
              </Card> */}
            </div>
          );
        })}
      </Row>
    </div>
  );
}

export default Tour;
