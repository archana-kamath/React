import React from 'react';
import App from '../App';

/*function greet(){
    return <h1>Hello Maya</h1>
}*/

const Greet =(props) =>
//const Greet =(props) =>
{
    const {name,heroName} = props
    console.log(props);
    return (
        <div>
            <h1>Hello {name} the {heroName}- Function component using arrow</h1>
            
        </div>
    )
}
export  default Greet;

//<h1>Hello {props.name} the {props.heroName}- Function component using arrow</h1>
//{props.children}