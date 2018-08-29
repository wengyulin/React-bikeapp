import React from "react"
import {HashRouter,Route ,Switch} from "react-router-dom"
import Login from "./pages/login/index"
import App from "./App"
import Admin from "./admin"
import NoMatch from "./pages/nomatch/index"
import Buttons from "./pages/ui/button"
export default class IRouter extends React.Component{
  render(){
     return (
     <HashRouter>
          <App>
            <Route path="/login" component={Login}>
            
            </Route>
            <Route path="/admin" render={()=>
             <Admin>
             <Switch>
                <Route path="/admin/ui/buttons" component={Buttons}/>
                <Route  component={NoMatch}/>
             </Switch>
              
             </Admin>
          } />
           
         </App>
     
     </HashRouter>
     )
  }

}