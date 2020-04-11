import React from "react";
import "./App.css";
import { Component } from "react";
import Restrooms from "./Restrooms";

let restrooms =
[{
  name: "Cafe Mochi",
  id: 1
},
{
  name: "The Vine",
  id: 2
},
{ 
 name: "CBGB",
 id: 3
}
]

class App extends Component {
  render() {
    return (
      <div>
        <h1> Restrooms</h1>
        <Restrooms restrooms= {this.props.restrooms} />
      </div>
      
    );
  }
}

export default App;