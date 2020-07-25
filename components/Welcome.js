import React,{Component} from 'react';



class Welcome extends Component {
    render(){
        const {name,heroName} = this.props
    return<h1>Hello {name} - {heroName} Class component</h1>
    }

}
//return<h1>Hello {this.props.name} - {this.props.heroName} Class component</h1>
export default Welcome;