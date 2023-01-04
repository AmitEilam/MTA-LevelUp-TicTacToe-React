import React from 'react';
import './Cell.css';

const Cell = (props) =>
{
    const handleClick = () =>
    {
        if (props.val === "") {
            props.clicked(props.ind)
        }
    };
    return (
        <div className="cell" onClick={handleClick}>
            <h1> {props.val}</h1>
        </div>
    );
}
export default Cell