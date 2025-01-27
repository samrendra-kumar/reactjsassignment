import "./App.css";
import React from "react";
import { BookingProvider } from "./store/context";
import Clickable from "./component/Clickable";
// import Moviedetail from "./api";

const App=()=>
  {
    return(
      <BookingProvider>
        <Clickable/>
      </BookingProvider>
    )
  }










































export default App;
