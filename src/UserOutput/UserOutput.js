import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
            <p onClick={props.click} >{props.username}</p>
            <p>This is a random paragraph.</p>
            <p>During the first part of your life, you only become aware of happiness once you have lost it. Then an age comes, a second one, in which you already know, at the moment when you begin to experience true happiness, that you are, at the end of the day, going to lose it.</p>
            <input type ="text"  onChange={props.changed} value= {props.username} />
        </div>
    )
};

export default UserOutput;