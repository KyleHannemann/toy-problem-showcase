import React, {Component} from 'react'


export default class Sum extends Component{
    constructor(props){
        super(props);
        this.state = {
            num1: null,
            num2: null,
            result: null,
        }
    }
    changeNum1(e){
        this.setState({
            num1: e.target.value
        })
    }
    changeNum2(e){
        this.setState({
            num2: e.target.value
        })
    }
    result(){
        const num1 = this.state.num1;
        const num2 = this.state.num2;
        const sum = parseFloat(num1) + parseFloat(num2);
        this.setState({
            result: sum
        })
        
    }
    render(){


        return (
            <div className="puzzleBox sumPB">
            <h4>Sum</h4>
            <input placeholder="number 1" onChange={(e)=>{this.changeNum1(e)}}className="inputLine"/>
            <input placeholder="number 2"onChange={(e)=>{this.changeNum2(e)}}className="inputLine"/>
            <button onClick={()=>{this.result()}}className="confirmationButton">add</button>
            <span className="resultsBox">Sum: {this.state.result}</span>
        </div>) 
    }
}