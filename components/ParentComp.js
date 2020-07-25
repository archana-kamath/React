import React,{Component} from 'react';
import RegComp from './RegComponent';
import PureComp from './PureComp';
import MemoComp from './MemoComp';

class ParentComp  extends Component{

    constructor(props){
        super(props)

        this.state ={
            name:"Archana"
        }
    }

    componentDidMount(){
        setInterval(()=> {
            this.setState({
                name:"Archana"
            })
        }, 2000)
    }

    render(){
        console.log('Parent Comp')
        return(<div>
                 Parent Comp
                 <MemoComp name={this.state.name}></MemoComp>
            </div>
        )
    }
}

export default ParentComp

//<RegComp name={this.state.name}></RegComp>
//<PureComp name={this.state.name}></PureComp>