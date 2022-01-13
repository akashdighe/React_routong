import React from "react"
import { Link } from "react-router-dom"

const style={
    container:{
        float:"left",
        padding:"10px",
               
    }
}
export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div><h1 style={{color:"gray",marginLeft:"400px",}}>Life Cycle Component</h1></div>
                <div style={style.container}> <Link to="/"> Mounting</Link> </div>
                <div style={style.container}> <Link to="/unmounting"> Unmounting</Link> </div>
                <div style={style.container}> <Link to="/updating"> Updating</Link> </div><br/>
            </div>
        )
    }
};