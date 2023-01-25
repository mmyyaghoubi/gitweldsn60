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
        x: blobs.length * 100,
      },
    ]);
    // console.log("x : " + blobs.length * 100);
    console.log("blobs.length : " + blobs.length);
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

  return (
    <>
      <button onClick={handelCreate}>Create</button>
      <button onClick={handelUndo}>undo</button>
      <button onClick={handelShow}>on/off</button>
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          {blobs.map((blob, i) => (
            //counter----->i+1
            <Values show={show} key={i} x={blob.x} counter={i + 1} />
          ))}
        </Layer>
      </Stage>
    </>
  );
};
export default App;
