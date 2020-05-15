import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

const selectDevs = (state) => {
  return state.developers;
};

const selectRecources = (state) => {
  return state.resources;
};

function App() {
  const developers = useSelector(selectDevs);
  // const numDevelopers = useSelector(state => state.developers.length);
  const resources = useSelector(selectRecources);

  const [favoriteId, setFavoriteId] = useState(2);
  // console.log("favoriteId:", favoriteId);

  const developersWithThisFavorite = useSelector((state) => {
    return state.developers.filter((dev) => {
      console.log("dev", dev);
      console.log("favoriteId", favoriteId);
      console.log(
        "dev.favorites.includes(favoriteId)",
        dev.favorites.includes(favoriteId)
      );
      return dev.favorites.includes(favoriteId);
    });
  });

  // console.log("developers lenghth", developers.length);
  // console.log("resources", resources.length);

  const renderFavorites = resources.map((resource) => {
    const { id, name } = resource;
    return (
      <option key={id} value={id}>
        {name}
      </option>
    );
  });

  console.log("developersWithThisFavorite", developersWithThisFavorite);
  const renderDevsFavourite = developersWithThisFavorite.map((dev) => {
    const { id, name } = dev;
    return <li key={id}>{name}</li>;
  });

  const optionsHandler = (e) => {
    // console.log("e.target.value", e.target.value);
    setFavoriteId(parseInt(e.target.value));
  };

  return (
    <div className="App">
      <h1>Web development resources</h1>
      <p>Developers: {developers.length}</p>
      <p>Resources: {resources.length}</p>
      <select value={favoriteId} onChange={optionsHandler}>
        {renderFavorites}
      </select>
      <ul>{renderDevsFavourite}</ul>
    </div>
  );
}

export default App;
