import React, {Component} from 'react';
import Card from "./components/Card/Cards"
import './App.css';
import friends from './friends'

//friends.forEach(friend=>friend.clicked=false)//this is for if we were gonna do the boolean and find way
//console.log(newfriends)
class App extends Component {
  state={
    friends:friends,
    clicked:[]
  }
//score=this.state.clicked.length
  handleClicks=(value)=>{
    console.log("RIGHT HERE",value)
    
    let dontMessWithState= new Array(...this.state.clicked)
    console.log(dontMessWithState.includes(value))
    console.log(value)
    console.log(dontMessWithState)
    dontMessWithState.push(value)
    // DO NOT DO: this.state.clicked.push(value)
       if(dontMessWithState.includes(value)){
         console.log("clicked already")
       }else{
         
              //keep playing
            }
            //TODO this.shuffle()
    this.setState({clicked:dontMessWithState},()=>{
      //console.log(this.state.clicked)
    })
  }

  render(){
   // console.log()
    return (
      <div className="App">
        {this.state.friends.map((friend,index)=>{
          //console.log(friend.image)
          return (
            <Card
             imageLink={friend.image}
             name={friend.name}
             handlerNONSENSE={this.handleClicks}
             key={index}
              />
          )}
        )}
      </div>
    );
  }
  
}

export default App;
