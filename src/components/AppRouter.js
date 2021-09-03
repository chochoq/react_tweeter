import React, { useState } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Navigation from './Navigation';
import Auth from 'router/Auth';
import Home from 'router/Home';
import Profile from 'router/Profile';


const AppRouter =({isLoggedIn}) => {
    return (
        <Router>
            {isLoggedIn && <Navigation/>}
            <Switch>
                {isLoggedIn ?
                (<>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                </>) : (
                <>
                    <Route exact path="/">
                        <Auth/>
                    </Route>
                    <Redirect from="*" to="/"/>
                </>
                    )}
                    
            </Switch>
            
        </Router>
    )
}

export default AppRouter;