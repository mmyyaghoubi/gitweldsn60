import React, { useState } from "react";
import { Group } from "react-konva";
import Edge from "./Edge";
import Rectangle from "./Rectangle";

const initialPick = {
  x: 100,
  y: 50,
  stroke: "red",
  strokeWidth: 4,
  points: [0, 0, 100, 0, 50, 100],
  tension: 0.5,
  opacity: 0.5,
};
const Values = ({
  id,
  shapeProps,
  isSelected,
  onSelect,
  onChange,
  show,
  x,
  counter,
}) => {
  const [pik, setUpdatePik] = useState(initialPick);

  return (
    <Group x={x}>
      <Edge show={show} counter={counter} pik={pik} />
      {/*<Line*/}
      {/*  {...initialPick}*/}
      {/*  onDragMove={(e) => {*/}
      {/*    setUpdatePik({ ...pik, ...e.target.position() });*/}
      {/*  }}*/}
      {/*/>*/}
      <Rectangle
        id={id}
        shapeProps={shapeProps}
        // initialPik={initialPick}
        isSelected={isSelected}
        onSelect={onSelect}
        onChange={onChange}
        setUpdatePik={setUpdatePik}
        pik={pik}
      />
    </Group>
  );
};
export default Values;
