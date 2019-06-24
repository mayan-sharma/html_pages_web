import React from 'react';
import './backdrop.css';

const backdrop = (props) => (
    <div className="backdrop" onClick ={props.clickbackDropHandler}></div>
);

export default backdrop;