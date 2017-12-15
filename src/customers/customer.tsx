import React from 'react';
import ReactDOM from 'react-dom';
import { TextBox, CheckBox, RadioList, DropDown, Modal } from '../commonComponents/commonComponents';
export interface ICustomerProps {
}
export interface ICustomerStates {
    nameValue: string;
    checkBox: boolean;
    radioValue: string;
    dropDown: string;
}
export class Customer extends React.Component<ICustomerProps, ICustomerStates> {
    constructor(props){
        super(props);
        this.state = {
            nameValue: '',
            checkBox: false,
            radioValue: "",
            dropDown: ""
        };
    }
    componentWillMount() {
        this.setState({nameValue: "", checkBox: false});
    }
    onChange = (value) => {
        this.setState({nameValue: value});
    }
    radioChange = (value) => {
        this.setState({radioValue: value});
    }
    oncheckChange = (check) => {
        this.setState({checkBox: check});
    }
    dropdownChange = (value) => {
        this.setState({dropDown: value});
    }
    render() {
        return <div>
            <TextBox caption={"Name"} value={this.state.nameValue} disabled={false} onChange={this.onChange} />
            <CheckBox caption={"CheckBox"} disabled={false} onChange={this.oncheckChange} checked={this.state.checkBox} />
            <RadioList align={"vertical"} options={[{label: "Male", value: "male", disabled: false}, {label: "Female", value: "female", disabled: false}]} caption={"RadioList"}  onChange={this.radioChange} value={this.state.radioValue} />
            <DropDown caption={"Dropdown"} options={[{label: "Male", value: "male", disabled: false}, {label: "Female", value: "female", disabled: false}]} onChange={this.dropdownChange} />
        </div>;
    }
}