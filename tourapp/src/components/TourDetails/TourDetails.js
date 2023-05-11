import { useParams } from "react-router-dom";
import "./TourDetails.css";
import Card from "react-bootstrap/Card";
import { useState } from 'react';

// const ReadMore = ({ children }) => {
//   const text1 = children;
//   const [isReadMore, setIsReadMore] = useState(true);
//   const toggleReadMore = () => {
//     setIsReadMore(!isReadMore);
//   };
//   return (
//     <p className="text">
//       {isReadMore ? text1.slice(0,200) : text1}
//       <span onClick={toggleReadMore} className="read-or-hide">
//         {isReadMore ? "...read more" : " show less"}
//       </span>
//     </p>
//   );
// };


function TourDetails(props) {
  const { id } = useParams();
  const { data } = props;
  
  
  return (
    <div className="screen">
      {data
        .filter((card) => card.id === id)
        .map((element, index) => (
          <div key={index}>
            <Card className='card'>
              <Card.Img variant="top" src={element.image} />
              <Card.Body>
                <Card.Title className='title'>{element.name}</Card.Title>
                <Card.Text className='text'>{element.info}</Card.Text>
                {/* </ReadMore> */}
              </Card.Body>
            </Card>
          </div>
        ))}
    </div>
  );
}

export default TourDetails;
