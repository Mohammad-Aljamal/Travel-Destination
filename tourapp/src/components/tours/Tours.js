function Tours(prop) {
const { arrayData } = prop;

  return (
    <div>
      {arrayData.map((item, i) => {
        return (
          <div key={i}>
            <h2>{item.name}</h2>
            <img src={item.image}/>
          </div>
        );
      })}
    </div>
  );
}

export default Tours;
