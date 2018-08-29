import React, {Component} from "react"

export default class Life extends React.Component{
  render(){
    return(
     <div>
         <p>React 生命周期</p>
         <button onClick={this.clicks}></button>
    </div>

    )
  }
}
