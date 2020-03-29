import React from 'react';
import Card from '../Card';

export default function Filter(props){
    return(
        <div uk-filter="target: .js-filter">
            <ul className="uk-subnav uk-subnav-pill">
                <li>
                    <a href="#">18 HOLES</a>
                </li>
                <li>
                    <a href="#">9 HOLES</a>
                </li>
            </ul>
            <ul className="js-filter">
                <Card title="Test Card">
                    This is a test card.
                </Card>
            </ul>
        </div>
    )
};