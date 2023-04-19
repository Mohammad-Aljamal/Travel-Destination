import Header from "../header/Header";
import Footer from "../footer/Footer";
import Tours from "../tours/Tours";

const data = require("../../data/db.json");


function Home() {
  return (
    <div>
      <Header />
      <Tours arrayData = {data} />
      <Footer />
    </div>
  );
}

export default Home;
