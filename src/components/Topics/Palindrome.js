import React, {Component} from 'react'


export default class Palindrome extends Component{
    constructor(props){
        super(props);
        this.state = {
            
            input: '',
            answer: ''
        }
    }
    inputChange(event){
        this.setState({
            input: event.target.value
        })
    }
    check(){
        let input = this.state.input;
        let inputAsArr = input.split('');
        let wordBack = "";
        for (var i = inputAsArr.length - 1; i >= 0; i--){
            wordBack += inputAsArr[i];
        }
        if (wordBack === input){
            this.setState({
                answer: "true"
            })
        }
        else{
            this.setState({
                answer: "false"
            })
        }
        console.log(wordBack)
        console.log(input)
        
    }
    render(){
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input placeholder="enter word" onChange={(event)=>{this.inputChange(event)}}className="inputLine"/>
                <button onClick={()=>{this.check()}}className="confirmationButton">check</button>
                <span className="resultsBox">Result: {this.state.answer}</span>
            </div>
        )
    }
}