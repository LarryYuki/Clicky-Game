import React, {Component} from 'react';
import Card from "./components/Card"
import './App.css';
import friends from './pics'
import Header from './components/Header';
import Footer from'./components/Footer/'

class App extends Component {
  state={
    friends:friends,
    clicked:[],
    score:0,
    highScore:0,
  }
  randomNum = (a, b) => (Math.random() > 0.5 ? -1 : 1);
  //score=this.state.clicked.length
  handleClicks=value=>{
  
    let ClickVaule= new Array(...this.state.clicked)

    console.log(value)
    console.log(ClickVaule)
    let score= this.state.score;
    let friends=this.state.friends
   
    if(ClickVaule.includes(value)){
      if(score>this.state.highScore){
        this.setState({highScore:score})
      }
      this.setState({friends:friends.sort(this.randomNum),
        clicked:[],
        score:0,
      });
      alert('You lose,Again?')
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
}
  render(){
    return (
      <div className="App">
        <Header 
        score={this.state.score}
        highScore={this.state.highScore}
        />

        <div className='wrapper'>
        {this.state.friends.map((friend,index)=>{
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

      <Footer/>
      </div>
    );
  }
  
}

export default App;
