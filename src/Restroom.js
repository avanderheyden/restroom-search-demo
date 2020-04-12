import React from "react";
import Restrooms from "./Restrooms"

 class Restroom extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            search: '',
          restroom: this.props.restroom
        
        };
    }
  render() {
      return (
          <ul>
              <li> {this.props.restroom.name}</li>
          </ul>
      )
  }

}

export default Restroom;

