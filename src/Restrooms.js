import React from "react";
import Restroom from "./Restroom"
import App from "./App"


const restrooms =
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

class Restrooms extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          search: '',
          restrooms: [],
          restroom: this.props.restroom
        
        };
    
      }

      updateSearch(event) {
        this.setState({search: event.target.value});
      }

  render() {
    let filteredRestrooms= restrooms.filter
        ((restroom) => {
          return restroom.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
         }
        );
      return (
        <div>
            <ul>
            {filteredRestrooms.map((restroom)=> {
                  return <Restroom restroom={restroom} 
                  key={restroom.id}/>

              })}
            </ul>
            <h1> Search for a Restroom:</h1>
              <label>Search: </label>
              <input type="text" 
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}/> 
              </div>
           )   
          }
        }
            
           
   

export default Restrooms;

