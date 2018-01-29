import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Todo from './components/todoApp';
import history from './History';
// export const history = createBrowserHistory()

class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact path="/" component={Todo} />
                
                </div>
            </Router>
        )
    }
}

export default Routers;