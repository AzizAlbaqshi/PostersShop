
import "./App.css";
import posters from "./posters";


function App() {
  const posterList = posters.map((poster) => (
    <div className="poster" key={poster.id}>
      <img alt={poster.name} className="poster-image" src={poster.image} />
      <p className="text">{poster.name}</p>
      <p className="text">{poster.price} KD</p>
    </div>
  ));


  return (
    <div>
     <div>
     <h1 id="welcome" >Welcome to our Posters Shop</h1>
     <h4 id="qout"> Where Stolen ARTS and WALLS combaind !! </h4>
    
    <img 
    id="primary-img" 
    src="https://helmsbakerydistrict.com/wp-content/uploads/2019/10/Bauhaus_Posters-1.jpg"
     alt="storeimg" />
    </div>
    <div className="list">{posterList}</div>
    </div>
  );
}

export default App;
