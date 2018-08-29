import React from "react";
import {Menu, Icon} from "antd"
import {NavLink} from "react-router-dom"
import menuConfig from "../../config/menuConfig";
import "./index.less";
const SubMenu=Menu.SubMenu;

export default class NavLeft extends React.Component{
  componentWillMount(){
   const menuTreeNode=this.renderMenu(menuConfig);
   this.setState({
     menuTreeNode
   })
  }
  renderMenu=(data)=>{
    return data.map((item)=>{
      if(item.children){
        return (

          <SubMenu title={item.title} key={item.key}>
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
        <NavLink to={item.key}>{item.title}</NavLink>
    </Menu.Item>


    })
  }
  render(){
    return(
      <div style={{backgroundColor:"red"}}>
       <div> 
         <div className="logo">
          <img src="/assets/logo-ant.svg" />
          <h1>weng SMG</h1>
         </div>
          <Menu theme='dark'>
            {this.state.menuTreeNode}
          </Menu>
       </div>
      </div>
    )
  }
}