import React from 'react';
import "./Header.css";

const Header = ({settodos}) => {

    const resetAll = () => {
        settodos([]);
    }

    return (
        <div className = "header">
            <h2>To-Do-App</h2>
            <div onClick = {resetAll} className = "reset">
                <div>Reset all tasks</div>
                <i className="fa fa-refresh"></i>
            </div>
            
        </div>
    );
};

export default Header;