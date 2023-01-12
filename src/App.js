import React from "react";
import "./App.css";
import { ApplicationContextProvider } from "./context/context-application";
import { Home } from "./components/Home";

function App() {
  
  return (
    <div className="App">
 <ApplicationContextProvider>
     <Home/>
     </ApplicationContextProvider>
    </div>
  );
}



export default App;
