import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, HashRouter, BrowserRouter } from 'react-router-dom';
import { Administrator } from '../administration/administrator';
import { Customer } from '../customers/customer';
import { Retailer } from '../retailers/retailer';
import { Home } from '../home/Home';
export interface IMainScrnProps {
}
export interface IMainScrnStates {
}
export class Main extends React.Component {
    render() {
        return <div id="pterBody">
            <HashRouter>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/adminPanel" component={Administrator} />
                    <Route path="/customer" component={Customer} />
                    <Route path="/customer/:id" component={Customer} />
                    <Route path="/retailer" component={Retailer} />
                    <Route path="/retailer/:id" component={Retailer} />
                </div>
            </HashRouter>
        </div>
    }
}