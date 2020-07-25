import React, { Component } from 'react'
import Input from './Input';

class FocusInput extends Component{

    constructor(props){
        super(props)

        this.componentRef = React.createRef()
    }

    clickHandler = () =>{
        //this.componentRef.current.focusInput()
        this.componentRef.current.focus()
    }

    render(){
        return(
            <div>
                <Input ref={this.componentRef}></Input>
                <h1>my line below to see if i understood</h1>
                <input type="text" ref={this.componentRef}></input>
                <button onClick={this.clickHandler}>Focus Input - child input will be focused</button> 
            </div>
        )
    }
}

export default FocusInput