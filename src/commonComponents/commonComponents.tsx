import React from 'react';
import ReactDOM from 'react-dom';
import * as _ from 'lodash';
export interface ITextBoxProps {
    caption: string;
    disabled?: boolean;
    onChange(value: string): void;
    value?: string;
    type?: "text" | "number" | "email" | "password";
}
export interface ITextBoxStates {
}
export class TextBox extends React.Component<ITextBoxProps, ITextBoxStates> {
    handleChange = (event) => {
        if (this.props.onChange != null) {
            this.props.onChange(event.target.value);
        }
    }
    render() {
        return <div className="form-group">
            <label>{this.props.caption}</label><br />
            <input type={this.props.type} className="form-control" disabled={this.props.disabled} value={this.props.value} onChange={this.handleChange}></input>
        </div>
    }
}
export interface ICheckBoxProps {
    caption: string;
    disabled?: boolean;
    onChange(value: string): void;
    value?: string;
    checked?: boolean;
}
export interface ICheckBoxStates {
}
export class CheckBox extends React.Component<ICheckBoxProps, ICheckBoxStates> {
    handleChange = (event) => {
        if (this.props.onChange != null) {
            this.props.onChange(event.target.checked);
        }
    }
    render() {
        return <div className="form-group">
            <label>{this.props.caption}</label> <br />
            <input type="checkbox" checked={this.props.checked} disabled={this.props.disabled} onChange={this.handleChange}></input>
        </div>
    }
}
export interface IRadioListProps {
    caption: string;
    disabled?: boolean;
    onChange(value: string): void;
    value?: string;
    align?: "vertical" | "horizontal";
    options: { label: string, value: string, disabled?: boolean }[];
}
export interface IRadioListStates {

}
export class RadioList extends React.Component<IRadioListProps, IRadioListStates> {
    handleChange = (event) => {
        if (this.props.onChange != null) {
            this.props.onChange(event.target.value);
        }
    }
    render() {
        let align = this.props.align;
        if (align === null || align === undefined) {
            align = "horizontal";
        }
        let className = (align === "horizontal") ? "checkbox" : "checkbox-inline";
        return <div className="form-group">
            <label>{this.props.caption}</label><br />
            {
                _.map(this.props.options, (o, ix) => {
                    return <div className={className + " row"}><input type="radio" name={this.props.caption} value={o.value} disabled={o.disabled} onChange={this.handleChange} /><label> &nbsp; &nbsp;{o.label}</label></div>
                })
            }
        </div>
    }
}
export interface IDropDownProps {
    caption: string;
    onChange(value: string): void;
    options: { label: string, value: string, disabled?: boolean }[];
}
export interface IDropDownStates {

}
export class DropDown extends React.Component<IDropDownProps, IDropDownStates> {
    handleChange = (event) => {
        if (this.props.onChange != null) {
            this.props.onChange(event.target.value);
        }
    }
    render() {
        return <div className="form-group">
            <label>{this.props.caption}</label><br />
            <select className="form-control dropdown" onChange={this.handleChange}>
                {
                    _.map(this.props.options, (o, ix) => {
                        let disabled = (o.disabled === null) ? false : o.disabled;
                        return <option style={{ height: 200 }} disabled={disabled} value={o.value}>{o.label}</option>
                    })
                }
            </select>
        </div>
    }
}
export interface IModalProps {
    visible: boolean;
    width: number;
    header?: JSX.Element;
    content?: JSX.Element;
    footer?: JSX.Element;
}
export interface IModalStates {

}
export class Modal extends React.Component<IModalProps, IModalStates> {

    render() {
        let className = (this.props.visible) ? "modalBack" : "";
        return <div className={className}>
            <div className="modal" style={{width: this.props.width}}>
                { (this.props.header !== null) ?
                <div className="row">
                    <div className="col-md-12"></div>
                    <hr style={{
                    clear: "both",
                    color: "blue",
                    backgroundColor: "blue",
                    height: 1,
                    borderWidth: 0
                }} />
                </div> : null
                }
                <div className="row" style={{width: this.props.width}}>{this.props.content}</div>
                { (this.props.footer !== null) ?
                <div className="row">
                <hr style={{
                    clear: "both",
                    color: "blue",
                    backgroundColor: "blue",
                    height: 1,
                    borderWidth: 0
                }} />
                <div className="col-md-12" style={{width: this.props.width}}></div>
                </div> : null
                }
            </div>
        </div>;
    }
}
