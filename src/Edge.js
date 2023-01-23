import {Arrow, Group, Text} from "react-konva";
import React from "react";

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
export default Edge