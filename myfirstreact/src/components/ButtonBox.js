import React from 'react';

const ButtonBox = (props) =>{
    return(
    <button className="btn btn-primary m-2" onClick={props.click}>{props.title}</button>
    )
}

export default ButtonBox