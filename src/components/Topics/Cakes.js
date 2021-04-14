import React, {Component} from 'react';


export default class Cakes extends Component{
    constructor(props){
        super(props);
        this.state = {
            cookieRec: {butter: "1 tbs", brownSugar: '1 tbs', sugar: '1/2 tbs',
        salt: '1/16 tsp', vanillaExtract: '1/8 tsp', eggs: '1/2 egg', bakingSoda:'1/8 tsp', flour: '1/8 cup', chocolateChips: '2 tbs'},
        
        cookie: {butter: 1, brownSugar: 1, sugar: 1/2,
        salt: 1/16 , vanillaExtract: 1/8 , eggs: 1/2 , bakingSoda: 1/8, flour: 1/8, chocolateChips: 2},
        
        available: {butter: 0, brownSugar: 0, sugar: 0,
            salt: 0 , vanillaExtract: 0 , eggs: 0 , bakingSoda: 0, flour: 0, chocolateChips: 0},

            totalCookies: 0,
        }
    }
cakes(){
    let recipe = this.state.cookie;
    let available2 = this.state.available;
    let counts = []
    for (var item in recipe){
        let count = 0;
        console.log(recipe[item])
        if (available2[item] === 0){
            counts.push(count);
        }
        else if(available2[item] > 0){
        while(available2[item] >= recipe[item]){
            available2[item] = available2[item] - recipe[item];
            count++;
            
        }
        counts.push(count);
    }
    }
    let total = counts.sort(function(a,b){
        return a - b;
    })[0];

    this.setState({
        totalCookies:total
    })

}
addI(event, ingredient){
    let prev = this.state.available;
    prev[ingredient] = parseFloat(event.target.value);
    this.setState({
        available: prev
    })
    
    console.log(this.state.cookie)
    console.log(this.state.available)
}
reset(){
    let inputs = Array.from(document.querySelectorAll('#cookies > div > input'));
    for (var i = 0; i < inputs.length; i++){
        inputs[i].value = null;
    }
    this.setState({
        available: {butter: 0, brownSugar: 0, sugar: 0,
            salt: 0 , vanillaExtract: 0 , eggs: 0 , bakingSoda: 0, flour: 0, chocolateChips: 0},
            totalCookies: 0,

    })
}

render(){
    return(
        <div id="cookies">
            <h4>Recipe for 1 Cookie</h4>
            <h6>{JSON.stringify(this.state.cookieRec)}</h6>
            <h4>Ingredients Available:</h4>
            <div>butter<input onChange={(e)=>{this.addI(e, 'butter')}}placeholder={this.state.available.butter}/><span>tbs</span></div>
            <div>brown Sugar<input onChange={(e)=>{this.addI(e, 'brownSugar')}}placeholder={this.state.available.brownSugar}/><span>tbs</span></div>
            <div>sugar<input onChange={(e)=>{this.addI(e, 'sugar')}}placeholder={this.state.available.sugar}/><span>tbs</span></div>
            <div>salt<input onChange={(e)=>{this.addI(e, 'salt')}}placeholder={this.state.available.salt}/><span>tsp</span></div>
            <div>vanilla extract<input onChange={(e)=>{this.addI(e, 'vanillaExtract')}}placeholder={this.state.available.vanillaExtract}/><span>tsp</span></div>
            <div>eggs<input onChange={(e)=>{this.addI(e, 'eggs')}}placeholder={this.state.available.eggs}/><span>eggs</span></div>
            <div>baking soda<input onChange={(e)=>{this.addI(e, 'bakingSoda')}}placeholder={this.state.available.bakingSoda}/><span>tsp</span></div>
            <div>flour<input onChange={(e)=>{this.addI(e, 'flour')}}placeholder={this.state.available.flour}/><span>cups</span></div>
            <div>chocolate chips<input onChange={(e)=>{this.addI(e, 'chocolateChips')}}placeholder={this.state.available.chocolateChips}/><span>tbs</span></div>
            <button onClick={()=>{this.cakes()}}>calculate</button>
            <button onClick={()=>{this.reset()}}>reset</button>
            <span id="totalCookies">Total Cookies: {this.state.totalCookies}</span>
        </div>
    )
}
}

