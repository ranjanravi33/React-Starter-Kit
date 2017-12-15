import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, HashRouter } from 'react-router-dom';
import { Administrator } from '../administration/administrator';
import { Customer } from '../customers/customer';
import { Retailer } from '../retailers/retailer';
export interface ISideMenuBarProps {
}
export interface ISideMenuBarStates {
}
export class SideMenuBar extends React.Component {
    render() {
        return <HashRouter>
            <nav className="main-menu">
                <ul>
                    <li>
                        <Link to="/adminPanel"><i className="fa fa-home fa-2x"></i>
                                <span className="nav-text">
                                   <b> Admin</b>
                                </span>
                            </Link>
                    </li>
                    <li className="has-subnav"><Link to="/customer"><i className="fa fa-user fa-2x"></i>
                                <span className="nav-text">
                                   <b> Customer </b>
                        </span>
                            </Link>
                    </li>
                    <li className="has-subnav">
                            <Link to="/retailer"><i className="fa fa-home fa-2x"></i>
                                <span className="nav-text">
                                   <b> Retailer </b>
                             </span>
                            </Link>
                    </li>
                </ul>
            </nav>
        </HashRouter>
    }
}