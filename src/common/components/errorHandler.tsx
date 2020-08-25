import React from "react";

interface IError {
  error: any;
}

/*getting error object*/
const getObjectError = (error: any) => {
  return Object.keys(error).map((row: any, index: any) => {
    return (
      <div>
        <p className="error" key={index}>
          <span style={{ margin: "6px" }}>{row}</span>:
          <span style={{ margin: "6px" }}>{error[row]}</span>
        </p>
      </div>
    );
  });
};
const getArrayError = (error: any) => {
  return error.map((row: any) => {
  return getObjectError(row);
  });
};
const Errorhandler = (props: IError) => {
  const { error } = props;
  return (
    <div className="error-block">
      {typeof error === "string" && <p className="error">{error}</p>}
      {typeof error !== "string" &&
        Array.isArray(error) === false &&
        getObjectError(error)}
      {typeof error !== "string" &&
        Array.isArray(error) === true &&
        getArrayError(error)}
    </div>
  );
};

export default Errorhandler;
