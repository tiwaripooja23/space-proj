import React from "react";
const ResultNotFound = (props: any) => {
  return (
    <div>
      {props.list && props.list.length === 0 && (
        <p className="no-record">Not Found!</p>
      )}
    </div>
  );
};
export default ResultNotFound;
