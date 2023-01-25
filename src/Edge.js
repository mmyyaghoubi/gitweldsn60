import { Arrow, Group, Text, Circle } from "react-konva";
import React from "react";
const initialTextNode = {
  x: 100,
  y: 200,
  strokeWidth: 2,
  width: 40,
  height: 20,
};

const Edge = ({ show, counter, pik }) => {
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
    <Group>
      <Circle radius={5} fill={"black"} x={arrowStart.x} y={arrowStart.y} />
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
        text={counter}
        draggable={true}
        onDragMove={(e) => {
          setTextNode({ ...textNode, ...e.target.position() });
        }}
      />
    </Group>
  );
};
export default Edge;
