
import Tour from '../tours/tour/Tour';

// const data = require("../../data/db.json");

function Home(props) {
  return (
    <div className = 'style'>
      <Tour arrayData={props.data} />
    </div>
  );
}

export default Home;
