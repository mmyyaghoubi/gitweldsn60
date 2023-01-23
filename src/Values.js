import React, {useState} from "react";
import {Group, Line, Rect} from "react-konva";
import Edge from "./Edge";

const initialRedNode = {
    x: 100,
    y: 200,
    stroke: "red",
    strokeWidth: 2,
    width: 40,
    height: 20,
    draggable: true,
};
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
const Values = ({ x, counter }) => {
    const [redNode, setUpdateRedNode] = React.useState(initialRedNode);
    const [pik, setUpdatePik] = useState(initialPick);
    return (
        <Group x={x}>
            <Edge counter={counter} redNode={redNode} pik={pik} />
            <Line
                {...initialPick}
                onDragMove={(e) => {
                    setUpdatePik({ ...pik, ...e.target.position() });
                }}
            />
            <Rect
                {...initialRedNode}
                onDragMove={(e) => {
                    setUpdateRedNode({ ...redNode, ...e.target.position() });
                }}
            />
        </Group>
    );
};
export default Values