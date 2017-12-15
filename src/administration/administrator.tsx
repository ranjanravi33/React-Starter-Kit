import React from 'react';
import ReactDOM from 'react-dom';
import { DropDown } from '../commonComponents/commonComponents'
import _ from 'lodash';
export interface IAdministratorProps {
}
export interface IAdministratorStates {
    rawData: any[];
    selectedCountry: string;
    selectedCountryStates: Array<string>;
    selectedState: string;
}
export class Administrator extends React.Component<IAdministratorProps, IAdministratorStates> {
    constructor(props) {
        super(props);
        this.state = {
            rawData: [{ country: "India", states: ["UttarPradesh", "Bihar", "Uttrakhand", "Jammu and Kashmir"] }, { country: "America", states: ["a", "b", "c", "d"] }],
            selectedCountry: null,
            selectedState: null,
            selectedCountryStates: []
        }
    }
    componentWillMount() {
        //this.setState({selectedCountry: _.first(this.state.rawData).country, selectedCountryStates: _.first(this.state.rawData).states, selectedState: _.first( _.first(this.state.rawData).states) as string });
    }
    countryChange = (value) => {
        this.setState({ selectedCountry: value, selectedCountryStates: _.find(this.state.rawData, (r) => { return r.country === value}).states });
    }
    stateChange = (value) => {
        this.setState({selectedState: value});
    }

    render() {
    return <div>
            <DropDown caption={"Country"} options={_.map(this.state.rawData, (d) => { return {label: d.country, value: d.country} })} onChange={this.countryChange} />
            <DropDown caption={"State"} options={_.map(this.state.selectedCountryStates, (c) => { return { label: c, value: c }})} onChange={this.stateChange} />
        </div>;
    }
}