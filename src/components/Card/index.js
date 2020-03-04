import React from 'react';

export default function Card(props){

    return(
        <div className='uk-card uk-card-body'>
            <h3 class='uk-card-title'>{props.title}</h3>
            <p>{props.children}</p>
        </div>
    )
}