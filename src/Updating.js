import React from "react"

export default class Updating extends React.Component {
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <div>
                <h1 style={{color:"green"}}>Updating Phase= when our state and props are change it is in Updation phase</h1>
            </div>
        )
    }

};