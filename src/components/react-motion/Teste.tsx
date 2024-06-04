import React from "react";
import { Motion, spring } from "react-motion";

const TesteReactMotion = () => {
  return (
    <Motion
      defaultStyle={{ opacity: 0, sacale: 0, x: 0 }}
      style={{ opacity: spring(1), scale: spring(1), x: spring(10) }}
    >
      {(style) => (
        <div style={{ ...style }}>
          <h1>Hello, World!</h1>
        </div>
      )}
    </Motion>
  );
};

export default TesteReactMotion;
