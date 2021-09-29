import React from "react";
import { H1Title } from "./H1Title";
import { H1Error } from "./H1Error";

const H1Results = ({ isFetching, h1Title, error }) => {
  return (
    <div className="result">
      {(() => {
        if (isFetching) return <p>FETCHING...</p>;
        if (error) return <H1Error error={error} />;
        if (h1Title) return <H1Title h1Title={h1Title} />;
      })()}
    </div>
  );
};

export default H1Results;
