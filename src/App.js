import React, { useState } from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { selectLoggedinUser } from "./store/selectors";
import ResourcesSection from "./components/ResourcesSection";

const selectDevs = (state) => {
  return state.developers;
};

const selectRecources = (state) => {
  return state.resources;
};

const selectDevelopersWithFavorite = (favoriteId) => {
  return (state) => {
    return state.developers.filter((dev) => dev.favorites.includes(favoriteId));
  };
};

const selectDevelopersFavoritesResources = (developerId) => {
  return (state) => {
    return state.developers
      .find((dev) => dev.id === developerId)
      .favorites.map((favId) =>
        state.resources.find((resource) => resource.id === favId)
      );
  };
};

function App() {
  const developers = useSelector(selectDevs);
  // const numDevelopers = useSelector(state => state.developers.length);
  const resources = useSelector(selectRecources);

  const [favoriteId, setFavoriteId] = useState(2);
  const [developerId, setDeveloperId] = useState(1);
  // console.log("favoriteId:", favoriteId);
  // console.log("developerId:", developerId);

  const developersWithThisFavorite = useSelector(
    selectDevelopersWithFavorite(favoriteId)
  );

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

  // console.log("developersWithThisFavorite", developersWithThisFavorite);
  const renderDevsPerFavorite = developersWithThisFavorite.map((dev) => {
    const { id, name } = dev;
    return <li key={id}>{name}</li>;
  });

  const favOptHandler = (e) => {
    // console.log("e.target.value", e.target.value);
    setFavoriteId(parseInt(e.target.value));
  };

  const devOptHandler = (e) => {
    // console.log("e.target.value", e.target.value);
    setDeveloperId(parseInt(e.target.value));
  };

  const optionsDevs = developers.map((dev) => {
    const { id, name } = dev;
    return (
      <option key={id} value={id}>
        {name}
      </option>
    );
  });

  const developersFavoritesResources = useSelector(
    selectDevelopersFavoritesResources(developerId)
  );

  const renderFavoritesPerDev = developersFavoritesResources.map((resource) => {
    const { id, name } = resource;
    return <li key={id}>{name}</li>;
  });

  const loggedinUser = useSelector(selectLoggedinUser);
  // console.log("loggedinUser", loggedinUser.name);

  return (
    <div className="App">
      <div className="welcome">
        Welcome back, <strong>{loggedinUser.name}</strong>!
      </div>
      <h3>Web development resources</h3>
      <p>Developers: {developers.length}</p>
      <p>Resources: {resources.length}</p>
      <h3>
        Who likes:{" "}
        <select value={favoriteId} onChange={favOptHandler}>
          {renderFavorites}
        </select>{" "}
        ?
      </h3>
      <ul>{renderDevsPerFavorite}</ul>
      <h3>
        What are{" "}
        <select value={developerId} onChange={devOptHandler}>
          {optionsDevs}
        </select>{" "}
        's favourites?
      </h3>
      <ul>{renderFavoritesPerDev}</ul>
      <ResourcesSection />
    </div>
  );
}

export default App;
