import React from "react";

export class Home extends React.Component{
    constructor(props){
        super();
        this.state = {
            age : props.initialAge    
        };
    }
    
    onMakeOlder(){
        this.setState({
            age : parseInt(this.state.age) + 3 
        });
        
    }
    
    render(){
        return (
          <div>
            <p>In a new Component</p>
            <p>Your name is {this.props.name} and age is : {this.state.age}</p>
            <button onClick = {this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
          </div>  
        );
    }
}

