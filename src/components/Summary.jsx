import React from "react";
import Data from "../data.json";
export default function Summary() {
  const dataElement = Data.map((data) => {
    return (
      <div key={data.category} className={`category ${data.category}`}>
        <img src={`../assets/icon-${data.icon}.svg`} alt={data.category} />
        {data.category}
        <p className="score">
          {data.score}
          <span> /100</span>
        </p>
      </div>
    );
  });

  return (
    <div className="summary">
      <h3 className="title">Summary</h3>
      <div className="stats">{dataElement}</div>

      <button className="button">Continue</button>
    </div>
  );
}
