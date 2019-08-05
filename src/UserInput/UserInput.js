import React from 'react';

const userInput = (props) => {
    return (
        <div>
            <p  onClick={props.click}> Change username!</p>
            <input type ="text"  onChange={props.changed} value= {props.username} />
        </div>
    )
};

export default userInput;