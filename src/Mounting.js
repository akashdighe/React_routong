 import React from "react"

 export default class Unmounting extends React.Component {
     constructor(props){
         super(props)
         
     }
     render(){
         return(
             <div>
                <h1  style={{color:"blue"}}>Mounting Phase= Mounting means puting Element into the DOM</h1>
             </div>
         )
     }

 };