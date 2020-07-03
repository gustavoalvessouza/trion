import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Card from './components/Card'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import RecoveryPassword from './pages/RecoveryPassword'

export default function Routes() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Card} />
                    <Route path="/conquistas" component={Card} />
                    <Route path="/regras" component={Card} />
                    <Route path="/missoes" component={Card} />
                    <Route path="/avisos" component={Card} />
                    <Route path="/recompensas" component={Card} />

                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/recoveryPass" component={RecoveryPassword} />
                </Switch>
            </BrowserRouter> 
        </>
    )
}