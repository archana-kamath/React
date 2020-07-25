import React,{Component} from 'react';

function ChildComponent(props){
    
        return(
            <div>
               <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
            </div>
        )
    
}
export  default ChildComponent;


//To pass single Parameters, to pass multiple parameters use arrow function 
//<button onClick={props.greetHandler}>Greet Parent</button>