
import Tour from '../tours/tour/Tour';


function Home(props) {
  return (
    <div className = 'style'>
      <Tour arrayData={props.data} />
    </div>
  );
}

export default Home;
