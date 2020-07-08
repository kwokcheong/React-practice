import React, {Component} from 'react';

export default class TextBox extends Component{
    render(){

        return(
            <div>
            <label style={{margin: '10px'}}>{this.props.title}</label>
            <input 
            type={this.props.type}
            maxLength={this.props.maxLength}
            max={this.props.max  || null} 
            name={this.props.name} 
            value={this.props.value} 
            onChange={this.props.passedfunction}/>
            </div>
        )
    }
}