import React from "react";
import './App.css';
import Main from "./containers/Main";
import {ToastContainer} from "react-toastify";
import CssBaseline from "@material-ui/core/CssBaseline";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
        <CssBaseline/>
        <ToastContainer
            draggable={false}
            hideProgressBar
            autoClose={3000}
            style={{ width: 250}}
        />
        <Main/>
    </div>
  );
}

export default App;
