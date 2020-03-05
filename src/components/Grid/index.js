import React from 'react';

export default function Grid(props){
    
    return(
        <div className='uk-grid'>
            <div className={props.width}>
                {props.children}
            </div>
        </div>
    )
};