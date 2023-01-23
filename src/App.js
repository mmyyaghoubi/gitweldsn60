import { Stage, Layer } from "react-konva";
import React,{useState} from "react";
import Values from "./Values";



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
                        //counter----->i+1
                        <Values key={i} x={blob.x} counter={i+1} />
                    ))}
                </Layer>
            </Stage>
        </>
    );
};
export  default App