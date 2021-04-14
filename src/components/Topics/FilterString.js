import React, {Component} from 'react'


export default class FilterString extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInput: [],
            filteredArr: [],
            unFilteredArr: ["Deion Sanders", "Reggie Bush", "Michael Jordan", "Spudd Webb", "Charles Woodson", "Ken Griffrey Jr."]
        }
    
        
    }
    changeInput(event){
        this.setState({
            userInput: event.target.value
        })
    }
    filter(){
        let filterBy = this.state.userInput;
        let filtered = this.state.unFilteredArr.filter(function(el){
            return el.includes(filterBy);
        })
        this.setState({
            filteredArr: filtered
        })
    }
    render(){
        return (
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArr)}</span>
                <input placeholder="filter by:" onChange={(event)=>{this.changeInput(event)}}className="inputLine"/>
                <button onClick={()=>{this.filter()}}className="confirmationButton">filter</button>
                <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredArr)}</span>
            </div>
        );
    
    }
}