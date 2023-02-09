import React from "react";
import Comments from "./comments/Comments";

const App = () => {
  return (
    <div>
      <h1>Component App</h1>
      <Comments currentUserId="1"/>
    </div>
  );
};

export default App;
