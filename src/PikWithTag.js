import React, { useState } from "react";
import { Arrow, Circle, Group, Text } from "react-konva";
import TransformerRectangle from "./TransformerRectangle";

const initialPick = {
  x: 100,
  y: 50,
  stroke: "red",
  strokeWidth: 4,
  points: [0, 0, 100, 0, 50, 100],
  tension: 0.5,
  opacity: 0.5,
};
const initialTextNode = {
  x: 100,
  y: 200,
  strokeWidth: 2,
  width: 40,
  height: 20,
};
const PikWithTag = ({
  id,
  shapeProps,
  isSelected,
  onSelect,
  onChange,
  show,
  x,
  counterTag,
}) => {
  const [pik, setUpdatePik] = useState(initialPick);
  const [textNode, setTextNode] = React.useState(initialTextNode);
  const arrowStart = {
    x: pik.x + 50,
    y: pik.y + 40,
  };
  const arrowEnd = {
    x: textNode.x + textNode.width / 2,
    y: textNode.y,
  };
  const arrowMiddle = {
    x: arrowEnd.x + 20,
    y: arrowEnd.y - 10,
  };
  return (
    <Group x={x}>
      <Group>
        <Circle
          visible={show}
          radius={5}
          fill={"black"}
          x={arrowStart.x}
          y={arrowStart.y}
        />
        <Arrow
          visible={show}
          points={[
            arrowStart.x,
            arrowStart.y,
            arrowMiddle.x,
            arrowMiddle.y,
            arrowEnd.x,
            arrowEnd.y,
          ]}
          stroke="#000"
          fill="#000"
          strokeWidth={1}
          pointerWidth={6}
        />
        <Text
          visible={show}
          fill="black"
          x={textNode.x}
          y={textNode.y}
          fontSize={20}
          align="center"
          verticalAlign="middle"
          text={counterTag}
          draggable={true}
          onDragMove={(e) => {
            setTextNode({ ...textNode, ...e.target.position() });
          }}
        />
      </Group>
      <TransformerRectangle
        id={id}
        shapeProps={shapeProps}
        isSelected={isSelected}
        onSelect={onSelect}
        onChange={onChange}
        setUpdatePik={setUpdatePik}
        pik={pik}
      />
    </Group>
  );
};
export default PikWithTag;
