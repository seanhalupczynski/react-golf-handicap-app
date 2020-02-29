import React from 'react';

export default function Container(props){

    return(
        <div className={`uk-container ${props.size}`}>
            {props.children}
        </div>
    )
}