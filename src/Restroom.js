import React from "react";
import Restrooms from "./Restrooms"

 class Restroom extends React.Component {
  render() {
      return (
          <ul>
              <li> {this.props.restroom.name}</li>
          </ul>
      )
  }

}

export default Restroom;

