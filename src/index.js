import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Stage, Layer, Rect, Arrow, Text, Group, Line } from "react-konva";
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

const Edge = ({ counter, redNode, pik }) => {
    const arrowStart = {
        x: pik.x + 50,
        y: pik.y + 40,
    };
    const arrowEnd = {
        x: redNode.x + redNode.width / 2,
        y: redNode.y,
    };
    const arrowMiddle = {
        x: arrowEnd.x + 20,
        y: arrowEnd.y - 10,
    };

    return (
        <Group>
            <Arrow
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
                fill="black"
                x={arrowEnd.x - 5}
                y={arrowEnd.y}
                fontSize={20}
                align="center"
                verticalAlign="middle"
                text={counter}
            />
        </Group>
    );
};

const App = () => {
    const [counter, setCounter] = useState(0);
    const [blobs, setBlobs] = useState([]);
    const handelCreate = () => {
        setCounter(counter + 1);
        setBlobs((prevBlobs) => [
            ...prevBlobs,
            {
                x: blobs.length * 100,
            },
        ]);

        console.log("x : " + blobs.length * 100);
    };
    return (
        <>
            <button onClick={handelCreate}>Create</button>
            <Stage width={window.innerWidth} height={window.innerHeight}>
                <Layer>
                    {blobs.map((blob, i) => (
                        <Values key={i} x={blob.x} counter={counter} />
                    ))}
                </Layer>
            </Stage>
        </>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
