import React,{Component} from 'react';

class EventBind  extends Component{

    constructor(props){
        super(props)
        this.state ={
            message:"Hello"
        }

        this.clickHandler = this.clickHandler.bind(this)

    }

clickHandler = () => { 
    this.setState({
        message :"Good bye"
    })
}


    render(){
        return(<div>
            {this.state.message}
           
            <button onClick={this.clickHandler}>Click me - EventBind</button>
        </div>

        )
    }
}
//// <button onClick={this.clickHandler.bind(this)}>Click me - EventBind</button>

//------------------------------------------------------------------------------------------
  //  clickHandler(){
       // this.setState({ message:"Good bye"})     
      //  console.log(this)
    //}

// <button onClick={() => this.clickHandler()}>Click me - EventBind</button>
export default EventBind