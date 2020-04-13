import React from 'react';
import '../sass/main.css';

export const Clearbutton = ({children, handleClear}) => (
    <div 
     className="clear-btn"
     onClick={() => handleClear()}
    >
        {children}
    </div>
);