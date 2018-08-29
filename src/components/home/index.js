import React from "react"
import Mock from "mockjs"
import "./index.less"
export default class Home extends React.Component{
  
  render(){
    var data=Mock.mock({
    'list|1-10':[{
      'id|+1':1
    }]
  })
    return (

      <div className="homn-wrap">{JSON.stringify(data, null, 4)}</div>
    )
  }

}