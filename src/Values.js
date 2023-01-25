import React, { useState } from "react";
import { Group, Line } from "react-konva";
import Edge from "./Edge";

const initialPick = {
  x: 100,
  y: 50,
  stroke: "red",
  strokeWidth: 4,
  points: [0, 0, 100, 0, 50, 100],
  tension: 0.5,
  opacity: 0.5,
  closed: true,
  draggable: true,
};
const Values = ({ show, x, counter }) => {
  const [pik, setUpdatePik] = useState(initialPick);
  return (
    <Group x={x}>
      <Edge show={show} counter={counter} pik={pik} />
      <Line
        {...initialPick}
        onDragMove={(e) => {
          setUpdatePik({ ...pik, ...e.target.position() });
        }}
      />
    </Group>
  );
};
export default Values;
