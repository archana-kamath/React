import React,{Component} from 'react';

class Form  extends Component{

    constructor(props){
        super(props)
        this.state ={
                username:"",
                comments:"",
                topic:"react"
        }
    }

    changeTextHandler = (event) => {

        console.log(event.target.value)
        this.setState({
            username : event.target.value 
        })
        
    }

    changeTextAreaHandler = (event) => {
        console.log(event.target.value)
        this.setState({
            comments : event.target.value 
        })
    }
    changeSelectHandler = (event) => {
        console.log(event.target.value)
        this.setState({
            topic : event.target.value 
        })
    }

    submitHandler = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    render(){
        return(<form onSubmit={this.submitHandler}>
            <div>
                 <label>Username</label>
                 <input type="text" value={this.state.username} onChange={this.changeTextHandler}></input>
            </div>
            <div>
                 <label>Comments</label>
                 <textarea value={this.state.comments} onChange={this.changeTextAreaHandler}></textarea>
            </div>
            <div>
                 <label>Topics</label>
                 <select value={this.state.topic} onChange={this.changeSelectHandler}>
                     <option value="angular">Angular</option>
                     <option value="react">React</option>
                     <option value="node">Node</option>
                 </select>
            </div>
            <button>Submit</button>
        </form>

        )
    }
}

export default Form