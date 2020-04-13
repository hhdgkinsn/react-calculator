import React from 'react';
import '../sass/main.css';

const isOperator = val => !isNaN(val) || val === "." || val === "=";


export const Button = ({children, handleClick}) => (
    <div 
    className={`buttonWrapper ${
        isOperator(children) ? null : 'operator'
    }`}
    onClick={() => handleClick(children)}
    >
        {children}
    </div>
);
