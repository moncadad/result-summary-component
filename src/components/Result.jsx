import React from "react";

export default function Result() {
  return (
    <div className="result">
      <h3 className="title">Your Result</h3>
      <div className="circle">
        <h1>76</h1>
        <p>of 100</p>
      </div>
      <h2>Great</h2>
      <p>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}
