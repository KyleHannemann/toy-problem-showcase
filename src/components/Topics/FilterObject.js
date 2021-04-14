import React, {Component} from 'react'


export default class FilterObjects extends Component{
    constructor(props){
        super(props);
        this.state = {
            unFilteredArray: [
                {
                    prop: "no"
                    
                },
                {
                    color: "green",
                    value: "#0f0",
                    someProp: "yes"
                },
                {
                    color: "blue",
                    value: "#00f"
                },
                {
                    color: "cyan",
                    
                },
                {
                    color: "magenta",
                    value: "#f0f",
                    someProp: "yes"
                },
                {
                    color: "yellow",
                    value: "#ff0"
                },
                {
                    color: "black",
                    
                }
            ],
            userInput:'',
            filteredArray:[],
        }
    }
    updateInput(event){
            this.setState({
                userInput: event.target.value
            })
            console.log(this.state.userInput)
    }
    filter(){
        let filterBy = this.state.userInput;
        let arr = this.state.unFilteredArray;
        let filtered = [];
        
        for (var i = 0; i < arr.length; i++){
            if (!arr[i][filterBy]){
                continue;
            }
            else{
                filtered.push(arr[i])
            }
        }
        this.setState({
            filteredArray: filtered
        })
        console.log(arr)
        console.log(filtered)
    }

    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                <input placeholder="search keys"onChange={(event)=>{this.updateInput(event)}} className="inputLine"/>
                <button onClick={()=>{this.filter()}}className="confirmationButton">Filter</button>
                <span className="resultsBox">{JSON.stringify(this.state.filteredArray)}</span>
            </div>
        )
    }
}