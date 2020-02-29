import React from 'react';

export default function Section(props){

    return(
        <div className='uk-section uk-section-default'>
            {props.children}
        </div>
    )
}