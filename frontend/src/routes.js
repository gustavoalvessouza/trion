import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Card from './components/Card'

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
                </Switch>
            </BrowserRouter> 
        </>
    )
}