import React , { Component } from 'react';

export default class SelectBox extends Component{
    render(){
        let options = this.props.option
        return(
            <div>
            <label style={{margin: "10px", marginRight:"55px"}}>{this.props.title} </label>
            <select name={this.props.name} onChange={this.props.passedfunction} value={this.props.value}>
            {options.map(({ value, label }) => <option value={value} >{label}</option>)}
            </select>
        </div>
        )
    }
}