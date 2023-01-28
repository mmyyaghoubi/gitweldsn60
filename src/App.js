import { Stage, Layer } from "react-konva";
import React, { useState } from "react";
import PikWithTag from "./PikWithTag";

const App = () => {
  const [show, setShow] = useState(true);
  const [counterTag, setCounterTag] = useState(0);
  // blob is x and id of our created pik
  const [blobs, setBlobs] = useState([]);
  const [selectShape, setSelectShape] = useState(null);
  const handelCreate = () => {
    setCounterTag(counterTag + 1);
    setBlobs((prevBlobs) => [
      ...prevBlobs,
      {
        id: blobs.toString(),
        x: blobs.length * 100,
      },
    ]);
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
            <PikWithTag
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
              counterTag={g + 1}
            />
          ))}
        </Layer>
      </Stage>
    </>
  );
};
export default App;
