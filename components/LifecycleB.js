import React,{Component} from 'react';

class LifecycleB  extends Component{

    constructor(props){
        super(props)

        this.state ={
            name:"Archana"
        }

        console.log("Life cycle B - constructor")

    }

    static getDerivedStateFromProps(props,state){
        console.log("Life cycle B - setDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("Life cycle B - componentDidMount")
    }

    // comment out - </React.StrictMode> in index.js

    render(){
        console.log("Life cycle B - render")
        return(<div>
          <div>Lifecycle B</div>
        </div>
        )
    }
}

export default LifecycleB