import React from 'react';
import ReactDOM from 'react-dom';
import { SideMenuBar } from './shared/sideMenuBar';
import { Main } from './shared/main';
import { Header } from './shared/header';
export interface IAppProps {
}
export interface IAppStates {
}
export class App extends React.Component {
    render() {
        return <div>
            <SideMenuBar />
            <Header />
            <Main />
        </div>;
    }
}
ReactDOM.render(<App />, document.getElementById("app"));