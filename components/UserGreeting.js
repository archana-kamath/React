import React, {Component} from 'react';

class UserGreeting extends Component{

    constructor(props){
        super(props)

        this.state ={
            isLoggedIn : true  
        }

    }

    render(){
      // return(this.state.isLoggedIn ? <div>User</div> : <div>guest</div> )
      return(this.state.isLoggedIn && <div>User</div> )
    }
}

export default UserGreeting

/*Approach 1
 if(this.state.isLoggedIn){
            return(<div>Welcome user</div>)
        }
        else{
            return(<div>Welcome Guest</div>)
        }
*/