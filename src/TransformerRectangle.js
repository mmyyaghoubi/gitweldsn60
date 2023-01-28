import React, { useEffect, useRef } from "react";
import { Line, Transformer } from "react-konva";

function TransformerRectangle({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
  pik,
  setUpdatePik,
}) {
  const shapeRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
      <Line
        y={pik.y}
        points={pik.points}
        tension={pik.tension}
        opacity={pik.opacity}
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        stroke={pik.stroke}
        closed
        x={pik.x}
        fill={"red"}
        draggable
        onDragMove={(e) => {
          setUpdatePik({
            ...pik,
            ...e.target.position(),
          });
          console.log("x :" + Math.floor(e.target.x()));
        }}
        onTransformEnd={() => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();
          const rotation = node.rotation();
          console.log("scaleX,scaleY :", scaleX.toFixed(2), scaleY.toFixed(2));
          console.log("node.width():", node.width());
          console.log("scaleY", scaleY.toFixed(2));
          console.log("rotation", rotation.toFixed(2));
          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);

          onChange({
            ...shapeProps,
            x: Math.floor(node.x()),
            y: Math.floor(node.y()),
            // set minimal value
            points: node
              .points()
              .map((num, ind) =>
                Math.floor(num * (ind % 2 === 0 ? scaleX : scaleY))
              ),
            //points: node.points().map((num,ind) => num * (ind % 2 === 0 ? scaleX : scaleY)),
            //filtered: filtered.map(a => a * scaleX),
            // width: Math.max(50, node.width() * scaleX),
            // height: Math.max(50,node.height() * scaleY),
          });
        }}
      />
      {isSelected && (
        <>
          <Transformer
            borderStroke={"darkGreen"}
            borderDash={[10, 5]}
            borderStrokeWidth={1.5}
            anchorCornerRadius={0}
            anchorStrokeWidth={2}
            anchorSize={10}
            // rotateAnchorOffset={48}
            ref={trRef}
            boundBoxFunc={(oldBox, newBox) => {
              // limit resize
              if (newBox.width < 55 || newBox.height < 55) {
                return oldBox;
              }
              return newBox;
            }}
          />
        </>
      )}
    </React.Fragment>
  );
}
export default TransformerRectangle;
