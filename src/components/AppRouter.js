import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../router/Home';
import Auth from '../router/Auth';


const AppRouter =({isLoggedIn}) => {
    return (
        <Router>
            <Switch>
                {isLoggedIn ?
                <>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    </> : <Route exact path="/">
                        <Auth/>
                    </Route>}
            </Switch>
            
        </Router>
    )
}

export default AppRouter;