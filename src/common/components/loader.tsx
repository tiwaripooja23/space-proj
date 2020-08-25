import React from "react";

const Loader = (props: any) => {
  return 
  <div>
  {props.loader && <div className="loader">Loading it ....</div>}
  </div>;
};

export default Loader;
