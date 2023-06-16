import React from 'react';
import './View.css';

const View = (props) => {
    return <div className="view">
        {props.page}
    </div>
}

export default View;