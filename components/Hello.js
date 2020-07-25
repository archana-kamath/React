import React from 'react';

const Hello = () => {
    return(

        //<div id="hello"  className="DummyClass">          
            //<h1>Hello JSX</h1>
        //</div>
       React.createElement('div',{id:'hello', className:"DummyClass"}, 

       React.createElement('h1',null,"Hello JSX"))
    );
}

export default Hello