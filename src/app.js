import React from'react'
import { render }from'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, 
    Route, 
    Switch,
} from "react-router-dom";

import  routes  from './core/routers'
import Nav from './components/Header'

const app = document.getElementById('app')

render(<Router>
        <MuiThemeProvider>    
            <div>
                <Nav/>
                <Switch>
                    {routes.map((route, i) => <Route key={i} {...route} />)}
                </Switch>
            </div>
        </MuiThemeProvider>
    </Router>
, app)
