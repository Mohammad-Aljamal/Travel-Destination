import { useParams } from "react-router-dom";
import "./TourDetails.css";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function TourDetails(props) {
  const { id } = useParams();
  const { data } = props;

  const [showMore, setShowMore] = useState(false);
  

  return (
    <div className="screen">
      {data
        .filter((card) => card.id === id)
        .map((element, index) => (
          <div key={index}>
            <Card className="card">
              <Card.Img variant="top" src={element.image} />
              <Card.Body>
                <Card.Title className="title">{element.name}</Card.Title>
                  <h6>
                    {showMore ? element.info : `${element.info.substring(0, 250)}`}
                    <button className="btn" onClick={() => setShowMore(!showMore)}>
                      {showMore ? "See less" : "...See more"}
                    </button>
                  </h6>
                </Card.Body>
            </Card>
          </div>
        ))}
    </div>
  );
}

export default TourDetails;
