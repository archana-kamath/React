import React,{Component} from 'react';
import { UserConsumer } from './userContext';

class ComponentF extends Component { 
    render(){
        return(<UserConsumer>
            {
            username => {
                return <div>{username}</div>
            }
        }
        </UserConsumer>
            )
    }
}

export default ComponentF;

/**
 * <div>   
                    Component F - Context Example
                </div>
 */