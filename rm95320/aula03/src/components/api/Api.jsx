import React from "react";

function Api(props) {
  return (
    <div>
      <h2>Api</h2>
      <div>{props.children}</div>
    </div>
  );
}

export default Api;