import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   const [blobs, setBlobs] = useState([]);
//   const handelCreate = () => {
//     setCounter(counter + 1);
//     setBlobs((prevBlobs) => [
//       ...prevBlobs,
//       {
//         x: blobs.length * 100,
//       },
//     ]);
//
//     console.log("x : " + blobs.length * 100);
//   };
//   return (
//     <>
//       <button onClick={handelCreate}>Create</button>
//       <Stage width={window.innerWidth} height={window.innerHeight}>
//         <Layer>
//           {blobs.map((blob, i) => (
//             <Values key={i} x={blob.x} counter={counter} />
//           ))}
//         </Layer>
//       </Stage>
//     </>
//   );
// };
//
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
