import React, {Component} from 'react';
import Card from "./components/Card/Cards"
import './App.css';
import friends from './pics'
import Header from './components/Header/Header';


//friends.forEach(friend=>friend.clicked=false)//this is for if we were gonna do the boolean and find way
//console.log(newfriends)
class App extends Component {
  state={
    friends:friends,
    clicked:[],
    score:0,
    highScore:0,
    //isGuessed:false
  }
  randomNum = (a, b) => (Math.random() > 0.5 ? -1 : 1);
  //score=this.state.clicked.length
  handleClicks=value=>{
    //const currentPic=value;
    // console.log("RIGHT HERE",value)
    let ClickVaule= new Array(...this.state.clicked)
    //onsole.log(ClickVaule.includes(value))
    console.log(value)
    console.log(ClickVaule)
    let score= this.state.score;
    let friends=this.state.friends
    //DO NOT DO: this.state.clicked.push(value)
    if(ClickVaule.includes(value)){
      //TODO put score in the highscore?
      if(score>this.state.highScore){
        this.setState({highScore:score})
      }
      //this is reset logic
      this.setState({friends:friends.sort(this.randomNum),
        clicked:[],
        score:0,
        //isGuessed:false
      });
      alert('You lose,Again?')



      //  console.log("clicked already")
    }else{
      
      score= score + 1
      this.setState({
        clicked:ClickVaule,
        score:score,
        friends:friends.sort(this.randomNum)
      },
      () => {
        if (this.state.score === friends.length) {
          alert('You Win!');
          this.setState({
           friends: this.state.friends.sort(this.randomNum),
            clicked: [],
            score: 0,
            highScore: friends.length
      })
        }})

        ClickVaule.push(value)
    }
            //TODO this.shuffle()

}


  render(){
   // console.log()
    return (
      <div className="App">

        <Header 
        score={this.state.score}
        highScore={this.state.highScore}
        />
        {this.state.friends.map((friend,index)=>{
          //console.log(friend.image)
          return (
            <Card
             imageLink={friend.image}
             name={friend.name}
             picClick={this.handleClicks}
             key={index}
              />
          )}
        )}
      </div>
    );
  }
  
}

export default App;
