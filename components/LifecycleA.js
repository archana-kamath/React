import React,{Component} from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA  extends Component{

    constructor(props){
        super(props)

        this.state ={
            name:"Archana"
        }

        console.log("Life cycle A - constructor")

    }

    static getDerivedStateFromProps(props,state){
        console.log("Life cycle A - setDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("Life cycle A - componentDidMount")
    }

    // comment out - </React.StrictMode> in index.js

    render(){
        console.log("Life cycle A - render")
        return(<div>
          <div>Lifecycle A </div>
          <LifecycleB> </LifecycleB>
        </div>
        )
    }
}

export default LifecycleA