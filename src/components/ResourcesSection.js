import React from "react";
import { selectRecources } from "../store/selectors";
import { useSelector } from "react-redux";

export default function ResourcesSection() {
  const resources = useSelector(selectRecources);

  //   console.log("resources:", resources);

  const renderResources = resources.map((resource) => {
    const { id, name, tags, type, url } = resource;
    return (
      <div key={id}>
        <p>
          <strong>{name}</strong> <span className="type">({type})</span> — find
          out more at <a href={url}>{url} </a>
        </p>
        {tags.map((tag) => (
          <span key={Date.now()} className="tag">
            {tag}
          </span>
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
