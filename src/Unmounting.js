import React from "react"

export default class Unmounting extends React.Component {
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <div>
                <h1 style={{color:"red",float:'none'}}>Unmounting Phase= when you want to remove element from DOM</h1>
            </div>
        )
    }

};   