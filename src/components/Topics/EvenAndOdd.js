import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
    constructor(props){
        super(props);
        this.state = {
            evenArray:[],
            oddArray: [],
            userInput: ''
        }
    }
    updateInput(event){
        
        this.setState({
            userInput: event.target.value,
        })
        console.log(this.state.userInput)
    }
    solution(){
        let asArr = this.state.userInput.split(',');
        let even1 = asArr.filter(function(el){
            let asInt = parseInt(el)
            return asInt % 2 === 0;
        })
        let odd1 = asArr.filter(function(el){
            let asInt = parseInt(el)
            return asInt % 2 !== 0;
        });
        let even = [];
        for (var i = 0; i < even1.length; i++){
            if (i !== even1.length -1){
                even.push(even1[i]+",");
            }
            else{
                even.push(even1[i]);
            }
        }
        let odd = [];
        for (var i = 0; i < odd1.length; i++){
            if (i !== odd1.length -1){
                odd.push(odd1[i]+",");
            }
            else{
                odd.push(odd1[i]);
            }
        }
        
        this.setState({
            evenArray: even,
            oddArray: odd
        })
        console.log(even1)
        
    }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
          <h4>Evens and Odds</h4>
          <input placeholder="comma separated list of numbers"onChange={(event)=>{this.updateInput(event)}} className="inputLine"/>
          <button onClick={()=>{this.solution()}}className="confirmationButton">confirm</button>
          <span className="resultsBox">Evens: {this.state.evenArray}</span>
          <span className="resultsBox">Odds: {this.state.oddArray}</span>

      </div>
    )
  }
}