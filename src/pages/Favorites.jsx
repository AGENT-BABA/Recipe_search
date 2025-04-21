import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Favorites = () => {
  const { favorites } = useContext(AppContext);

  return (
    <div className="container">
      <h2>Your Favorites</h2>
      {favorites.length === 0 && <p>No favorites added yet.</p>}
      {favorites.map((item, index) => (
        <div key={item.id || index} className="card">
          <h3>{item.title}</h3>
          <img src={item.image} alt={item.title} style={{ width: "100%", borderRadius: "5px" }} />
        </div>
        ))}
    </div>
  );
};

export default Favorites;
