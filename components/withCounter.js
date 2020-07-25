    import React from 'react'


    // Naming coventions are different , please refer notebook
const UpdateComponent = (OriginalComponent,incNum) => {   // UpdateComponent takes OriginalComponent as paramenter in child class
    class NewComponent extends React.Component{

        constructor(props){
            super(props)
    
            this.state = {
                count :0
            }
        }
    
        incrementCount=()=>{
            this.setState( previousState=> ({
                count: previousState.count+incNum
            })) 
        }

        render(){
            return  <OriginalComponent count={this.state.count}  incrementCount={this.incrementCount}
            {... this.props}></OriginalComponent>
        }
    }
    return NewComponent  
}
 

export default UpdateComponent  