import { Stage, Layer } from "react-konva";
import React, { useState } from "react";
import Values from "./Values";

const App = () => {
  const [show, setShow] = useState(true);
  const [counter, setCounter] = useState(0);
  const [blobs, setBlobs] = useState([]);

  const handelCreate = () => {
    setCounter(counter + 1);
    setBlobs((prevBlobs) => [
      ...prevBlobs,
      {
        id: blobs.toString(),
        x: blobs.length * 100,
      },
    ]);
    // console.log("x : " + blobs.length * 100);
    // console.log("blobs.length : " + blobs.length);
  };
  const previous = blobs.slice(0, blobs.length - 1);
  const handelUndo = () => {
    if (blobs.length === 0) {
      return;
    }
    setBlobs(previous);
    console.log("blobs.length : " + blobs.length);
  };
  const handelShow = () => {
    setShow((prevState) => !prevState);
  };
  const [selectShape, setSelectShape] = useState(null);
  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      setSelectShape(null);
    }
  };

  return (
    <>
      <button onClick={handelCreate}>Create</button>
      <button onClick={handelUndo}>undo</button>
      <button onClick={handelShow}>on/off</button>
      <Stage
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
        width={window.innerWidth}
        height={window.innerHeight}
      >
        <Layer>
          {blobs.map((blob, g) => (
            //counter----->i+1
            <Values
              id={blob.id}
              shapeProps={blob}
              isSelected={blob.id === selectShape}
              onSelect={() => {
                setSelectShape(blob.id);
                console.log("Selected shape" + blob.id);
              }}
              onChange={(newAttrs) => {
                const copyOfSheklha = blobs.slice();
                copyOfSheklha[g] = newAttrs;
                // console.log(newAttrs);
                setBlobs(copyOfSheklha);
              }}
              show={show}
              key={g}
              x={blob.x}
              counter={g + 1}
            />
          ))}
        </Layer>
      </Stage>
    </>
  );
};
export default App;
