import React from "react";
import { selectRecources } from "../store/selectors";
import { useSelector } from "react-redux";

export default function ResourcesSection() {
  const resources = useSelector(selectRecources);

  //   console.log("resources:", resources);

  const renderResources = resources.map((resource) => {
    const { id, name, tags, type, url } = resource;
    return (
      <div>
        <p>
          <strong>{name}</strong> <span className="type">({type})</span> — find
          out more at {url}
        </p>
        {tags.map((tag) => (
          <span className="tag">{tag}</span>
        ))}
      </div>
    );
  });

  return (
    <div className="ResourcesSection">
      <h3>All resources</h3>
      {renderResources}
    </div>
  );
}
