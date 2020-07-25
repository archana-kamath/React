import React,{Component} from 'react';
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {


 
    render(){

       // const {name} = this.state
        const {count, incrementCount} = this.props

        return(<div>
           
        <button onClick={incrementCount}>{this.props.name} {count} Increment - click</button>
        </div>
            )
    }

}

export default UpdatedComponent(ClickCounter,5);